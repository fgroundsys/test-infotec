FROM node:14

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copiar el package.json y package-lock.json a la imagen
COPY package*.json ./

# Instalar las dependencias del backend
RUN npm install

# Copiar todos los archivos del backend al directorio de trabajo
COPY . .

# Exponer el puerto que utiliza tu aplicación backend
EXPOSE 3000

# Inicia el backend
CMD ["node", "index.js"]