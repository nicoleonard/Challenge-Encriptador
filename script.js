const inputTexto = document.querySelector(".input-texto");
const mensaje = document.querySelector(".mensaje");

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

function btnEncriptar(){
    const textoEncriptado=encriptar(inputTexto.value);
    mensaje.value= textoEncriptado;
    mensaje.style.backgroundImage = "none";
    inputTexto.value = "";
}

function encriptar(texto){
    texto=texto.toLowerCase();
    let Codigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];

    for(var i=0; i<Codigo.length;i++){
        if(texto.includes(Codigo[i][0])){
            texto=texto.replaceAll(Codigo[i][0],Codigo[i][1]);
        }
    }
    return texto;

}

function btnDesencriptar(texto){
    const textoDesencriptado=desencriptar(inputTexto.value);
    mensaje.value=textoDesencriptado;
}

function desencriptar(texto){
    
    let Codigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];

    for(var i=0; i<Codigo.length;i++){
        if(texto.includes(Codigo[i][1])){
            texto=texto.replaceAll(Codigo[i][1],Codigo[i][0]);
        }
    }
    return texto;

}

function copiar(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value);
    mensaje.value="";
    alert("Texto copiado");
}