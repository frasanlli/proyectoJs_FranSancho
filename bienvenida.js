window.addEventListener("DOMContentLoaded", () => {
    let usuarioActual = document.getElementById("correo")

    usuarioActual.textContent = `Hola ${obtenerValorCookie("usuarioActual=")}.`
    ultimaVisita.textContent = `La última vez que entraste fue el ${obtenerValorCookie("lastVisit=")}.`

})

function obtenerValorCookie (clave){
    //document.cookie = `username=John Doe`;
    //document.cookie = `lastVisit=06-05-2025`
    console.log(document.cookie)

    var arrayCookie = document.cookie.split(";");
    var valor = ""

    for (var i = 0; i < arrayCookie.length; i++){
        console.log(arrayCookie[i])
        if(arrayCookie[i].search(clave) != -1){
            valor = arrayCookie[i].substring(clave.length, arrayCookie[i].length)
            console.log(clave.length)
            console.log(arrayCookie[i].length)
            //hay que corregir que salga un espacio y poner guardado de fecha de inicio de alguna forma
        }
    }
    return valor
}