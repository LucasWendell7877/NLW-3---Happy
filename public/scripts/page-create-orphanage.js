// create map

const map = L.map('mapid').setView([-23.542474,-46.6319013], 15)

//create and add tileLayer

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

// create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68]
})

let marker;


// create and add marker
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng; 

    // remover icon 
    marker && map.removeLayer(marker)

    // add icon layer
    marker = L.marker([lat, lng], { icon })
    .addTo(map)

})

//adicionar o campo de fotos

function addPhotoField() {
    // Pegar o container de fotos #images
    const container = document.querySelector('#images')
    // Pegar o container para duplicar .new-image
    const fieldsContainer = document.querySelectorAll('.new-upload')
    // Realizar o clone da última imagem adicionada.
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)
    
    // Verificar se o campo está vazio, se sim, não adicionar ao container de imagens
    const input = newFieldContainer.children[0]

    if(input.value == ""){
        return
    }

    // Limpar o campo antes de adicionar ao container de imagens
    input.value = ""
    
    // Adicionar o clone ao container de #images
    container.appendChild(newFieldContainer)
}


function deleteField(event) {
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')


    if(fieldsContainer.length < 2){
        // Limpar o valor do campo
        span.parentNode.children[0].value = ''
        return
    }

    // Deletar o campo
    span.parentNode.remove()

}

// Select yes or no 

function toggleSelect(event) {
    
    // Retirar a class .active (dos botões)
        document.querySelectorAll('.button-select button')
        .forEach(button => button.classList.remove('active'))
    // Colocar a class .active nesse botão clicado

    const button = event.currentTarget
    button.classList.add('active')

    // Atualizar o meu input hidden com o valor selecionado
    const input = document.querySelector('[name="open_on_weekends"]')
    
    input.value = button.dataset.value


}

// function validate(event) {
//     // Validar se alt e lng estao preenchidos

//     event.preventDefault()
//     alert('Selecione o ponto no mapa')
// }