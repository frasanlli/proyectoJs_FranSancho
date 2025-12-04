function obtenerValorCookie (clave){
    //document.cookie = `lastVisit=${new Date()};`
    console.log(document.cookie)

    var arrayCookie = document.cookie.split(";");
    var valor = ""

    for (var i = 0; i < arrayCookie.length; i++){
        console.log(arrayCookie[i])
        if(arrayCookie[i].search(clave) != -1){
            valor = arrayCookie[i].substring(clave.length, arrayCookie[i].length)
            console.log(clave.length)
            console.log(arrayCookie[i].length)
            if (valor[0] == "="){
                console.log("cortando")
                valor = valor.slice(1, valor.length);
            }
        }
    }
    console.log(valor)
    return valor
}

window.addEventListener("DOMContentLoaded", () => {
    var usuario = obtenerValorCookie("usuarioActual=")
    var clave = `${usuario}lastVisit=`
    var usuarioActual = document.getElementById("correo")
    var ultimaVisita = document.getElementById("ultimaVisita")
    var fechaHora

    console.log(fechaHora)
    usuarioActual.textContent = `Hola ${usuario}.`

    if (!obtenerValorCookie(clave)){
        ultimaVisita.textContent = "Es tu primera vez aquí :)"
    }else{
        fechaHora = new Date(obtenerValorCookie(clave))
        ultimaVisita.textContent = `La última vez que entraste fue el ${fechaHora.toLocaleDateString()}
                                a las ${fechaHora.toLocaleTimeString()}.`
    }

})

document.getElementById("cuestionario").addEventListener("click", () => {
    location.replace("cuestionario.html")
})
