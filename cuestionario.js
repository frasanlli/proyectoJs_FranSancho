document.getElementById("atras").addEventListener("click", () => {
  location.replace("bienvenida.html");
});

document.getElementById("grabar").addEventListener("click", () => {
  manejarFormulario(true);
});

window.addEventListener("change", () => {
  checkFormulario();
});

window.addEventListener("DOMContentLoaded", () => {
  obtenerPreguntas();
});

let puntos = document.getElementById("puntos");
const numCheck = /^[1-9]$/;

puntos.addEventListener("beforeinput", function (key) {
  console.log("addEventListener: beforeinput");
  // Si el valor escrito está entre 1 y 9
  if (numCheck.test(key.value)) {
    console.log("addEventListener: beforeinput--IF OK");
    this.value = key.value;
    // Si el valor escrito no está entre 1 y 9 no se añade al campo
  } else {
    console.log("addEventListener: beforeinput--IF Nok");
    this.value = "";
  }
});

puntos.addEventListener("input", function () {
  // Si el primer valor no está entre 1 y 9
  console.log("addEventListener: input");
  if (!numCheck.test(this.value)) {
    console.log("addEventListener: input--IF Nok");
    this.value = "";
  }
});

function obtenerValorCookie(clave) {
  //document.cookie = `lastVisit=${new Date()};`
  console.log(`obtenerValorCookie (${clave})`);
  console.log(document.cookie);

  var arrayCookie = document.cookie.split(";");
  var valor = "";

  for (var i = 0; i < arrayCookie.length; i++) {
    console.log(arrayCookie[i]);
    if (arrayCookie[i].search(clave) != -1) {
      valor = arrayCookie[i].substring(clave.length, arrayCookie[i].length);
      //console.log(clave.length);
      //console.log(arrayCookie[i].length);
      if (valor[0] == "=") {
        console.log("cortando");
        valor = valor.slice(1, valor.length);
      }
    }
  }
  console.log(valor);
  return valor;
}

function manejarFormulario(grabar) {
  const inputPregunta = document.getElementById("pregunta").value;
  console.log("inputPregunta: " + inputPregunta);

  const radios = document.getElementsByClassName("respuesta");
  var respuesta = "";

  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      console.log("respuesta: " + radios[i].value);
      respuesta = radios[i].value;
    }
  }

  const inputPuntos = document.getElementById("puntos").value;
  console.log("inputPuntos: " + inputPuntos);

  if (inputPregunta && inputPuntos && respuesta) {
    if (!grabar) {
      return true;
    } else {
      grabarFormulario(inputPregunta, respuesta, inputPuntos);
    }
  }
}

function checkFormulario() {
  console.log("change event");
  const botonGrabar = document.getElementById("grabar");
  const estadoBoton = manejarFormulario(false);
  if (estadoBoton) {
    botonGrabar.disabled = false;
  } else {
    botonGrabar.disabled = true;
  }
}

function obtenerPreguntas() {
  console.log("obtenerPreguntas");
  var numPreguntas = Number(obtenerValorCookie("numPreguntas="));
  if (numPreguntas) {
    console.log("hay preguntas")
    for (var i = 0; i < numPreguntas; i++) {
      var pregunta = obtenerValorCookie(`pregunta${i+1}=`);
      console.log(`pregunta${i+1}= `+ pregunta)
      mostrarPreguntas(pregunta);
    }
  }else{
    console.log("NO hay preguntas")
  }

}

function mostrarPreguntas(pregunta) {
  console.log("mostrarPreguntas");
  const tablaPreguntas = document.getElementById("tablaPreguntas");
  const fila = document.createElement("tr");
  const datosPregunta = pregunta.split("/");
  console.log("datosPregunta= "+ datosPregunta)
  tablaPreguntas.appendChild(fila);

  for (var i = 0; i < datosPregunta.length; i++) {
    console.log(`datosPregunta[${i}]: ` + datosPregunta[i]);
    var dato = document.createElement("td");
    dato.textContent = datosPregunta[i];
    fila.appendChild(dato);
    if (Number(datosPregunta[i])){
      dato.classList.add("puntuacion")
    }
  }

  return true
}

function grabarFormulario(inputPregunta, respuesta, inputPuntos) {
  console.log(
    "grabando... inputPregunta= " +
      inputPregunta +
      "/ respuesta= " +
      respuesta +
      "/ inputPuntos=" +
      inputPuntos
  );
  var numPreguntas = Number(obtenerValorCookie("numPreguntas="));

  if (numPreguntas) {
    var n = numPreguntas + 1;
    document.cookie = `pregunta${n} = ${inputPregunta}/${respuesta}/${inputPuntos}`;
    document.cookie = `numPreguntas = ${n}`;
  } else {
    document.cookie = `numPreguntas = 1`;
    document.cookie = `pregunta1 = ${inputPregunta}/${respuesta}/${inputPuntos}`;
  }
}
