# Use a lightweight Node.js base image
FROM node:23.8.0-alpine

# Set the working directory inside the container
WORKDIR /dearscraps

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port the app runs on (assuming it's 3000)
EXPOSE 3000

# Command to run the app
CMD ["npm", "run dev"]