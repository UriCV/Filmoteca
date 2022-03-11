# Filmoteca

<h2>Intro:</h2>
Este proyecto es parte de la formación de desarrollo web impartida por factoría f5. El objetivo es crear un documento .JSON que servirá de base de datos y con un servidor local conseguir acceder a su información además de editarla. La intención de esta práctica es entender el CRUD, acrónimo para crear, leer editar y borrar, concepto estrechamente vinculado al manejo de las bases de datos. Todo esto a través de una fake Api. En este proyecto el reto principal ha sido conseguir que la página sea capaz de recoger la información y enseñarla en pantalla. Los otros elementos del CRUD son opcionales.

<h2>La página:</h2>
My Movies es una manera fácil y rápida de organizar las películas que has visto y tener tu filmoteca personal en línea. Las funciones principales de la página son la capacidad de ver tu filmoteca personal además de poder añadir películas y eliminarlas.

<h2>Como se utiliza:</h2>
Para empezar se debe clonar el repositorio y abrir un servidor local. Esto se puede hacer con los comandos en, por ejemplo, la terminal de VScode. Luego deberemos utilizar los comandos para ejecutar el servidor .json.

<h2>Comandos:</h2>
<center>-- Instala en global el servidor de la Fake Api<br>
Linux, Mac:<br>
   		sudo npm install -g json-server<br>
Windows:<br>
		npm install -g json-server<br><br><br>

-- Ejecuta el servidor json<br>
json-server --watch peliculas.json<br></center>

Hecho esto lo último que queda es abrir la página en nuestro navegador con el Live Server.

<h2>Cómo utilizar:</h2>
Para poder añadir una película a nuestra librería deberemos hacer click en Add Film en la parte superior para que se despliegue el formulario (tenga en cuenta que se deben rellenar todos los campos del formulario para que funcione). Por último podemos eliminar las películas ya creadas con el botón delete. La página es responsive y se puede utilizar en todo tipo de dispositivos.

<h2>Futuras versiones:</h2>
En futuras versiones el usuario tendrá la posibilidad de editar la información ya añadida (Update del CRUD) además de disponer de un buscador y filtros para navegar con más facilidad en la filmoteca. Cabe destacar que en próximas versiones también se tiene el objetivo de añadir una página de inicio así como una forma más ágil y estética de ver la información de las películas, ya sea con desplegables o abriendo el título que se desee consultar en otra página. Además de la capacidad de añadir comentarios y la posibilidad de poner las películas en una lista de ¨pendientes por ver¨.

<h2>El repo:</h2>
Este proyecto contiene carpetas, entre ellas están la carpeta con el documento JS funcional, una carpeta llamada pruebasJS con documentos JavaScript que no son útiles para el funcionamiento de la página y que contienen varias funciones para hacer pruebas. También está la carpeta CSS para el documento .css. También está la carpeta de recursos con imágenes y cosas útiles para el proyecto. Por último consta de dos archivos, el html y el json que funciona como nuestra fake API.

<h2>Herramientas:</h2>
JavaScript, .html, .css, notación .json, Bootsrap, Postman y VS Code.


<h2>Creado por:</h2>
Oriol Codina

<h2>Agradecimientos a Factoria F5 por hacer posible esta formación.</h2>
