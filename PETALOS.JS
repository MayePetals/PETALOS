document.addEventListener("DOMContentLoaded", () => {
    if (!window.emailjs) {
      console.error("EmailJS no está disponible");
      return;
    }
  
    emailjs.init("iQoawRSaKl7AfaHJ8"); // Reemplaza con tu clave pública real
  
    const productos = [
      {
        id: 1,
        nombre: "Rosa Encantada",
        descripcion: "Flor eterna en cúpula de cristal",
        imagen: "https://via.placeholder.com/200x200?text=Rosa"
      },
      {
        id: 2,
        nombre: "Tulipán Dorado",
        descripcion: "Tulipán bañado en oro 24k",
        imagen: "https://via.placeholder.com/200x200?text=Tulipan"
      },
      {
        id: 3,
        nombre: "Caja de Rosas",
        descripcion: "12 rosas eternas en caja de lujo",
        imagen: "https://via.placeholder.com/200x200?text=Rosas"
      }
    ];
  
    // Mostrar productos en el catálogo
    const catalogo = document.getElementById("catalogo");
  
    productos.forEach(p => {
      const div = document.createElement("div");
      div.className = "producto";
      div.innerHTML = `
        <h3>${p.nombre} (#${p.id})</h3>
        <p>${p.descripcion}</p>
        <img src="${p.imagen}" alt="${p.nombre}">
      `;
      catalogo.appendChild(div);
    });
  
    // Manejo del formulario
    document.getElementById("formulario").addEventListener("submit", function(e) {
      e.preventDefault();
  
      const nombre = this.nombre.value;
      const email = this.email.value;
      const telefono = this.telefono.value;
      const opcion = this.opcion.value;
  
      emailjs.send("service_d08303f", "template_mlkpkvn", {
        name: nombre,
        email: email,
        phone: telefono,
        product_number: opcion
      }).then(function(response) {
        document.getElementById("mensaje").innerText = "✅ Enviado correctamente, gracias por tu interés 🌸";
      }, function(error) {
        document.getElementById("mensaje").innerText = "❌ Ocurrió un error al enviar el mensaje";
        console.error("Error:", error);
      });
  
      this.reset();
    });
  });
  