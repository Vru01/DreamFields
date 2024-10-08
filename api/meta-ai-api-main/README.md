# MetaAI API Wrapper

MetaAI is a Python library designed to interact with Meta's AI APIs that run in the backend of https://www.meta.ai/. It encapsulates the complexities of authentication and communication with the APIs, providing a straightforward interface for sending queries and receiving responses.

With this you can easily prompt the AI with a message and get a response, directly from your Python code. **NO API KEY REQUIRED**

**Meta AI is connected to the internet, so you will be able to get the latest real-time responses from the AI.** (powered by Bing)

Meta AI is running Llama 3 LLM.
import json
import logging
import time
import urllib
import uuid
from typing import Dict, List, Generator, Iterator

import requests
from requests_html import HTMLSession

from meta_ai_api.utils import (
    generate_offline_threading_id,
    extract_value,
    format_response,
)

from meta_ai_api.utils import get_fb_session

from meta_ai_api.exceptions import FacebookRegionBlocked

MAX_RETRIES = 3


class MetaAI:
    """
    A class to interact with the Meta AI API to obtain and use access tokens for sending
    and receiving messages from the Meta AI Chat API.
    """

    def __init__(
        self, fb_email: str = None, fb_password: str = None, proxy: dict = None
    ):
        self.session = requests.Session()
        self.session.headers.update(
            {
                "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 "
                "(KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
            }
        )
        self.access_token = None
        self.fb_email = fb_email
        self.fb_password = fb_password
        self.proxy = proxy
        if self.proxy and not self.check_proxy():
            raise ConnectionError(
                "Unable to connect to proxy. Please check your proxy settings."
            )

        self.is_authed = fb_password is not None and fb_email is not None
        self.cookies = self.get_cookies()
        self.external_conversation_id = None
        self.offline_threading_id = None

    def check_proxy(self, test_url: str = "https://api.ipify.org/?format=json") -> bool:
        """
        Checks the proxy connection by making a request to a test URL.

        Args:
            test_url (str): A test site from which we check that the proxy is installed correctly.

        Returns:
            bool: True if the proxy is working, False otherwise.
        """
        try:
            response = self.session.get(test_url, proxies=self.proxy, timeout=10)
            if response.status_code == 200:
                self.session.proxies = self.proxy
                return True
            return False
        except requests.RequestException:
            return False

    def get_access_token(self) -> str:
        """
        Retrieves an access token using Meta's authentication API.

        Returns:
            str: A valid access token.
        """

        if self.access_token:
            return self.access_token

        url = "https://www.meta.ai/api/graphql/"
        payload = {
            "lsd": self.cookies["lsd"],
            "fb_api_caller_class": "RelayModern",
            "fb_api_req_friendly_name": "useAbraAcceptTOSForTempUserMutation",
            "variables": {
                "dob": "1999-01-01",
                "icebreaker_type": "TEXT",
                "__relay_internal__pv__WebPixelRatiorelayprovider": 1,
            },
            "doc_id": "7604648749596940",
        }
        payload = urllib.parse.urlencode(payload)  # noqa
        headers = {
            "content-type": "application/x-www-form-urlencoded",
            "cookie": f'_js_datr={self.cookies["_js_datr"]}; '
            f'abra_csrf={self.cookies["abra_csrf"]}; datr={self.cookies["datr"]};',
            "sec-fetch-site": "same-origin",
            "x-fb-friendly-name": "useAbraAcceptTOSForTempUserMutation",
        }

        response = self.session.post(url, headers=headers, data=payload)

        try:
            auth_json = response.json()
        except json.JSONDecodeError:
            raise FacebookRegionBlocked(
                "Unable to receive a valid response from Meta AI. This is likely due to your region being blocked. "
                "Try manually accessing https://www.meta.ai/ to confirm."
            )

        access_token = auth_json["data"]["xab_abra_accept_terms_of_service"][
            "new_temp_user_auth"
        ]["access_token"]

        # Need to sleep for a bit, for some reason the API doesn't like it when we send request too quickly
        # (maybe Meta needs to register Cookies on their side?)
        time.sleep(1)

        return access_token

    def prompt(
        self,
        message: str,
        stream: bool = False,
        attempts: int = 0,
        new_conversation: bool = False,
    ) -> Dict or Generator[Dict, None, None]:
        """
        Sends a message to the Meta AI and returns the response.

        Args:
            message (str): The message to send.
            stream (bool): Whether to stream the response or not. Defaults to False.
            attempts (int): The number of attempts to retry if an error occurs. Defaults to 0.
            new_conversation (bool): Whether to start a new conversation or not. Defaults to False.

        Returns:
            dict: A dictionary containing the response message and sources.

        Raises:
            Exception: If unable to obtain a valid response after several attempts.
        """
        if not self.is_authed:
            self.access_token = self.get_access_token()
            auth_payload = {"access_token": self.access_token}
            url = "https://graph.meta.ai/graphql?locale=user"

        else:
            auth_payload = {"fb_dtsg": self.cookies["fb_dtsg"]}
            url = "https://www.meta.ai/api/graphql/"

        if not self.external_conversation_id or new_conversation:
            external_id = str(uuid.uuid4())
            self.external_conversation_id = external_id
        payload = {
            **auth_payload,
            "fb_api_caller_class": "RelayModern",
            "fb_api_req_friendly_name": "useAbraSendMessageMutation",
            "variables": json.dumps(
                {
                    "message": {"sensitive_string_value": message},
                    "externalConversationId": self.external_conversation_id,
                    "offlineThreadingId": generate_offline_threading_id(),
                    "suggestedPromptIndex": None,
                    "flashVideoRecapInput": {"images": []},
                    "flashPreviewInput": None,
                    "promptPrefix": None,
                    "entrypoint": "ABRA__CHAT__TEXT",
                    "icebreaker_type": "TEXT",
                    "__relay_internal__pv__AbraDebugDevOnlyrelayprovider": False,
                    "__relay_internal__pv__WebPixelRatiorelayprovider": 1,
                }
            ),
            "server_timestamps": "true",
            "doc_id": "7783822248314888",
        }
        payload = urllib.parse.urlencode(payload)  # noqa
        headers = {
            "content-type": "application/x-www-form-urlencoded",
            "x-fb-friendly-name": "useAbraSendMessageMutation",
        }
        if self.is_authed:
            headers["cookie"] = f'abra_sess={self.cookies["abra_sess"]}'
            # Recreate the session to avoid cookie leakage when user is authenticated
            self.session = requests.Session()
            self.session.proxies = self.proxy

        response = self.session.post(url, headers=headers, data=payload, stream=stream)
        if not stream:
            raw_response = response.text
            last_streamed_response = self.extract_last_response(raw_response)
            if not last_streamed_response:
                return self.retry(message, stream=stream, attempts=attempts)

            extracted_data = self.extract_data(last_streamed_response)
            return extracted_data

        else:
            lines = response.iter_lines()
            is_error = json.loads(next(lines))
            if len(is_error.get("errors", [])) > 0:
                return self.retry(message, stream=stream, attempts=attempts)
            return self.stream_response(lines)

    def retry(self, message: str, stream: bool = False, attempts: int = 0):
        """
        Retries the prompt function if an error occurs.
        """
        if attempts <= MAX_RETRIES:
            logging.warning(
                f"Was unable to obtain a valid response from Meta AI. Retrying... Attempt {attempts + 1}/{MAX_RETRIES}."
            )
            time.sleep(3)
            return self.prompt(message, stream=stream, attempts=attempts + 1)
        else:
            raise Exception(
                "Unable to obtain a valid response from Meta AI. Try again later."
            )

    def extract_last_response(self, response: str) -> Dict:
        """
        Extracts the last response from the Meta AI API.

        Args:
            response (str): The response to extract the last response from.

        Returns:
            dict: A dictionary containing the last response.
        """
        last_streamed_response = None
        for line in response.split("\n"):
            try:
                json_line = json.loads(line)
            except json.JSONDecodeError:
                continue

            bot_response_message = (
                json_line.get("data", {})
                .get("node", {})
                .get("bot_response_message", {})
            )
            chat_id = bot_response_message.get("id")
            if chat_id:
                external_conversation_id, offline_threading_id, _ = chat_id.split("_")
                self.external_conversation_id = external_conversation_id
                self.offline_threading_id = offline_threading_id

            streaming_state = bot_response_message.get("streaming_state")
            if streaming_state == "OVERALL_DONE":
                last_streamed_response = json_line

        return last_streamed_response

    def stream_response(self, lines: Iterator[str]):
        """
        Streams the response from the Meta AI API.

        Args:
            lines (Iterator[str]): The lines to stream.

        Yields:
            dict: A dictionary containing the response message and sources.
        """
        for line in lines:
            if line:
                json_line = json.loads(line)
                extracted_data = self.extract_data(json_line)
                if not extracted_data.get("message"):
                    continue
                yield extracted_data

    def extract_data(self, json_line: dict):
        """
        Extract data and sources from a parsed JSON line.

        Args:
            json_line (dict): Parsed JSON line.

        Returns:
            Tuple (str, list): Response message and list of sources.
        """
        bot_response_message = (
            json_line.get("data", {}).get("node", {}).get("bot_response_message", {})
        )
        response = format_response(response=json_line)
        fetch_id = bot_response_message.get("fetch_id")
        sources = self.fetch_sources(fetch_id) if fetch_id else []
        medias = self.extract_media(bot_response_message)
        return {"message": response, "sources": sources, "media": medias}

    def extract_media(self, json_line: dict) -> List[Dict]:
        """
        Extract media from a parsed JSON line.

        Args:
            json_line (dict): Parsed JSON line.

        Returns:
            list: A list of dictionaries containing the extracted media.
        """
        medias = []
        imagine_card = json_line.get("imagine_card", {})
        session = imagine_card.get("session", {}) if imagine_card else {}
        media_sets = (
            (json_line.get("imagine_card", {}).get("session", {}).get("media_sets", []))
            if imagine_card and session
            else []
        )
        for media_set in media_sets:
            imagine_media = media_set.get("imagine_media", [])
            for media in imagine_media:
                medias.append(
                    {
                        "url": media.get("uri"),
                        "type": media.get("media_type"),
                        "prompt": media.get("prompt"),
                    }
                )
        return medias

    def get_cookies(self) -> dict:
        """
        Extracts necessary cookies from the Meta AI main page.

        Returns:
            dict: A dictionary containing essential cookies.
        """
        session = HTMLSession()
        headers = {}
        if self.fb_email is not None and self.fb_password is not None:
            fb_session = get_fb_session(self.fb_email, self.fb_password)
            headers = {"cookie": f"abra_sess={fb_session['abra_sess']}"}
        response = session.get(
            "https://www.meta.ai/",
            headers=headers,
        )
        cookies = {
            "_js_datr": extract_value(
                response.text, start_str='_js_datr":{"value":"', end_str='",'
            ),
            "datr": extract_value(
                response.text, start_str='datr":{"value":"', end_str='",'
            ),
            "lsd": extract_value(
                response.text, start_str='"LSD",[],{"token":"', end_str='"}'
            ),
            "fb_dtsg": extract_value(
                response.text, start_str='DTSGInitData",[],{"token":"', end_str='"'
            ),
        }

        if len(headers) > 0:
            cookies["abra_sess"] = fb_session["abra_sess"]
        else:
            cookies["abra_csrf"] = extract_value(
                response.text, start_str='abra_csrf":{"value":"', end_str='",'
            )
        return cookies

    def fetch_sources(self, fetch_id: str) -> List[Dict]:
        """
        Fetches sources from the Meta AI API based on the given query.

        Args:
            fetch_id (str): The fetch ID to use for the query.

        Returns:
            list: A list of dictionaries containing the fetched sources.
        """

        url = "https://graph.meta.ai/graphql?locale=user"
        payload = {
            "access_token": self.access_token,
            "fb_api_caller_class": "RelayModern",
            "fb_api_req_friendly_name": "AbraSearchPluginDialogQuery",
            "variables": json.dumps({"abraMessageFetchID": fetch_id}),
            "server_timestamps": "true",
            "doc_id": "6946734308765963",
        }

        payload = urllib.parse.urlencode(payload)  # noqa

        headers = {
            "authority": "graph.meta.ai",
            "accept-language": "en-US,en;q=0.9,fr-FR;q=0.8,fr;q=0.7",
            "content-type": "application/x-www-form-urlencoded",
            "cookie": f'dpr=2; abra_csrf={self.cookies.get("abra_csrf")}; datr={self.cookies.get("datr")}; ps_n=1; ps_l=1',
            "x-fb-friendly-name": "AbraSearchPluginDialogQuery",
        }

        response = self.session.post(url, headers=headers, data=payload)
        response_json = response.json()
        message = response_json.get("data", {}).get("message", {})
        search_results = (
            (response_json.get("data", {}).get("message", {}).get("searchResults"))
            if message
            else None
        )
        if search_results is None:
            return []

        references = search_results["references"]
        return references


