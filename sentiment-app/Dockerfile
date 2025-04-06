# Stage 1: Build
FROM node:18-slim AS build

RUN apt-get update && apt-get install -y python3 python3-pip
RUN pip install tensorflowjs --break-system-packages

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY src/ ./src/
COPY sentiment_model/ ./sentiment_model/
RUN npm run build

# Stage 2: Production
FROM node:18-slim

WORKDIR /app
COPY --from=build /app /app

EXPOSE 3001
CMD ["npm", "start"]
