FROM node:20-alpine

WORKDIR /app

# Copy package files
COPY package.json ./

# Install dependencies
RUN npm install

# Copy project files
COPY . .

# Expose ports 3007 (frontend) and 3008 (backend)
EXPOSE 3007 3008

# Start both servers
CMD ["npm", "run", "start"]