if __name__ == "__main__":
    meta = MetaAI()
    resp = meta.prompt("What was the Warriors score last game?", stream=False)

## Features
- **Prompt AI**: Send a message to the AI and get a response from Llama 3.
- **Image Generation**: Generate images using the AI. (Only for FB authenticated users)
- **Get Up To Date Information**: Get the latest information from the AI thanks to its connection to the internet.
- **Get Sources**: Get the sources of the information provided by the AI.
- **Streaming**: Stream the AI's response in real-time or get the final response.
- **Follow Conversations**: Start a new conversation or follow up on an existing one.

## Usage
**Download**:

   ```bash
   pip install meta-ai-api
   ```
   
**Initialization**:

```python
from meta_ai_api import MetaAI

ai = MetaAI()
response = ai.prompt(message="Whats the weather in San Francisco today? And what is the date?")
print(response)
 
```
```json
{
   "message":"The weather in San Francisco today is mostly clear to overcast, with no precipitation, a wind speed between 0 and 8 miles per hour and temperatures ranging from 51 to 55 degrees Fahrenheit ¹. The date is Friday, April 19, 2024 ². Please note that the weather forecast is continually changing ³ ⁴ ⁵ ⁶.\n",
   "sources":[
      {
         "link":"https://www.wolframalpha.com/input?i=San+Francisco+weather+today+and+date",
         "title":"WolframAlpha"
      },
      {
         "link":"https://www.timeanddate.com/weather/usa/san-francisco",
         "title":"Weather for San Francisco, California, USA - timeanddate.com"
      },
      {
         "link":"https://www.accuweather.com/en/us/san-francisco/94103/weather-today/347629",
         "title":"Weather Today for San Francisco, CA | AccuWeather"
      },
      {
         "link":"https://www.accuweather.com/en/us/san-francisco/94103/weather-forecast/347629",
         "title":"San Francisco, CA Weather Forecast | AccuWeather"
      },
      {
         "link":"https://forecast.weather.gov/zipcity.php?inputstring=San%20francisco%2CCA",
         "title":"National Weather Service"
      },
      {
         "link":"https://www.wunderground.com/weather/us/ca/san-francisco",
         "title":"San Francisco, CA Weather Conditions | Weather Underground"
      }
   ]
}
```
---
### Follow conversations:
```python
```python
meta = MetaAI()

