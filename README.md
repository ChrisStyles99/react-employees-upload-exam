## Login

Los datos para hacer el login de manera exitosa son

- Usuario: admin1
- Contraseña: password1

# Para correr el proyecto en modo desarrollo

Primeramente se tiene que crear un archivo .env en la raiz del proyecto con una variable llamada ```VITE_BASE_URL``` con la URL a la cual haremos el llamado.

- Se puede utilizar el comando ```npm run dev``` para poder correr el proyecto en forma de desarrollo.
- Se es necesario ir a ```http://localhost:5173/``` para ver la aplicación

# Para coreer el proyecto en modo producción

Para poder correr la aplicacion en modo de produccion, es necesario contar con docker instalado en el sistema.
Primeramente se tiene que crear un archivo .env en la raiz del proyecto con una variable llamada ```VITE_BASE_URL``` con la URL a la cual haremos el llamado.

Usando docker:
- Solamente es necesario utilizar el comando ```docker-compose up``` y se realizará el build de produccion de la app de react, incluyendo nginx.
- Para poder visualizar la aplicacion, solo es necesario ir a ```http://localhost``` en su navegador, y se visualizará la aplicacion en modo de desarrollo.

Si no se tiene docker:
- Se utiliza el comando ```npm run build``` para crear el build de produccion
- Se utiliza el comando ```npm run preview``` para poder ver de manera local, como se vería la aplicación en producción, solo es necesario ir a ```http://localhost:4173/``` en el navegador.