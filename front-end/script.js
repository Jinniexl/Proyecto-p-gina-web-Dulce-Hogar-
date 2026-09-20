const postre = document.getElementById("postre");
const opcionesGalletas = document.getElementById("opciones-galletas");
const saborGalletas = document.getElementById("sabor-galletas");

if (postre && opcionesGalletas && saborGalletas) {
    postre.addEventListener("change", function () {
        if (postre.value === "galletas") {
            opcionesGalletas.style.display = "block";
            saborGalletas.required = true;
        } else {
            opcionesGalletas.style.display = "none";
            saborGalletas.required = false;
            saborGalletas.value = "";
        }
    });
}