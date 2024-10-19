# Start your image with a node base image
FROM node:18-alpine

# The /app directory should act as the main application directory
WORKDIR /app

# Copy the app package and package-lock.json file
COPY package-lock.json ./package-lock.json
COPY package.json ./package.json

RUN npm install -g npm@10.2.0



RUN npm install



COPY . ./



RUN npm run build

EXPOSE 3000

# Start the app using serve command
CMD ["npm", "start"]
