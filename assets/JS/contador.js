//necesito que este contador haga 3 cosas
//incremente de uno en uno
//decremente de uno en uno
//borr toda la cuenta
//necesitamos iniciar en 0

var valorContador = 0;//Iniciamos neustra variable en 0

function Incrementar(){
    valorContador++;
    document.getElementById("contador").innerHTML =
    valorContador;
}

function Decrementar(){
    valorContador--;
    document.getElementById("contador").innerHTML =
    valorContador;
}

function Resetear(){
    valorContador =0;
    document.getElementById("contador").innerHTML =
    valorContador;
}




