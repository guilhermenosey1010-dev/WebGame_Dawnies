# WebGame Dawnies · GAME

Interfaz estática de gestión de almacén realizada únicamente con HTML y CSS, sin JavaScript ni frameworks.

## Integrantes

Guilherme, Luka, Johnattan y Oier.

## Web y repositorio

- Web en GitHub Pages: https://guilhermenosey1010-dev.github.io/WebGame_Dawnies/
- Repositorio: https://github.com/guilhermenosey1010-dev/WebGame_Dawnies

La dirección de Pages todavía devuelve 404. Para publicar, subir el commit a GitHub y entrar en **Settings → Pages → Deploy from a branch → main → / (root) → Save**. Esperar a que termine el despliegue y comprobar el enlace anterior.

Para verla en local basta con abrir **index.html**. No hay que instalar dependencias.

## Páginas y datos

- **index.html**: novedades, categorías, destacados y una oferta con precio anterior y actual.
- **catalogo.html**, **consolas.html** y **accesorios.html**: variantes de catálogo enlazadas, con imagen, nombre, plataforma, precio y estado de stock.
- **inventario.html**: nueve productos, 34 unidades y tres referencias con stock bajo. La tabla se desplaza dentro de su propio contenedor en móvil, sin ensanchar la página.
- **alta.html**: formulario con validación HTML. Al enviarlo se muestra «Producto guardado» mediante un ancla y CSS :target. No modifica el inventario ni almacena productos en una base de datos.
- **css/**: estilos comunes y hojas específicas de cada página.
- **img/**: imágenes originales del proyecto guardadas localmente e ilustraciones SVG propias para consolas y accesorios.

Los precios y las existencias son datos de ejemplo. Stock bajo significa entre una y tres unidades; cero unidades significa agotado.

La miniguía de estilo se entrega como documento separado.

## Dónde se aplica cada contenido de clase

| Contenido | Ejemplo para enseñar en la presentación |
| --- | --- |
| HTML semántico | Cabecera, menú, main, secciones, artículos y pie; un h1 por página. |
| Variables | :root de css/comun.css: colores, tipografía y escala de espaciado. |
| Flexbox | .navegacion, .barra-nav .contenedor, .pie y el contenido de .tarjeta. |
| Grid | .productos, .resumen y .campos-alta. |
| grid-template-areas | .pagina-catalogo en css/catalogo.css: cabecera, contenido y pie. |
| Transiciones | Cambio de color en .boton y elevación de .tarjeta al pasar el ratón. |
| Animación | @keyframes aviso-stock en .estado-bajo; dos repeticiones suaves. |
| Responsive | Base móvil; 27.5rem para dos columnas y 40.625rem para tres columnas, cabecera en una fila y formulario en dos columnas. |
| Accesibilidad | Foco visible, etiquetas de formulario, alt, tabla desplazable con teclado y reducción de movimiento. |
| Iconos | Símbolos de texto: ＋ significa añadir producto y → significa ir al catálogo; no se usa una librería externa. |

La paleta principal sigue siendo magenta, blanco y gris. Éxito, aviso y error tienen color y texto propios. El contraste, la proximidad, la alineación y la jerarquía de títulos se mantienen en todas las páginas.

## Preparación de la entrega del grupo

- Activar y comprobar GitHub Pages después de subir el commit.
- Revisar en GitHub que el reparto de tareas figure en Issues y Projects y que todos tengan sus commits.
- Adjuntar la miniguía de estilo que tiene el grupo.
- Compartir el repositorio con el profesor por correo.
- Probar la web en el portátil y en el Realme 14 Pro: menú, imágenes, tabla, botones y formulario.
- Preparar la presentación obligatoria en Canva, Slides, PowerPoint o similar, mostrando los ejemplos de la tabla anterior y los principios de diseño visual.

## Comprobaciones realizadas

- Validador Nu ejecutado localmente: HTML, CSS y SVG sin errores.
- Seis páginas comprobadas con JavaScript desactivado; todas las imágenes son locales y cargan correctamente.
- Revisados enlaces, anclas, IDs únicos, un h1 por página y ausencia de estilos en línea.
- Ocho anchos comprobados, de 320 a 1280 píxeles, sin desbordamiento horizontal de la página y con botones principales de al menos 44 píxeles de alto.
- Comprobadas las categorías, la validación del formulario, el aviso de guardado y la preferencia de reducir movimiento.
- Estas comprobaciones de navegador no sustituyen la prueba física en el Realme del profesor.
