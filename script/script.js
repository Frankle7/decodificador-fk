const input_button_a = document.querySelector('.input_button_a');
const txt_copy = document.querySelector('.txt_copy');


input_button_a.addEventListener('click', copiarTexto);

function copiarTexto(){
        input_button_a.innerText = 'Texto Copiado';
        input_button_a.classList.add('copiado');
        
    setTimeout(()=> {
        input_button_a.innerText = 'Copiar';
        input_button_a.classList.remove('copiado');
    }, 4000);
    navigator.clipboard.writeText(txt_copy.innerText);

}

