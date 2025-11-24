window.addEventListener("DOMContentLoaded", () => {
  const textoBotones = document.getElementById("textoBotones");
  const inicioSesion = document.getElementById("inicioSesion");
});

let controlPulsado = false

window.addEventListener("keydown", (tecla) => {
  console.log(tecla.key);
  if (tecla.key == "Control"){
        controlPulsado = true
    }

  if (controlPulsado && tecla.key == "F10"){
    textoBotones.remove()
    const label = document.createElement("label")
    label.textContent = "Usuario"
    const input = document.createElement("input")
    document.body.appendChild(label)
    document.body.appendChild(input)
    /*cambiarOculto(textoBotones);
    cambiarOculto(inicioSesion);*/
  }
});

window.addEventListener("keyup", (tecla) => {
    if (tecla.key == "Control"){
        controlPulsado = false
    }
})

function cambiarOculto(elemento) {
  //const test = document.getElementById("")
  console.log(elemento.style.visibility)
  if (elemento.style.visibility == "hidden") {
    elemento.style.visibility = "visible";
  } else {
    elemento.style.visibility = "hidden";
  }
}
