// TINNASWIN - Funciones interactivas

// Mostrar mensaje de bienvenida cuando cargue la página
window.addEventListener("load", function () {
  console.log("Bienvenida a TINNASWIN 💖");
});

// Función para ir a la sección de productos
function comprarAhora() {
  const tienda = document.getElementById("tienda");
  if (tienda) {
    tienda.scrollIntoView({
      behavior: "smooth"
    });
  }
}

// Función para abrir WhatsApp
function contactarWhatsApp() {
  const numero = "573013464711";
  const mensaje = encodeURIComponent(
    "Hola, estoy interesada en los productos de TINNASWIN 💖"
  );
  const url = https://wa.me/${numero}?text=${mensaje};
  window.open(url, "_blank");
}

// Botón para volver al inicio
function volverAlInicio() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

// Confirmación simple al hacer clic en comprar
function agregarAlCarrito(nombreProducto) {
  alert(Has seleccionado: ${nombreProducto} 💖);
}
