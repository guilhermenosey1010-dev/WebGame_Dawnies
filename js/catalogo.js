const products = Array.from(document.querySelectorAll(".product"));
const categories = Array.from(document.querySelectorAll(".category"));
const search = document.getElementById("search");
const availability = document.getElementById("availability");
const platforms = Array.from(
  document.querySelectorAll('.filters input[type="checkbox"]'),
);
let type = "videojuegos";

function filterProducts() {
  const query = search.value.trim().toLocaleLowerCase("es");
  const selectedPlatforms = platforms
    .filter((input) => input.checked)
    .map((input) => input.value);
  let visible = 0;
  products.forEach((product) => {
    const matchesType = type === "all" || product.dataset.type === type;
    const matchesName = product.dataset.name
      .toLocaleLowerCase("es")
      .includes(query);
    const matchesPlatform =
      selectedPlatforms.length === 0 ||
      selectedPlatforms.includes(product.dataset.platform);
    const matchesAvailability =
      availability.value === "all" ||
      product.dataset.stock === availability.value;
    const show =
      matchesType &&
      matchesName &&
      matchesPlatform &&
      matchesAvailability;
    product.hidden = !show;
    if (show) visible++;
  });
  document.getElementById("empty").hidden = visible !== 0;
}

categories.forEach((button) =>
  button.addEventListener("click", () => {
    type = button.dataset.type;
    categories.forEach((item) => {
      const selected = item === button;
      item.classList.toggle("active", selected);
      item.setAttribute("aria-pressed", String(selected));
    });
    filterProducts();
  }),
);
search.addEventListener("input", filterProducts);
availability.addEventListener("change", filterProducts);
platforms.forEach((input) =>
  input.addEventListener("change", filterProducts),
);
