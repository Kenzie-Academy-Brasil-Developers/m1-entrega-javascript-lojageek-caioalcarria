let listFigure = []
let listPainting = []


function createActionItem(img, name, value) {
    let item = {
        imagem:img,
        nome:name,
        valor:value
    }
    listFigure.push(item)
    return listFigure
}
console.log(listFigure)

createActionItem('./assets/img/actions/animewoman.jpg','anime woman','R$ 100')
createActionItem('./assets/img/actions/dragonballpersonagem.jpg','dragonball personagem','R$ 200')
createActionItem('./assets/img/actions/starwarspersonagem.jpg','star wars personagem','R$ 300')


function createPaintingItem(img, name, value) {
    let item = {
        imagem:img,
        nome:name,
        valor:value
    }
    listPainting.push(item)
    return listPainting
}
console.log(listPainting)

createPaintingItem('./assets/img/painting/clock.jpg','clock','R$ 400')
createPaintingItem('./assets/img/painting/gamepad.jpg','gamepad','R$ 500')
createPaintingItem('./assets/img/painting/personagem.jpg','personagem','R$ 600')

for(let i = 0; i<4;i++){
    createActionItem('./assets/img/sem imagem.jpg','Nome do item','Valor do item')
}

for(let i = 0; i<4;i++){
    createPaintingItem('./assets/img/sem imagem.jpg','Nome do item','Valor do item')
}

let secaoListPainting = document.getElementsByClassName('painting')[0]
let secaoListFigures = document.getElementsByClassName('figure')[0]

function listarItem (listaProduto, seletor){
    for (let i = 0; i<listaProduto.length;i++){
        criarItem(listaProduto[i], seletor)
    }
}

function criarItem (objeto, seletor){
    let elementoLista = document.createElement('li')
    let imagem = document.createElement('img')
    let nome = document.createElement('h2')
    let valor = document.createElement('p')
    elementoLista.className = 'produto'
    imagem.className = 'picture'
    imagem.src = objeto.imagem
    nome.className = 'name'
    nome.innerText = objeto.nome
    valor.className = 'value'
    valor.innerText = objeto.valor
    elementoLista.appendChild(imagem)
    elementoLista.appendChild(nome)
    elementoLista.appendChild(valor)
    if(seletor.toLowerCase() == 'painting'.toLowerCase()){
        secaoListPainting.appendChild(elementoLista)
    }if(seletor.toLowerCase() == 'figure'.toLowerCase()){
        secaoListFigures.appendChild(elementoLista)
    }
}

listarItem(listPainting, 'painting')
listarItem(listFigure, 'figure')