print(meta.prompt("what is 2 + 2?"))
print(meta.prompt("what was my previous question?"))
```

```
{'message': '2 + 2 = 4\n', 'sources': [], 'media': []}
{'message': 'Your previous question was "what is 2 + 2?"\n', 'sources': [], 'media': []}
```

And to start a new one:
```python
meta = MetaAI()

print(meta.prompt("what is 2 + 2?"))
print(meta.prompt("what was my previous question?", new_conversation=True))
```

```
{'message': '2 + 2 = 4\n', 'sources': [], 'media': []}
{'message': "This is the beginning of our conversation, so I don't have a previous question to refer to. I'm happy to chat with you, though! What's on your mind today?\n", 'sources': [], 'media': []}
```

---
```python
from meta_ai_api import MetaAI

ai = MetaAI()
response = ai.prompt(message="What was the Warriors score last game?")
print(response)
```
```json
{
   "message":"The Golden State Warriors' last game was against the Sacramento Kings, and they lost 118-94 ¹ ². Stephen Curry scored 22 points, and the Kings' win eliminated the Warriors from the playoffs ³. The Warriors finished the season 46-36 and 10th in the Western Conference ⁴ ³.\n",
   "sources":[
      {
         "link":"https://sportradar.com/",
         "title":"Game Info of NBA from sportradar.com"
      },
      {
         "link":"https://www.sofascore.com/team/basketball/golden-state-warriors/3428",
         "title":"Golden State Warriors live scores & schedule - Sofascore"
      },
      {
         "link":"https://www.foxsports.com/nba/golden-state-warriors-team-schedule",
         "title":"Golden State Warriors Schedule & Scores - NBA - FOX Sports"
      },
      {
         "link":"https://en.wikipedia.org/wiki/History_of_the_Golden_State_Warriors",
         "title":"History of the Golden State Warriors"
      }
   ]
}
```

**Using proxy**:

```python
from meta_ai_api import MetaAI

