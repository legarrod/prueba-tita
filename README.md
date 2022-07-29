# Prueba técnia para la vacante como desarrollador front end react js

Luego de clonado el repositorio (https://github.com/legarrod/prueba-tita.git) en local, es muy importante tener el archivo .env en la carpeta raiz del proyecto junto son las siguientes variables de entorno:

### REACT_APP_API_URL_BASE=https://dummyapi.io/data/v1/

### REACT_APP_API_API_ID=62e2196a0e9861b145eebcd8

## Comó correr el proyecto

Hay dos formas de correr el proyecto, si se tiene instalado en el computador docker, docker compose y makefile, solo es cuestion de correr el siguiente comando y el levanta todo el proyecto con la version de node adecuada

### `make start`

La segunda forma de correr el proyecto es con la instalacion tradicional de react, para ello seguimos los siguientes pasos:

### `npm install`

### `npm start`

El proyecto esta desplegado para pruebas en un bucket de S3 de AWS en el siguiente enlace: http://pruebatita.s3-website-us-east-1.amazonaws.com/
NOTA: al momento de iniciar sesion es importate reintentarlo varias veces si ocurre un error pues hay veces que la api de auth falla, pues es una cuenta de prueba

## Comó se desplego el proyecto a AWS

El proyecto hace deploy desde local, con las respectivas configuraciones de usuario en Amazon, con el debido permiso y la configuracion de amazon cli en local. Para desplegar el proyecto desde local solo es necesario ejecutar los siguientes comandos:

### `npm build`

Este comando genera la carpeta build con el proyecto ya compilado

### `npm deploy`

Este comando se encarga de subir todo al bucket

## NOTAS EXTRAS

Algunas funcionalidades de los requerimientos fueron modificadas un poco, como por ejemplo: se pedia poder filtrar los posts por tag, pero el endpoind de las tags trae mas de 1000 por lo que se hizo una funcionalidad para tomar solo las primeras 50. Tambien se quizo implementar el proyecto con graphql pero la documentacion de dummyapi dice que tiene soporte pero no hay información de cuales son los pasos.
