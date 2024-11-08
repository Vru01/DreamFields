# Use Node.js 18.13.0 LTS version as the base image
FROM node:18.13.0

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install --legacy-peer-deps


# Copy the rest of the application code to the working directory
COPY . .

# Expose port 3000
EXPOSE 3000

# Start the React application
CMD ["npm", "start"]
