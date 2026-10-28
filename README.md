# WebGame_Dawnies
Grupo de Guilherme, Luka, Johnattan y Oier.

Web de GAME realizada con HTML, CSS y JavaScript.

## Organización

```text
WebGame_Dawnies/
├── index.html          Inicio
├── catalogo.html       Catálogo y filtros de productos
├── inventario.html     Inventario
├── alta.html           Formulario de alta de producto
├── css/
│   ├── inicio.css
│   ├── catalogo.css
│   ├── inventario.css
│   ├── alta.css
│   └── header.css       Cabecera común de las cuatro páginas
├── js/
│   └── catalogo.js      Búsqueda y filtros del catálogo
├── .gitignore
└── README.md
```

Los HTML se mantienen juntos para que los enlaces entre páginas sean sencillos.
Cada página tiene su propia hoja de estilos en `css/` y los scripts van en `js/`.
La cabecera usa `css/header.css` en todas las páginas para mantener el mismo diseño.

## Abrir la web

Abre la carpeta `WebGame_Dawnies` en tu editor y después `index.html` en el navegador.
También puedes abrirlo con Live Server si ya tienes esa extensión.
No hace falta instalar dependencias ni compilar el proyecto.

## Ver los cambios del equipo

Los archivos locales no se actualizan solos al subir cambios a GitHub.
Desde la terminal de esta carpeta:

1. Ejecuta `git status` para comprobar la rama y los cambios pendientes.
2. Si tienes cambios pendientes, guárdalos en un commit antes de actualizar.
3. Para actualizar la rama principal, ejecuta:

   ```sh
   git switch main
   git pull --no-rebase origin main
   ```

Los cambios que estén únicamente en la rama de un compañero aparecerán en `main`
cuando se integre esa rama. Recarga el navegador después de actualizar.
Si Git indica un conflicto, revisa ambos cambios antes de resolverlo.

`git pull` descarga e integra cambios; `git push` publica tus commits en GitHub.
