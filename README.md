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
FROM node:18

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

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
