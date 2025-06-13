# Use an official Node.js runtime as a parent image
FROM node:20

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Copy app source code
COPY . .

# Build TypeScript files
RUN npm run build

# Start the app
CMD ["node", "tWebserverServer/dist/main.js"]