FROM node:20-alpine
WORKDIR /app
COPY . .
WORKDIR /app
RUN npm install --include=dev
RUN npm run build
EXPOSE 3002
CMD ["node", "dist/server.js"]

