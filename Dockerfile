# Use Node.js 20 base image
FROM node:20

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app
COPY . .

# Build TypeScript
RUN npm run build

# Run the compiled output
CMD ["node", "tWebserverServer/dist/main.js"]