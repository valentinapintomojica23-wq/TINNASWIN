// TINNASWIN - Funciones básicas

// Mensaje en consola al cargar la página
window.addEventListener("load", function () {
  console.log("TINNASWIN cargado correctamente 💖");
});

// Desplazamiento suave para enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(function (link) {
  link.addEventListener("click", function (e) {
    const destino = document.querySelector(this.getAttribute("href"));
    if (destino) {
      e.preventDefault();
      destino.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

// Función para abrir WhatsApp
function abrirWhatsApp() {
  const numero = "573013464711";
  const mensaje = encodeURIComponent(
    "Hola, estoy interesada en los productos de TINNASWIN 💖"
  );
  window.open(https://wa.me/${numero}?text=${mensaje}, "_blank");
}
