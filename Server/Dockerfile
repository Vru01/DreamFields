# Use a Node.js base image for the application
FROM node:18 AS node_base

# Set working directory for the Node.js application
WORKDIR /app

# Copy package files and install dependencies from the Server directory
COPY ./package*.json ./

# Install Node.js dependencies
RUN npm install --legacy-peer-deps

# Copy the rest of the application files from the Server folder
COPY . .

# Install Python 3, pip3, and virtualenv
RUN apt-get update && \
    apt-get install -y python3 python3-pip python3-venv && \
    python3 -m venv /env && \
    /env/bin/pip install meta-ai-api && \
    rm -rf /var/lib/apt/lists/*

# Expose the application port for backend (Flask or similar)
EXPOSE 5000

# Command to start the backend (Flask app or other Python server) and Node.js
CMD ["/bin/bash", "-c", "source /env/bin/activate && npm start"]
