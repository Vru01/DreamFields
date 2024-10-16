const express = require('express');
const cors = require('cors');
const app = express();
const { PythonShell } = require('python-shell');

app.use(cors());
app.use(express.json());

app.post('/', (req, res) => {
    try {
        const prompt = req.body.prompt;

        if (!prompt) {
            return res.status(400).json({ message: "Give me a proper prompt" });
        }

        let pyshell = new PythonShell('./main.py');

        pyshell.send(prompt);

        pyshell.on('message', async function (message) {
            try {
               console.log(message);
                const parsedAnswer = JSON.parse(JSON.parse(message));

                // Send the parsed object as a JSON response
                return res.status(200).json(parsedAnswer);

            } catch (err) {
                return res.status(500).json({ message: "Failed to parse the response from Python." });
            }
        });

    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
});



app.post('/GetResult', (req, res) => {
    try {
        const answer = req.body.answer;

        if (!answer) {
            return res.status(400).json({ message: "Give me a proper answer" });
        }

        let pyshell = new PythonShell('./main.py');

        pyshell.send(answer);

        pyshell.on('message', async function (message) {
            try {
               console.log(message);
                const parsedAnswer = JSON.parse(JSON.parse(message));

                // Send the parsed object as a JSON response
                return res.status(200).json(parsedAnswer);

            } catch (err) {
                return res.status(500).json({ message: "Failed to parse the response from Python." });
            }
        });

    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});


