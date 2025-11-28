//variable para controlar pulsado del Ctrl
let controlPulsado = false;
//variable para detectar modificación de pantalla tras temporizado
let pantallaModificada = false;
//variable global temporizador sin asignar valor
let temporizador;

window.addEventListener("DOMContentLoaded", () => {
  //temporizador de 5 segundos
  temporizador = setTimeout(() => {
    pantallaModificada = modificarInicio();
  }, 5000);
});

window.addEventListener("keydown", (tecla) => {
  console.log(pantallaModificada);
  if (!pantallaModificada) {
    console.log(tecla.key);
    //Si el control se ha pulsado se activa la variable
    if (tecla.key == "Control") {
      controlPulsado = true;
    }

    //Si el control se ha pulsado y se detecta que se pulsa la tecla F!0
    if (controlPulsado && tecla.key == "F10") {
      clearTimeout(temporizador);
      pantallaModificada = modificarInicio();
    }
  }
});

window.addEventListener("keyup", (tecla) => {
  //Si el control se deja de pulsar se desactiva la variable
  if (tecla.key == "Control") {
    controlPulsado = false;
  }
});

window.addEventListener("focusout", () => {
  let resultado = checkMail()
  if (resultado){
    location.replace("bienvenida.html")
  }
});


function modificarInicio() {
  //Detectamos elemento a eliminar
  const textoBotones = document.getElementById("textoBotones");
  //Eliminar el el elemento html a sustituir
  textoBotones.remove();
  //Crear sustitutos
  const div = document.createElement("div");
  const label = document.createElement("label");
  const br = document.createElement("br");
  const input = document.createElement("input");
  const errorLabel = document.createElement("label");

  div.classList.add("inicioSesion");
  label.textContent = "Usuario";
  input.id = "inputEmail";
  errorLabel.id = "errorLabel";

  document.body.appendChild(div);
  div.appendChild(label);
  div.appendChild(br);
  div.appendChild(input);
  div.appendChild(errorLabel);

  return true;
}

function checkMail() {
  console.log("Focus event")
  const inputEmail = document.getElementById("inputEmail").value;
  const errorEmail = document.getElementById("errorLabel");
  const emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailCheck.test(inputEmail)) {
    errorEmail.textContent = "";
    document.cookie = `usuarioActual=${inputEmail}`;
    return true;
  } else {
    errorEmail.textContent = "El formato del email debe ser xxxx@yyyy.zzzz";
    return false;
  }
}
