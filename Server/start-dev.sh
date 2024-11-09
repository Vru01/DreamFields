#!/bin/bash
source ./venv/bin/activate
apt install python3-pip
pip install meta_ai_api
nodemon index.js
