import { obtenerValorCookie } from './bienvenida.js';

document.getElementById("atras").addEventListener("click", () => {
  location.replace("bienvenida.html");
});

document.getElementById("grabar").addEventListener("click", () => {
  manejarFormulario(true);
});

window.addEventListener("change", () => {
  checkFormulario();
});


let puntos = document.getElementById("puntos");
const numCheck = /^[1-9]$/;

puntos.addEventListener("beforeinput", function(key) {
  // Si el valor escrito está entre 1 y 9
  if(numCheck.test(key.value)) {
    this.value = key.value
  // Si el valor escrito no está entre 1 y 9 no se añade al campo
  }else{
    this.value = ""
  }
})

puntos.addEventListener("input", function() {
  // Si el primer valor no está entre 1 y 9
  if (!numCheck.test(this.value)) {
    this.value = "";
  }
});


function manejarFormulario (grabar) {
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
    if (!grabar){
        return true
    }else{
        grabarFormulario (inputPregunta, respuesta, inputPuntos)
    }
    }
}

function checkFormulario() {
    console.log("change event");
  const botonGrabar = document.getElementById("grabar");
    const estadoBoton = manejarFormulario(false)
  if (estadoBoton) {
    botonGrabar.disabled = false;
  } else {
    botonGrabar.disabled = true;
  }
}

function grabarFormulario (inputPregunta, respuesta, inputPuntos){
    console.log("grabando...")
    /*
    var preguntasUsuario = obtenerPreguntas ()
    //contar cantidad de preguntas
    //añadir pregunta al listado
    document.cookie = `${usuarioActual}preguntas&{numPreguntas} = ${inputPregunta}`;
    document.cookie = `${usuarioActual}respuestas&{numPreguntas} = ${respuesta}`;
    document.cookie = `${usuarioActual}puntos&{numPreguntas} = ${inputPuntos}`;
    */
    }

function obtenerPreguntas (){
  var usuarioActual = obtenerValorCookie("usuarioActual=")
  var preguntasUsuario = obtenerValorCookie(`${usuarioActual}preguntas=`)
  //como separar las preguntas??
  var arrayPreguntas = preguntasUsuario.split("][")
  return arrayPreguntas
}