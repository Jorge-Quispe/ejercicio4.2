var contador = 0;
let usuario = class{
     constructor(usuario, password) {
    this.usuario = usuario;
    this.password = password;
}
}
function login() {
    var user1 = new usuario("jorge","1234");
    if (contador == 3) {
    } else {
        if (user1.usuario===document.getElementById("user").value && user1.password===document.getElementById("password").value) {
            alert("Se ingresó correctamente");
            contador=0;
        } else {
            contador += 1;
            alert("Intente nuevamente");
            document.getElementById("user").value = "";
            document.getElementById("password").value = "";
            if (contador == 3) {
                document.getElementById("user").disabled = true;
                document.getElementById("password").disabled = true;
                alert("Superó la cantidad de intentos");
            }
        } 
    }
}