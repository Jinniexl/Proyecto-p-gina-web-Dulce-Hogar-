const postre = document.getElementById("producto");
const opcionesGalletas = document.getElementById("opciones-galletas");
const saborGalletas = document.getElementById("sabor-galletas");
const cantidad = document.getElementById("cantidad");
const botonCalcular = document.getElementById("calcular-total");
const resultado = document.getElementById("resultado-total");

const precios = {
    "pie-fresa": 16,
    "pie-manzana": 16,
    "cupcakes": 12,
    "pastel": 30,
    "galletas": 10
};

// Mostrar los sabores de las galletas
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

// Calcular el total
if (botonCalcular) {
    botonCalcular.addEventListener("click", function () {
        const productoSeleccionado = postre.value;
        const cantidadSeleccionada = Number(cantidad.value);

        if (productoSeleccionado === "" || cantidadSeleccionada <= 0) {
            resultado.textContent =
                "Selecciona un producto e ingresa una cantidad válida.";
            return;
        }

        if (productoSeleccionado === "galletas" && saborGalletas.value === "") {
            resultado.textContent = "Selecciona un sabor para las galletas.";
            return;
        }

        const total = precios[productoSeleccionado] * cantidadSeleccionada;

        resultado.textContent = `Total estimado: $${total}`;
    });
}