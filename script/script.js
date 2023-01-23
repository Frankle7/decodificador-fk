const btnCpiar = document.querySelector('.btnCpiar');
const txt_copy = document.querySelector('.txt_copy');


btnCpiar.addEventListener('click', copiarTexto);

function copiarTexto() {
    btnCpiar.innerText = 'Texto Copiado';
    btnCpiar.classList.add('copiado');

    setTimeout(() => {
        btnCpiar.innerText = 'Copiar';
        btnCpiar.classList.remove('copiado');
    }, 4000);
    navigator.clipboard.writeText(txt_copy.innerText);

}

const textArea = document.querySelector(".input_txt");
const mensagem = document.querySelector(".mensagem");

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = ""; 
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptad.replaceAll(matrizCodigo[i][0], matrizCodigo[i][i]);
        }
    }
    return stringEncriptada;
}
