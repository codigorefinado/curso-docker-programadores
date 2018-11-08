# Última versão do node com linux alpine leve
FROM node:alpine

# diretório de trabalho
WORKDIR /usr/app

# copia para a pasta de trabalho
COPY package*.json ./

# executa npm install :D dentro do container
RUN npm install

# Copia tudo da pasta atual para o diretório de trabalho
COPY . .

# Define qual porta meu servidor deve expor
EXPOSE 3000

# Indica qual comandoo servidor dever executar pra aplicação entrar no ar
# CMD ["npm", "start"]
# CMD npm start
CMD npm run startnodemon


