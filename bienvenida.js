window.addEventListener("DOMContentLoaded", () => {
    let usuarioActual = document.getElementById("correo")

    usuarioActual.textContent = `Hola ${obtenerValorCookie("usuarioActual=")}.`
    ultimaVisita.textContent = `La última vez que entraste fue el ${obtenerTiempoCookie("lastVisit=")}
                                a las ${obtenerFechaCookie("lastVisit=")}.`
})

document.getElementById("cuestionario").addEventListener("click", () => {
    location.replace("cuestionario.html")
})

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

function obtenerTiempoCookie (clave){
    //new Date().toLocaleTimeString()
    var fechaHora = new Date(obtenerValorCookie(clave))

    return fechaHora.toLocaleTimeString()

}

function obtenerFechaCookie (clave){
    //new Date().toLocaleDateString()
    var fechaHora = new Date(obtenerValorCookie(clave))

    return fechaHora.toLocaleDateString()
}