const categorias = [
    document.getElementById('sushi'),
    document.getElementById('burger'),
    document.getElementById('drinks'),
    document.getElementById('petiscos'),
    document.getElementById('sobremesas')
]

const produtos = [
    document.getElementById('sushi-produtos'),
    document.getElementById('burger-produtos'),
    document.getElementById('drinks-produtos'),
    document.getElementById('petiscos-produtos'),
    document.getElementById('sobremesas-produtos')
]

categorias.forEach((opcao) => {
    opcao.addEventListener('click', (e) => {
        if (e.target.id == "sushi") {
            produtos[0].style.display = 'flex'
            produtos[1].style.display = 'none'
            produtos[2].style.display = 'none'
            produtos[3].style.display = 'none'
            produtos[4].style.display = 'none'
        }
        if (e.target.id == "burger") {
            produtos[0].style.display = 'none'
            produtos[1].style.display = 'flex'
            produtos[2].style.display = 'none'
            produtos[3].style.display = 'none'
            produtos[4].style.display = 'none'
        }
        if (e.target.id == "drinks") {
            produtos[0].style.display = 'none'
            produtos[1].style.display = 'none'
            produtos[2].style.display = 'flex'
            produtos[3].style.display = 'none'
            produtos[4].style.display = 'none'
        }
        if (e.target.id == "petiscos") {
            produtos[0].style.display = 'none'
            produtos[1].style.display = 'none'
            produtos[2].style.display = 'none'
            produtos[3].style.display = 'flex'
            produtos[4].style.display = 'none'
        }
        if (e.target.id == "sobremesas") {
            produtos[0].style.display = 'none'
            produtos[1].style.display = 'none'
            produtos[2].style.display = 'none'
            produtos[3].style.display = 'none'
            produtos[4].style.display = 'flex'
        }
    })
})