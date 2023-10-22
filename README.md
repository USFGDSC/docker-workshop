# Docker Workshop
## 1. Download Docker Desktop
https://www.docker.com/products/docker-desktop/
## 2. Create your Docker Hub Account
## 3. What is Docker?
## 4. Fetch an image from Docker Hub to your local system
```
docker login
```
```
docker pull lindanguyennguyen/simple-node-app-test:latest
```
```
docker run -p 8080:8080 lindanguyennguyen/simple-node-app-test:latest
```
## 5. Build your own image
Dockerfile:
```
# Use the official Node.js image as a base image
FROM node:18

# Set the working directory in the Docker container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json files into the container
COPY package*.json ./

# Install the Node.js packages
RUN npm install

# Copy the rest of the application files into the container
COPY . .

# Expose port 3000 to the host (we'll use this port for our Express server)
EXPOSE 3000

# The command that will run our app when the container starts
CMD ["node", "server.js"]
```
```
docker build -t your-user-name/simple-node-app:latest .
```
```
docker run -p 3000:3000 your-user-name/simple-node-app:latest
```
## 6. Push your image to Docker Hub
```
docker push your-user-name/simple-node-app:latest
```

## 7. Deploy the container image to Azure Container App