proxy = {
    'http': 'http://proxy_address:port',
    'https': 'https://proxy_address:port'
}

ai = MetaAI(proxy=proxy)
response = ai.prompt(message="How to find out which mushrooms are edible?")
print(response)
```

**Streaming Response**:

```python
from meta_ai_api import MetaAI

ai = MetaAI()
response = ai.prompt(message="What was the Warriors score last game?", stream=True)
for r in response:
    print(r)
```

```
{'message': '\n', 'sources': []}
{'message': 'The\n', 'sources': []}
{'message': 'The Golden\n', 'sources': []}
{'message': 'The Golden State\n', 'sources': []}
{'message': 'The Golden State Warriors\n', 'sources': []}
{'message': "The Golden State Warriors'\n", 'sources': []}
{'message': "The Golden State Warriors' last\n", 'sources': []}
{'message': "The Golden State Warriors' last game\n", 'sources': []}
{'message': "The Golden State Warriors' last game was\n", 'sources': []}
{'message': "The Golden State Warriors' last game was against\n", 'sources': []}
{'message': "The Golden State Warriors' last game was against the\n", 'sources': []}
{'message': "The Golden State Warriors' last game was against the Sacramento\n", 'sources': []}
{'message': "The Golden State Warriors' last game was against the Sacramento Kings\n", 'sources': []}
{'message': "The Golden State Warriors' last game was against the Sacramento Kings on\n", 'sources': []}
{'message': "The Golden State Warriors' last game was against the Sacramento Kings on April\n", 'sources': []}
...
{'message': "The Golden State Warriors' last game was against the Sacramento Kings on April 16, 2024, at the Golden 1 Center in Sacramento, California. The Kings won the game with a score of 118-94, with the Warriors scoring 22 points in the first quarter, 28 in the second, 26 in the third and 18 in the fourth quarter ¹.\n", 'sources': [{'link': 'https://sportradar.com/', 'title': 'Game Info of NBA from sportradar.com'}]}
```

**Generate Image**:

By default image generation is only available for FB authenticated users. If you go on https://www.meta.ai/ , and ask the AI to generate an image, you will be prompted to authenticate with Facebook.
So if you want to generate images using this library, you need to authenticate using your FB credentials.

**Note**: There seems to be higher rate limits for authenticated users. So only authenticate to generate images.

```python
from meta_ai_api import MetaAI
ai = MetaAI(fb_email="your_fb_email", fb_password="your_fb_password")
resp = ai.prompt(message="Generate an image of a tech CEO")
print(resp)
```

```json
{
   "message":"\n",
   "sources":[
      
   ],
   "media":[
      {
         "url":"https://scontent-lax3-1.xx.fbcdn.net/o1/v/t0/f1/m247/4282108942387920518_1946149595_21-04-2024-14-17-48.jpeg?_nc_ht=scontent-lax3-1.xx.fbcdn.net&_nc_cat=103&ccb=9-4&oh=00_AfCnbCX7nl_J5kF6mahnams4d99Rs5WZA780HGS_scfc6A&oe=662771EE&_nc_sid=5b3566",
         "type":"IMAGE",
         "prompt":"a tech CEO"
      },
      {
         "url":"https://scontent-lax3-1.xx.fbcdn.net/o1/v/t0/f1/m247/3356467762794691754_1025991308_21-04-2024-14-17-48.jpeg?_nc_ht=scontent-lax3-1.xx.fbcdn.net&_nc_cat=108&ccb=9-4&oh=00_AfBLmSbTSqshNAL82KIFk8hGXyL8iK_CZLGcMmmddPrxuA&oe=66276EDD&_nc_sid=5b3566",
         "type":"IMAGE",
         "prompt":"a tech CEO"
      },
      {
         "url":"https://scontent-lax3-1.xx.fbcdn.net/o1/v/t0/f1/m247/127487551948523111_2181921077_21-04-2024-14-17-48.jpeg?_nc_ht=scontent-lax3-1.xx.fbcdn.net&_nc_cat=104&ccb=9-4&oh=00_AfAejXKeKPA4vyKXoc6UR0rEirvZwi41P3KiCSQmHRHsEw&oe=66276E45&_nc_sid=5b3566",
         "type":"IMAGE",
         "prompt":"a tech CEO"
      },
      {
         "url":"https://scontent-lax3-1.xx.fbcdn.net/o1/v/t0/f1/m247/3497663176351797954_3954783377_21-04-2024-14-17-47.jpeg?_nc_ht=scontent-lax3-1.xx.fbcdn.net&_nc_cat=110&ccb=9-4&oh=00_AfBp3bAfcuofqtI-z9D4bHw-GuGgCNPH_xhMM0PG_95S9Q&oe=66277AE9&_nc_sid=5b3566",
         "type":"IMAGE",
         "prompt":"a tech CEO"
      }
   ]
}
```
![Tech CEO](https://i.imgur.com/9YR6qHq.jpeg)

# Educational Purpose:
This repository is intended for educational purposes only. It is a tool to demonstrate how to interact with Meta's AI APIs, providing an example for learning and experimentation. Users should adhere to Meta's terms of service and use the library responsibly.


# Copyright:
This program is licensed under the GNU GPL v3. All code has been written by me, Strvm.

# Copyright Notice:
```
Strvm/meta-ai-api: a reverse engineered API wrapper for MetaAI
Copyright (C) 2023 Strvm

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
```