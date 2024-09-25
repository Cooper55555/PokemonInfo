const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal)
    })
})

function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}

const openModalButtons1 = document.querySelectorAll('[data-modal-target1]')
const closeModalButtons1 = document.querySelectorAll('[data-close-button1]')
const overlay1 = document.getElementById('overlay1')

openModalButtons1.forEach(button1 => {
    button1.addEventListener('click', () => {
        const modal1 = document.querySelector(button1.dataset.modalTarget1)
        openModal(modal1)
    })
})

closeModalButtons1.forEach(button1 => {
    button1.addEventListener('click', () => {
        const modal1 = button1.closest('.modal1')
        closeModal(modal1)
    })
})

function openModal(modal1) {
    if (modal1 == null) return
    modal1.classList.add('active')
    overlay1.classList.add('active')
}

function closeModal(modal1) {
    if (modal1 == null) return
    modal1.classList.remove('active')
    overlay1.classList.remove('active')
}

const openModalButtons2 = document.querySelectorAll('[data-modal-target2]')
const closeModalButtons2 = document.querySelectorAll('[data-close-button2]')
const overlay2 = document.getElementById('overlay2')

openModalButtons2.forEach(button2 => {
    button2.addEventListener('click', () => {
        const modal2 = document.querySelector(button2.dataset.modalTarget2)
        openModal(modal2)
    })
})

closeModalButtons2.forEach(button2 => {
    button2.addEventListener('click', () => {
        const modal2 = button2.closest('.modal2')
        closeModal(modal2)
    })
})

function openModal(modal2) {
    if (modal2 == null) return
    modal2.classList.add('active')
    overlay2.classList.add('active')
}

function closeModal(modal2) {
    if (modal2 == null) return
    modal2.classList.remove('active')
    overlay2.classList.remove('active')
}

const openModalButtons3 = document.querySelectorAll('[data-modal-target3]')
const closeModalButtons3 = document.querySelectorAll('[data-close-button3]')
const overlay3 = document.getElementById('overlay3')

openModalButtons3.forEach(button3 => {
    button3.addEventListener('click', () => {
        const modal3 = document.querySelector(button3.dataset.modalTarget3)
        openModal(modal3)
    })
})

closeModalButtons3.forEach(button3 => {
    button3.addEventListener('click', () => {
        const modal3 = button3.closest('.modal3')
        closeModal(modal3)
    })
})

function openModal(modal3) {
    if (modal3 == null) return
    modal3.classList.add('active')
    overlay3.classList.add('active')
}

function closeModal(modal3) {
    if (modal3 == null) return
    modal3.classList.remove('active')
    overlay3.classList.remove('active')
}

const openModalButtons4 = document.querySelectorAll('[data-modal-target4]')
const closeModalButtons4 = document.querySelectorAll('[data-close-button4]')
const overlay4 = document.getElementById('overlay4')

openModalButtons4.forEach(button4 => {
    button4.addEventListener('click', () => {
        const modal4 = document.querySelector(button4.dataset.modalTarget4)
        openModal(modal4)
    })
})

closeModalButtons4.forEach(button4 => {
    button4.addEventListener('click', () => {
        const modal4 = button4.closest('.modal4')
        closeModal(modal4)
    })
})

function openModal(modal4) {
    if (modal4 == null) return
    modal4.classList.add('active')
    overlay4.classList.add('active')
}

function closeModal(modal4) {
    if (modal4 == null) return
    modal4.classList.remove('active')
    overlay4.classList.remove('active')
}

const openModalButtons5 = document.querySelectorAll('[data-modal-target5]')
const closeModalButtons5 = document.querySelectorAll('[data-close-button5]')
const overlay5 = document.getElementById('overlay5')

openModalButtons5.forEach(button5 => {
    button5.addEventListener('click', () => {
        const modal5 = document.querySelector(button5.dataset.modalTarget5)
        openModal(modal5)
    })
})

closeModalButtons5.forEach(button5 => {
    button5.addEventListener('click', () => {
        const modal5 = button5.closest('.modal5')
        closeModal(modal5)
    })
})

function openModal(modal5) {
    if (modal5 == null) return
    modal5.classList.add('active')
    overlay5.classList.add('active')
}

function closeModal(modal5) {
    if (modal5 == null) return
    modal5.classList.remove('active')
    overlay5.classList.remove('active')
}

function changeImage() {
    var img = document.getElementById('imageNormal');
    img.src = 'https://pokemon.gishan.cc/static/i/p/shiny-bulbasaur.png';
    var img = document.getElementById('imageNormal1');
    img.src = 'https://pokemon.gishan.cc/static/i/p/shiny-ivysaur.png';
    var img = document.getElementById('imageNormal2');
    img.src = 'https://pokemon.gishan.cc/static/i/p/shiny-venusaur.png';
    var img = document.getElementById('imageNormal3');
    img.src = 'https://pokemon.gishan.cc/static/i/p/shiny-charmander.png';
    var img = document.getElementById('imageNormal4');
    img.src = 'https://pokemon.gishan.cc/static/i/p/shiny-charmeleon.png';
    var img = document.getElementById('imageNormal5');
    img.src = 'https://pokemon.gishan.cc/static/i/p/shiny-charizard.png';
}

function changeImage1() {
    var img = document.getElementById('imageNormal');
    img.src = 'https://pokemon.gishan.cc/static/i/p/bulbasaur.png';
    var img = document.getElementById('imageNormal1');
    img.src = 'https://pokemon.gishan.cc/static/i/p/ivysaur.png';
    var img = document.getElementById('imageNormal2');
    img.src = 'https://pokemon.gishan.cc/static/i/p/venusaur.png';
    var img = document.getElementById('imageNormal3');
    img.src = 'https://pokemon.gishan.cc/static/i/p/charmander.png';
    var img = document.getElementById('imageNormal4');
    img.src = 'https://pokemon.gishan.cc/static/i/p/charmeleon.png';
    var img = document.getElementById('imageNormal5');
    img.src = 'https://pokemon.gishan.cc/static/i/p/charizard.png';
}