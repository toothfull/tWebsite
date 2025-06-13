# Base image
FROM node:20-alpine

# Create working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy everything else
COPY . .

# Build TypeScript
RUN npm run build

# Set working directory to dist folder
WORKDIR /app/tWebserverServer/dist

# Start server
CMD ["node", "main.js"]