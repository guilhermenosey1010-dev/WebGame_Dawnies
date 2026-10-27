const buscador = document.getElementById("buscar");
const tarjetas = document.querySelectorAll(".tarjeta");
const sinResultados = document.getElementById("sin-resultados");

buscador.addEventListener("input", () => {
    const texto = buscador.value.trim().toLowerCase();
    let encontrados = 0;

    tarjetas.forEach(tarjeta => {
        tarjeta.hidden = !tarjeta.textContent.toLowerCase().includes(texto);
        if (!tarjeta.hidden) encontrados++;
    });

    sinResultados.hidden = encontrados > 0;
});
