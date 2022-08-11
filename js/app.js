
const textoIngresado = document.querySelector('#ingreso-texto');
const traduccion = document.querySelector('#salida-texto');
const btnEncriptar = document.querySelector('.btn-encriptar');
const btnDesencriptar = document.querySelector('.btn-desencriptar');
const btnCopiar = document.querySelector('.btn-copiar');

const encriptar = (texto) => {

    return texto.toLowerCase().replaceAll("e","enter").replaceAll("i","imes").replaceAll("a","ai").replaceAll("o","ober").replaceAll("u","ufat");

}

const desencriptar = (texto) =>{
    let desencriptado = ''
    for (let i = 0; i < texto.length; i++) {
        switch (texto[i]) {
            case 'a':
                if (texto[i+1]=='i') {
                    desencriptado += texto[i];
                    i += 1
                }
                else{
                    desencriptado += texto[i]
                }
                break;
            case 'e':
                if (texto[i+4]=='r') {
                    desencriptado += texto[i];
                    i += 4
                }
                else{
                    desencriptado += texto[i]
                }
                break;
            case 'i':
                if (texto[i+3]=='s') {
                    desencriptado += texto[i];
                    i += 3
                }
                else{
                    desencriptado += texto[i]
                }
                break;
            case 'o':
                if (texto[i+3]=='r') {
                    desencriptado += texto[i];
                    i += 3
                }
                else{
                    desencriptado += texto[i]
                }
                break;
            case 'u':
                if (texto[i+3]=='t') {
                    desencriptado += texto[i];
                    i += 3
                }
                else{
                    desencriptado += texto[i]
                }
                break;
        
            default:
                desencriptado += texto[i]
                break;
        }
        
    }
    return desencriptado
}

btnEncriptar.addEventListener( "click", ()=>{
    document.querySelector('.munieco').style.display = "none"
    document.querySelector('.mensaje-traducido').style.display = 'none'
    
    traduccion.value = encriptar(textoIngresado.value)
    document.querySelector('.salida-texto').style.display = 'flex'
    textoIngresado.value = ''

})

btnDesencriptar.addEventListener("click", ()=>{
    document.querySelector('.munieco').style.display = "none"
    document.querySelector('.mensaje-traducido').style.display = 'none'

    traduccion.value = desencriptar(textoIngresado.value)
    document.querySelector('.salida-texto').style.display = 'flex'
    textoIngresado.value = ''
})

btnCopiar.addEventListener("click",()=>{
    traduccion.select()
    document.execCommand("copy")
    
})