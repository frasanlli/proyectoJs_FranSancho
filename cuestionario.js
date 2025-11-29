document.getElementById("atras").addEventListener("click", () => {
  location.replace("bienvenida.html");
});


window.addEventListener("change", () => {
  checkFormulario();
});


function checkFormulario() {
  console.log("change event");
  const botonGrabar = document.getElementById("grabar");

  const inputPregunta = document.getElementById("pregunta").value;
  console.log("inputPregunta: " + inputPregunta);

  const radios = document.getElementsByClassName("respuesta")
  var respuesta = ""

  for (i=0; i<radios.length; i++){
    if (radios[i].checked){
        console.log("respuesta: " + radios[i].value);
        respuesta = radios[i].value
    }
  }

  const inputPuntos = document.getElementById("puntos").value;
  console.log("inputPuntos: " + inputPuntos);

  if (inputPregunta && inputPuntos && respuesta) {
    botonGrabar.disabled = false;
  } else {
    botonGrabar.disabled = true;
  }
}
