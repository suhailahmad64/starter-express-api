FROM ghcr.io/puppeteer:19.7.2

ENV PUPPETEER_SKUP_CHROMIUM_DOWNLOAD=true \
    PUPPETEER_EXECUTABLE_PATH=/usr/bin/google-chrome-stable

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm PUPPETEER_SKUP_CHROMIUM_DOWNLOAD
COPY . .
CMD ["node", "index.js"]