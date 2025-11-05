const boton = document.getElementById("cambiarFondo");

boton.addEventListener("click", () => {
  const colores = ["#f5f5dc", "#87ceeb", "#2e8b57", "#ffe4b5"];
  const colorActual = document.body.style.backgroundColor;
  let nuevoColor = colores[Math.floor(Math.random() * colores.length)];

  while (nuevoColor === colorActual) {
    nuevoColor = colores[Math.floor(Math.random() * colores.length)];
  }

  document.body.style.backgroundColor = nuevoColor;
});
