# Funcionalidades

## Índice
- [Funcionalidades obligatorias](#funcionalidades-obligatorias)
- [Rutas](#rutas)
  - [Página 1: Inicio (/home)](#pagina-1-inicio-home)
  - [Página 2: Contacto (/contact)](#pagina-2-contacto)
  - [Página 3: Detalle del dentista (/dentist/:id)](#pagina-3-detalle-del-dentista)
  - [Página 4: Destacados (/favs)](#pagina-4-destacados)
- [Resultado final](#resultado-final)


## Funcionalidades obligatorias
Las siguientes funcionalidades son requisitos mínimos necesarios para la aprobación del final y es fundamental que funcionen correctamente.

**La aplicación deberá contar con cuatro (4) páginas: Home, Contacto, Detalle de cada dentista, Destacados**

**La correcta navegación entre las páginas por medio de Links propios de React Router será obligatoria para la aprobación**

**Es crucial la presencia homogénea en todas las páginas del [Navbar](/src/Components/Navbar.jsx) y [Footer](/src/Components/Footer.jsx)**

### Creación del Contexto
Deberán crear un contexto global en su aplicación que ponga a disposición la siguiente información:
- Tema de colores para toda la app (claro u oscuro)
- Información traída por la API (pueden utilizar fetch o axios para realizar la llamada)
- Para el manejo y actualización del estado global deberán implementar el hook useReducer. Con dicho hook deberán implementar el cambio de tema de colores (con un botón en la app específico para ello dentro de Navbar), de claro a oscuro y viceversa.

### Creación de rutas
Utilizando React Router deberán crear las siguientes direcciones descritas en [rutas](#rutas)

### Funcionalidad de destacados
- Cada card renderizada debe tener la opción de poder agregarse a destacados.
- Deberán guardar las cards destacadas en la sesión actual del localStorage
- Manejar dicho comportamiento con el hook useReducer

### Estilos
En base al tema (claro u oscuro) consumido del contexto global, estilar las cuatro [rutas](#rutas) de la App (asignar determinados estilos si es “dark” o “light”).


## Rutas
### Página 1: Inicio Home
En esta página se deberá mostrar un listado en forma de grilla de los dentistas devueltos por la API.

Se deberá tener en cuenta lo siguiente:
- Deberá ser la página de inicio de la web.
- La grilla deberá mostrar una [Card](/src/Components/Card.jsx) por cada dentista devuelto por la API.
- Cada dentista deberá contener `name` y `username`, junto con un botón `ADD FAV` (para agregar al localStorage como fav) y un `link` que permita su navegación a la página _dentist/:id_ en base al id del dentista.
- Cada Card debe integrar la funcionalidad de agregar a destacados

### Página 2: Contacto
En esta página deberán implementar un [Form](/src/Components/Form.jsx) (con sus validaciones pertinentes) que capture la información del usuario que desea contactar con la empresa. Los campos serán los siguientes:

- Nombre completo (con longitud mayor a 5)
- Email (con formato correcto de email)
- En caso de haber un error, mostrar el siguiente mensaje de error: **Por favor, verifique su información nuevamente**
- Una vez "enviado" (no se envía a ningún servidor pero podemos mostrar por consola los datos submiteados), el formulario deberá mostrar un mensaje de éxito que contenga el siguiente formato: **Gracias _[nombre del usuario]_, te contactaremos cuanto antes vía mail**

### Página 3: Detalle del dentista
En esta página se deberá mostrar un detalle de un dentista individual de la API.

Se deberá tener en cuenta lo siguiente:
- Deberá estar en la ruta `/dentist/:id`.
- La página deberá indicar al menos la siguiente información:
  - Nombre del dentista
  - Email
  - Teléfono
  - Sitio web

### Página 4: Destacados
En esta página se deberán renderizar las [Cards](/src/Components/Card.jsx) pertinentes a los dentistas destacados. Dicha información deberá estar almacenada dentro del localStorage del navegador y ser consumida dentro de la página.
- Se deberá estar en la ruta `/favs`.

## Resultado final
Te dejamos un video como ejemplo de cómo debería funcionar tu aplicación, en la carpeta [public](/public/)