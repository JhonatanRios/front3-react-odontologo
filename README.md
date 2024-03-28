# ctd-fe3-final
Examen Final de Frontend III

## Índice
- [Requisitos](#requisitos)
  - [Condiciones mínimas de aprobación](#condiciones-mínimas-de-aprobación)
  - [Aspectos que modifican la valoración final de la nota](#aspectos-que-modifican-la-valoración-final-de-la-nota)
- [Funcionalidades](#funcionalidades)
- [Desarrollo](#desarrollo)
- [API](#api)
- [Entrega](#entrega)
  - [Fecha de Entrega](#fecha-de-entrega)
  - [Formato de Entrega](#formato-de-entrega)


## Requisitos
Es indispensable clonar este proyecto en un repositorio privado para poder trabajar de forma _individual_ o en _dupla_. No se aceptarán proyectos que se hayan realizado sin partir de este template. Para ello, deberás crear un repositorio con el nombre "ctd-esp-fe3-final" en tu cuenta de Github y luego seguir los siguientes pasos en tu terminal:

```
# clona el repositorio del final en tu computadora
git clone https://github.com/JhonatanRios/front3-react-odontologo

# ingresa al directorio del final
cd front3-react-odontologo

# elimina los links al repositorio de DH
git remove remote origin
```

### Condiciones de aprobación
Las siguientes condiciones son requisitos mínimos necesarios para la aprobación del final:
- **Cumplir con todas las funcionalidades obligatorias**
- Solo se podrán utilizar las librerías que se detallan en este README. Ver [Dependencias](docs/desarrollo.md#dependencias)
- No se considerará realizada cualquier funcionalidad que sea implementada utilizando una librería distinta a las permitidas.
- Deberá ser desarrollada utilizando JavaScript con React.js como librería.
- Se espera que la página de Contacto contenga los flujos de validación necesarios (mínimo 2 validaciones) para un correcto submit del formulario.
- En los casos en que se requiera dar estilos a componentes, deberá realizarse teniendo en cuenta el theme del contexto global.

### Aspectos que modifican la valoración final de la nota
Los siguientes aspectos son extras al requisito mínimo de aprobación que se tendrán en cuenta para aumentar la nota final, siempre y cuando su implementación sea correcta:

**Validaciones**
- Una validación para cada campo es suficiente, pueden ser "manuales" o con expresiones regulares. Lo importante es el correcto manejo de errores y submit.

**Funcionalidad de destacados**
- Se valorarán funcionalidades extra a esta feature, como lo pueden ser la eliminación de destacados, manejo de errores al intentar agregar repetidos y reseteo total de los destacados.

**Estilos**
- Se valorará el estilado de los demás apartados de la App (por fuera del estilado obligatorio de las rutas en base al theme).

**Buenas Prácticas**
- Se prestará especial atención al uso de buenas prácticas, mejoras de performance (implementando useMemo) y la reutilización de código.


## Funcionalidades
Ver [Funcionalidades](docs/funcionalidades.md).


## Desarrollo
Ver [Desarrollo](docs/desarrollo.md).


## API
La API a utilizar será la siguiente:
`https://jsonplaceholder.typicode.com/users`

Y para cada dentista en específico:
`https://jsonplaceholder.typicode.com/users/:id`

### Formato de Entrega
- No deberán cambiar los nombres ni ubicación de las variables/componentes/context que vienen con el repo base.

Se aceptará la entrega mediante la submisión de la URL de su repositorio clonado. El link al Google Form para la submisión será enviado por el profesor a cargo de la comisión.

¡Mucha suerte y éxitos!