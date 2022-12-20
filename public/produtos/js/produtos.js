var informacao = document.getElementById('prato-informacao');
var nomesDosPratos = document.querySelector('.nomes');

informacao.style.display = 'none'

function imagem(categoria, nome, prato, posicao) {
    categoria.forEach((infor) => {
        infor.addEventListener('click', (e) => {
            informacao.style.display = 'flex'
            
            let img = e.target.src;
            let imagem = document.createElement('img');
            imagem.classList.add('imagem-do-prato')

            if (e.target.src.includes(nome)) {
                imagem.src = img

                informacao.appendChild(imagem)
                nomesDosPratos.textContent = prato[posicao]
            }
        })
    })
}

informacao.addEventListener('click', ()=>{
    informacao.style.display = 'none'
})