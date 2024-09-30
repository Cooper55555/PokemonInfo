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
    var img = document.getElementById('imageNormal6');
    img.src = 'https://pokemon.gishan.cc/static/i/p/shiny-squirtle.png';
    var img = document.getElementById('imageNormal7');
    img.src = 'https://pokemon.gishan.cc/static/i/p/shiny-wartortle.png';
    var img = document.getElementById('imageNormal8');
    img.src = 'https://pokemon.gishan.cc/static/i/p/shiny-blastoise.png';
    var img = document.getElementById('imageNormal9');
    img.src = 'https://pokemon.gishan.cc/static/i/p/shiny-chikorita.png';
    var img = document.getElementById('imageNormal10');
    img.src = 'https://pokemon.gishan.cc/static/i/p/shiny-bayleef.png';
    var img = document.getElementById('imageNormal11');
    img.src = 'https://pokemon.gishan.cc/static/i/p/shiny-meganium.png';
    var img = document.getElementById('imageNormal12');
    img.src = 'https://img.pokemondb.net/sprites/home/shiny/1x/wyrdeer.png';
    var img = document.getElementById('imageNormal14');
    img.src = 'https://pokemon.gishan.cc/static/i/p/shiny-kleavor.png';
    var img = document.getElementById('imageNormal15');
    img.src = 'https://img.pokemondb.net/sprites/home/shiny/1x/ursaluna.png';
    var img = document.getElementById('imageNormal16');
    img.src = 'https://img.pokemondb.net/sprites/home/shiny/1x/basculegion-male.png';
    var img = document.getElementById('imageNormal17');
    img.src = 'https://img.pokemondb.net/sprites/go/shiny/1x/sneasler.png';
    var img = document.getElementById('imageNormal18');
    img.src = 'https://img.pokemondb.net/sprites/go/shiny/1x/overqwil.png';
    var img = document.getElementById('imageNormal19');
    img.src = 'https://img.pokemondb.net/sprites/home/shiny/1x/enamorus-incarnate.png';
    var img = document.getElementById('costumeBulbasaur');
    img.src = 'https://img.pokemondb.net/sprites/go/shiny/1x/bulbasaur-pikachu-cap.png';
    var img = document.getElementById('costumeBulbasaur1');
    img.src = 'https://img.pokemondb.net/sprites/go/shiny/1x/bulbasaur-red-party-hat.png';
    var img = document.getElementById('costumeBulbasaur2');
    img.src = 'https://img.pokemondb.net/sprites/go/shiny/1x/bulbasaur-shedinja.png';
    var img = document.getElementById('costumeSquirtle');
    img.src = 'https://img.pokemondb.net/sprites/go/shiny/1x/squirtle-pikachu-cap.png';
    var img = document.getElementById('costumeSquirtle1');
    img.src = 'https://img.pokemondb.net/sprites/go/shiny/1x/squirtle-red-party-hat.png';
    var img = document.getElementById('costumeSquirtle2');
    img.src = 'https://img.pokemondb.net/sprites/go/shiny/1x/squirtle-sunglasses.png';
    var img = document.getElementById('costumeSquirtle3');
    img.src = 'https://img.pokemondb.net/sprites/go/shiny/1x/squirtle-yamask.png';
    var img = document.getElementById('costumeWartortle');
    img.src = 'https://img.pokemondb.net/sprites/go/shiny/1x/wartortle-red-party-hat.png';
    var img = document.getElementById('costumeWartortle1');
    img.src = 'https://img.pokemondb.net/sprites/go/shiny/1x/wartortle-sunglasses.png';
    document.getElementById('modal').style.backgroundColor="rgb(195, 179, 8)";
    document.getElementById('modal1').style.backgroundColor="rgb(195, 179, 8)";
    document.getElementById('modal2').style.backgroundColor="rgb(195, 179, 8)";
    document.getElementById('modal3').style.backgroundColor="rgb(195, 179, 8)";
    document.getElementById('modal4').style.backgroundColor="rgb(195, 179, 8)";
    document.getElementById('modal5').style.backgroundColor="rgb(195, 179, 8)";
    document.getElementById('modal6').style.backgroundColor="rgb(195, 179, 8)";
    document.getElementById('modal7').style.backgroundColor="rgb(195, 179, 8)";
    document.getElementById('modal8').style.backgroundColor="rgb(195, 179, 8)";
    document.getElementById('modal9').style.backgroundColor="rgb(195, 179, 8)";
    document.getElementById('modal10').style.backgroundColor="rgb(195, 179, 8)";
    document.getElementById('modal11').style.backgroundColor="rgb(195, 179, 8)";
    document.getElementById('modal12').style.backgroundColor="rgb(195, 179, 8)";
    document.getElementById('modal13').style.backgroundColor="rgb(195, 179, 8)";
    document.getElementById('modal14').style.backgroundColor="rgb(195, 179, 8)";
    document.getElementById('modal15').style.backgroundColor="rgb(195, 179, 8)";
    document.getElementById('modal16').style.backgroundColor="rgb(195, 179, 8)";
    document.getElementById('modal17').style.backgroundColor="rgb(195, 179, 8)";
    document.getElementById('modal18').style.backgroundColor="rgb(195, 179, 8)";
    document.getElementById('modal19').style.backgroundColor="rgb(195, 179, 8)";
    document.getElementById('cardyoutubers').style.backgroundColor="rgb(195, 179, 8)";
    document.getElementById('cardyoutubers1').style.backgroundColor="rgb(195, 179, 8)";
    document.getElementById('cardyoutubers2').style.backgroundColor="rgb(195, 179, 8)";
    document.getElementById('cardyoutubers3').style.backgroundColor="rgb(195, 179, 8)";
    document.getElementById('cardyoutubers4').style.backgroundColor="rgb(195, 179, 8)";
    document.getElementById('myInput').style.backgroundColor="rgb(110, 147, 102)";
    document.getElementById('costumeBulbasaur').style.backgroundColor="rgb(231, 202, 13)";
    document.getElementById('costumeBulbasaur1').style.backgroundColor="rgb(231, 202, 13)";
    document.getElementById('costumeBulbasaur2').style.backgroundColor="rgb(231, 202, 13)";
    document.getElementById('costumeSquirtle').style.backgroundColor="rgb(231, 202, 13)";
    document.getElementById('costumeSquirtle1').style.backgroundColor="rgb(231, 202, 13)";
    document.getElementById('costumeSquirtle2').style.backgroundColor="rgb(231, 202, 13)";
    document.getElementById('costumeSquirtle3').style.backgroundColor="rgb(231, 202, 13)";
    document.getElementById('costumeWartortle').style.backgroundColor="rgb(231, 202, 13)";
    document.getElementById('costumeWartortle1').style.backgroundColor="rgb(231, 202, 13)";
    document.getElementById('myHShiny').style.backgroundColor="rgb(195, 179, 8)";
    document.getElementById('myHShiny1').style.backgroundColor="rgb(195, 179, 8)";
    document.getElementById('myH1').style.backgroundColor="rgb(195, 179, 8)";
    document.getElementById('myH2').style.backgroundColor="rgb(195, 179, 8)";
    document.getElementById('myH3').style.backgroundColor="rgb(195, 179, 8)";
    document.getElementById('myH4').style.backgroundColor="rgb(195, 179, 8)";
    document.getElementById('myH5').style.backgroundColor="rgb(195, 179, 8)";
    document.getElementById('myH6').style.backgroundColor="rgb(195, 179, 8)";
    document.getElementById('myH7').style.backgroundColor="rgb(195, 179, 8)";
    document.getElementById('myH8').style.backgroundColor="rgb(195, 179, 8)";
    document.getElementById('myH9').style.backgroundColor="rgb(195, 179, 8)";
    document.getElementById('myH10').style.backgroundColor="rgb(195, 179, 8)";
    document.getElementById('myH11').style.backgroundColor="rgb(195, 179, 8)";
    document.getElementById('myH12').style.backgroundColor="rgb(195, 179, 8)";
    document.getElementById('myHome').style.backgroundColor="rgb(195, 179, 8)";
    document.getElementById('buttonShiny').style.backgroundColor="rgb(195, 179, 8)";
    document.getElementById('buttonShiny1').style.backgroundColor="rgb(195, 179, 8)";
    document.getElementById('buttons').style.backgroundColor="rgb(195, 179, 8)";
    document.getElementById('buttons1').style.backgroundColor="rgb(195, 179, 8)";
    document.getElementById('buttons2').style.backgroundColor="rgb(195, 179, 8)";
    document.getElementById('buttons3').style.backgroundColor="rgb(195, 179, 8)";
    document.getElementById('buttons4').style.backgroundColor="rgb(195, 179, 8)";
    document.getElementById('buttons5').style.backgroundColor="rgb(195, 179, 8)";
    document.getElementById('buttons6').style.backgroundColor="rgb(195, 179, 8)";
    document.getElementById('buttons7').style.backgroundColor="rgb(195, 179, 8)";
    document.getElementById('buttons8').style.backgroundColor="rgb(195, 179, 8)";
    document.getElementById('buttons9').style.backgroundColor="rgb(195, 179, 8)";
    document.getElementById('buttons10').style.backgroundColor="rgb(195, 179, 8)";
    document.getElementById('buttons11').style.backgroundColor="rgb(195, 179, 8)";
    document.getElementById('buttons12').style.backgroundColor="rgb(195, 179, 8)";
    document.getElementById('buttons13').style.backgroundColor="rgb(195, 179, 8)";
    document.getElementById('buttons14').style.backgroundColor="rgb(195, 179, 8)";
    document.getElementById('buttons15').style.backgroundColor="rgb(195, 179, 8)";
    document.getElementById('buttons16').style.backgroundColor="rgb(195, 179, 8)";
    document.getElementById('buttons17').style.backgroundColor="rgb(195, 179, 8)";
    document.getElementById('buttons18').style.backgroundColor="rgb(195, 179, 8)";
    document.getElementById('buttons19').style.backgroundColor="rgb(195, 179, 8)";
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
    var img = document.getElementById('imageNormal6');
    img.src = 'https://pokemon.gishan.cc/static/i/p/squirtle.png';
    var img = document.getElementById('imageNormal7');
    img.src = 'https://pokemon.gishan.cc/static/i/p/wartortle.png';
    var img = document.getElementById('imageNormal8');
    img.src = 'https://pokemon.gishan.cc/static/i/p/blastoise.png';
    var img = document.getElementById('imageNormal9');
    img.src = 'https://pokemon.gishan.cc/static/i/p/chikorita.png';
    var img = document.getElementById('imageNormal10');
    img.src = 'https://pokemon.gishan.cc/static/i/p/bayleef.png';
    var img = document.getElementById('imageNormal11');
    img.src = 'https://pokemon.gishan.cc/static/i/p/meganium.png';
    var img = document.getElementById('imageNormal12');
    img.src = 'https://pokemon.gishan.cc/static/i/p/wyrdeer.png';
    var img = document.getElementById('imageNormal14');
    img.src = 'https://pokemon.gishan.cc/static/i/p/kleavor.png';
    var img = document.getElementById('imageNormal15');
    img.src = 'https://pokemon.gishan.cc/static/i/p/ursaluna.png';
    var img = document.getElementById('imageNormal16');
    img.src = 'https://img.pokemondb.net/sprites/home/normal/1x/basculegion-male.png';
    var img = document.getElementById('imageNormal17');
    img.src = 'https://img.pokemondb.net/sprites/go/normal/1x/sneasler.png';
    var img = document.getElementById('imageNormal18');
    img.src = 'https://img.pokemondb.net/sprites/go/normal/1x/overqwil.png';
    var img = document.getElementById('imageNormal19');
    img.src = 'https://img.pokemondb.net/sprites/home/normal/1x/enamorus-incarnate.png';
    var img = document.getElementById('costumeBulbasaur');
    img.src = 'https://img.pokemondb.net/sprites/go/normal/1x/bulbasaur-pikachu-cap.png';
    var img = document.getElementById('costumeBulbasaur1');
    img.src = 'https://img.pokemondb.net/sprites/go/normal/1x/bulbasaur-red-party-hat.png';
    var img = document.getElementById('costumeBulbasaur2');
    img.src = 'https://img.pokemondb.net/sprites/go/normal/1x/bulbasaur-shedinja.png';
    var img = document.getElementById('costumeSquirtle');
    img.src = 'https://img.pokemondb.net/sprites/go/normal/1x/squirtle-pikachu-cap.png';
    var img = document.getElementById('costumeSquirtle1');
    img.src = 'https://img.pokemondb.net/sprites/go/normal/1x/squirtle-red-party-hat.png';
    var img = document.getElementById('costumeSquirtle2');
    img.src = 'https://img.pokemondb.net/sprites/go/normal/1x/squirtle-sunglasses.png';
    var img = document.getElementById('costumeSquirtle3');
    img.src = 'https://img.pokemondb.net/sprites/go/normal/1x/squirtle-yamask.png';
    var img = document.getElementById('costumeWartortle');
    img.src = 'https://img.pokemondb.net/sprites/go/normal/1x/wartortle-red-party-hat.png';
    var img = document.getElementById('costumeWartortle1');
    img.src = 'https://img.pokemondb.net/sprites/go/normal/1x/wartortle-sunglasses.png';
    document.getElementById('modal').style.backgroundColor="#04AA6D";
    document.getElementById('modal1').style.backgroundColor="#04AA6D";
    document.getElementById('modal2').style.backgroundColor="#04AA6D";
    document.getElementById('modal3').style.backgroundColor="#04AA6D";
    document.getElementById('modal4').style.backgroundColor="#04AA6D";
    document.getElementById('modal5').style.backgroundColor="#04AA6D";
    document.getElementById('modal6').style.backgroundColor="#04AA6D";
    document.getElementById('modal7').style.backgroundColor="#04AA6D";
    document.getElementById('modal8').style.backgroundColor="#04AA6D";
    document.getElementById('modal9').style.backgroundColor="#04AA6D";
    document.getElementById('modal10').style.backgroundColor="#04AA6D";
    document.getElementById('modal11').style.backgroundColor="#04AA6D";
    document.getElementById('modal12').style.backgroundColor="#04AA6D";
    document.getElementById('modal13').style.backgroundColor="#04AA6D";
    document.getElementById('modal14').style.backgroundColor="#04AA6D";
    document.getElementById('modal15').style.backgroundColor="#04AA6D";
    document.getElementById('modal16').style.backgroundColor="#04AA6D";
    document.getElementById('modal17').style.backgroundColor="#04AA6D";
    document.getElementById('modal18').style.backgroundColor="#04AA6D";
    document.getElementById('modal19').style.backgroundColor="#04AA6D";
    document.getElementById('cardyoutubers').style.backgroundColor="#04AA6D";
    document.getElementById('cardyoutubers1').style.backgroundColor="#04AA6D";
    document.getElementById('cardyoutubers2').style.backgroundColor="#04AA6D";
    document.getElementById('cardyoutubers3').style.backgroundColor="#04AA6D";
    document.getElementById('cardyoutubers4').style.backgroundColor="#04AA6D";
    document.getElementById('myInput').style.backgroundColor="rgb(110, 147, 102)";
    document.getElementById('costumeBulbasaur').style.backgroundColor="#82d682";
    document.getElementById('costumeBulbasaur1').style.backgroundColor="#82d682";
    document.getElementById('costumeBulbasaur2').style.backgroundColor="#82d682";
    document.getElementById('costumeSquirtle').style.backgroundColor="#82d682";
    document.getElementById('costumeSquirtle1').style.backgroundColor="#82d682";
    document.getElementById('costumeSquirtle2').style.backgroundColor="#82d682";
    document.getElementById('costumeSquirtle3').style.backgroundColor="#82d682";
    document.getElementById('costumeWartortle').style.backgroundColor="#82d682";
    document.getElementById('costumeWartortle1').style.backgroundColor="#82d682";
    document.getElementById('myHShiny').style.backgroundColor="#04AA6D";
    document.getElementById('myHShiny1').style.backgroundColor="#04AA6D";
    document.getElementById('myH1').style.backgroundColor="#04AA6D";
    document.getElementById('myH2').style.backgroundColor="#04AA6D";
    document.getElementById('myH3').style.backgroundColor="#04AA6D";
    document.getElementById('myH4').style.backgroundColor="#04AA6D";
    document.getElementById('myH5').style.backgroundColor="#04AA6D";
    document.getElementById('myH6').style.backgroundColor="#04AA6D";
    document.getElementById('myH7').style.backgroundColor="#04AA6D";
    document.getElementById('myH8').style.backgroundColor="#04AA6D";
    document.getElementById('myH9').style.backgroundColor="#04AA6D";
    document.getElementById('myH10').style.backgroundColor="#04AA6D";
    document.getElementById('myH11').style.backgroundColor="#04AA6D";
    document.getElementById('myH12').style.backgroundColor="#04AA6D";
    document.getElementById('myHome').style.backgroundColor="#04AA6D";
    document.getElementById('buttonShiny').style.backgroundColor="#04AA6D";
    document.getElementById('buttonShiny1').style.backgroundColor="#04AA6D";
    document.getElementById('buttons').style.backgroundColor="#04AA6D";
    document.getElementById('buttons1').style.backgroundColor="#04AA6D";
    document.getElementById('buttons2').style.backgroundColor="#04AA6D";
    document.getElementById('buttons3').style.backgroundColor="#04AA6D";
    document.getElementById('buttons4').style.backgroundColor="#04AA6D";
    document.getElementById('buttons5').style.backgroundColor="#04AA6D";
    document.getElementById('buttons6').style.backgroundColor="#04AA6D";
    document.getElementById('buttons7').style.backgroundColor="#04AA6D";
    document.getElementById('buttons8').style.backgroundColor="#04AA6D";
    document.getElementById('buttons9').style.backgroundColor="#04AA6D";
    document.getElementById('buttons10').style.backgroundColor="#04AA6D";
    document.getElementById('buttons11').style.backgroundColor="#04AA6D";
    document.getElementById('buttons12').style.backgroundColor="#04AA6D";
    document.getElementById('buttons13').style.backgroundColor="#04AA6D";
    document.getElementById('buttons14').style.backgroundColor="#04AA6D";
    document.getElementById('buttons15').style.backgroundColor="#04AA6D";
    document.getElementById('buttons16').style.backgroundColor="#04AA6D";
    document.getElementById('buttons17').style.backgroundColor="#04AA6D";
    document.getElementById('buttons18').style.backgroundColor="#04AA6D";
    document.getElementById('buttons19').style.backgroundColor="#04AA6D";
}

const openModalButtons6 = document.querySelectorAll('[data-modal-target6]')
const closeModalButtons6 = document.querySelectorAll('[data-close-button6]')
const overlay6 = document.getElementById('overlay6')

openModalButtons6.forEach(button6 => {
    button6.addEventListener('click', () => {
        const modal6 = document.querySelector(button6.dataset.modalTarget6)
        openModal(modal6)
    })
})

closeModalButtons6.forEach(button6 => {
    button6.addEventListener('click', () => {
        const modal6 = button6.closest('.modal6')
        closeModal(modal6)
    })
})

function openModal(modal6) {
    if (modal6 == null) return
    modal6.classList.add('active')
    overlay6.classList.add('active')
}

function closeModal(modal6) {
    if (modal6 == null) return
    modal6.classList.remove('active')
    overlay6.classList.remove('active')
}

const openModalButtons7 = document.querySelectorAll('[data-modal-target7]')
const closeModalButtons7 = document.querySelectorAll('[data-close-button7]')
const overlay7 = document.getElementById('overlay7')

openModalButtons7.forEach(button7 => {
    button7.addEventListener('click', () => {
        const modal7 = document.querySelector(button7.dataset.modalTarget7)
        openModal(modal7)
    })
})

closeModalButtons7.forEach(button7 => {
    button7.addEventListener('click', () => {
        const modal7 = button7.closest('.modal7')
        closeModal(modal7)
    })
})

function openModal(modal7) {
    if (modal7 == null) return
    modal7.classList.add('active')
    overlay7.classList.add('active')
}

function closeModal(modal7) {
    if (modal7 == null) return
    modal7.classList.remove('active')
    overlay7.classList.remove('active')
}

const openModalButtons8 = document.querySelectorAll('[data-modal-target8]')
const closeModalButtons8 = document.querySelectorAll('[data-close-button8]')
const overlay8 = document.getElementById('overlay8')

openModalButtons8.forEach(button8 => {
    button8.addEventListener('click', () => {
        const modal8 = document.querySelector(button8.dataset.modalTarget8)
        openModal(modal8)
    })
})

closeModalButtons8.forEach(button8 => {
    button8.addEventListener('click', () => {
        const modal8 = button8.closest('.modal8')
        closeModal(modal8)
    })
})

function openModal(modal8) {
    if (modal8 == null) return
    modal8.classList.add('active')
    overlay8.classList.add('active')
}

function closeModal(modal8) {
    if (modal8 == null) return
    modal8.classList.remove('active')
    overlay8.classList.remove('active')
}

const openModalButtons9 = document.querySelectorAll('[data-modal-target9]')
const closeModalButtons9 = document.querySelectorAll('[data-close-button9]')
const overlay9 = document.getElementById('overlay9')

openModalButtons9.forEach(button9 => {
    button9.addEventListener('click', () => {
        const modal9 = document.querySelector(button9.dataset.modalTarget9)
        openModal(modal9)
    })
})

closeModalButtons9.forEach(button9 => {
    button9.addEventListener('click', () => {
        const modal9 = button9.closest('.modal9')
        closeModal(modal9)
    })
})

function openModal(modal9) {
    if (modal9 == null) return
    modal9.classList.add('active')
    overlay9.classList.add('active')
}

function closeModal(modal9) {
    if (modal9 == null) return
    modal9.classList.remove('active')
    overlay9.classList.remove('active')
}

const openModalButtons10 = document.querySelectorAll('[data-modal-target10]')
const closeModalButtons10 = document.querySelectorAll('[data-close-button10]')
const overlay10 = document.getElementById('overlay10')

openModalButtons10.forEach(button10 => {
    button10.addEventListener('click', () => {
        const modal10 = document.querySelector(button10.dataset.modalTarget10)
        openModal(modal10)
    })
})

closeModalButtons10.forEach(button10 => {
    button10.addEventListener('click', () => {
        const modal10 = button10.closest('.modal10')
        closeModal(modal10)
    })
})

function openModal(modal10) {
    if (modal10 == null) return
    modal10.classList.add('active')
    overlay10.classList.add('active')
}

function closeModal(modal10) {
    if (modal10 == null) return
    modal10.classList.remove('active')
    overlay10.classList.remove('active')
}

const openModalButtons11 = document.querySelectorAll('[data-modal-target11]')
const closeModalButtons11 = document.querySelectorAll('[data-close-button11]')
const overlay11 = document.getElementById('overlay11')

openModalButtons11.forEach(button11 => {
    button11.addEventListener('click', () => {
        const modal11 = document.querySelector(button11.dataset.modalTarget11)
        openModal(modal11)
    })
})

closeModalButtons11.forEach(button11 => {
    button11.addEventListener('click', () => {
        const modal11 = button11.closest('.modal11')
        closeModal(modal11)
    })
})

function openModal(modal11) {
    if (modal11 == null) return
    modal11.classList.add('active')
    overlay11.classList.add('active')
}

function closeModal(modal11) {
    if (modal11 == null) return
    modal11.classList.remove('active')
    overlay11.classList.remove('active')
}

const openModalButtons12 = document.querySelectorAll('[data-modal-target12]')
const closeModalButtons12 = document.querySelectorAll('[data-close-button12]')
const overlay12 = document.getElementById('overlay12')

openModalButtons12.forEach(button12 => {
    button12.addEventListener('click', () => {
        const modal12 = document.querySelector(button12.dataset.modalTarget12)
        openModal(modal12)
    })
})

closeModalButtons12.forEach(button12 => {
    button12.addEventListener('click', () => {
        const modal12 = button12.closest('.modal12')
        closeModal(modal12)
    })
})

function openModal(modal12) {
    if (modal12 == null) return
    modal12.classList.add('active')
    overlay12.classList.add('active')
}

function closeModal(modal12) {
    if (modal12 == null) return
    modal12.classList.remove('active')
    overlay12.classList.remove('active')
}

const openModalButtons13 = document.querySelectorAll('[data-modal-target13]')
const closeModalButtons13 = document.querySelectorAll('[data-close-button13]')
const overlay13 = document.getElementById('overlay13')

openModalButtons13.forEach(button13 => {
    button13.addEventListener('click', () => {
        const modal13 = document.querySelector(button13.dataset.modalTarget13)
        openModal(modal13)
    })
})

closeModalButtons13.forEach(button13 => {
    button13.addEventListener('click', () => {
        const modal13 = button13.closest('.modal13')
        closeModal(modal13)
    })
})

function openModal(modal13) {
    if (modal13 == null) return
    modal13.classList.add('active')
    overlay13.classList.add('active')
}

function closeModal(modal13) {
    if (modal13 == null) return
    modal13.classList.remove('active')
    overlay13.classList.remove('active')
}

const openModalButtons14 = document.querySelectorAll('[data-modal-target14]')
const closeModalButtons14 = document.querySelectorAll('[data-close-button14]')
const overlay14 = document.getElementById('overlay14')

openModalButtons14.forEach(button14 => {
    button14.addEventListener('click', () => {
        const modal14 = document.querySelector(button14.dataset.modalTarget14)
        openModal(modal14)
    })
})

closeModalButtons14.forEach(button14 => {
    button14.addEventListener('click', () => {
        const modal14 = button14.closest('.modal14')
        closeModal(modal14)
    })
})

function openModal(modal14) {
    if (modal14 == null) return
    modal14.classList.add('active')
    overlay14.classList.add('active')
}

function closeModal(modal14) {
    if (modal14 == null) return
    modal14.classList.remove('active')
    overlay14.classList.remove('active')
}

const openModalButtons15 = document.querySelectorAll('[data-modal-target15]')
const closeModalButtons15 = document.querySelectorAll('[data-close-button15]')
const overlay15 = document.getElementById('overlay15')

openModalButtons15.forEach(button15 => {
    button15.addEventListener('click', () => {
        const modal15 = document.querySelector(button15.dataset.modalTarget15)
        openModal(modal15)
    })
})

closeModalButtons15.forEach(button15 => {
    button15.addEventListener('click', () => {
        const modal15 = button15.closest('.modal15')
        closeModal(modal15)
    })
})

function openModal(modal15) {
    if (modal15 == null) return
    modal15.classList.add('active')
    overlay15.classList.add('active')
}

function closeModal(modal15) {
    if (modal15 == null) return
    modal15.classList.remove('active')
    overlay15.classList.remove('active')
}

const openModalButtons16 = document.querySelectorAll('[data-modal-target16]')
const closeModalButtons16 = document.querySelectorAll('[data-close-button16]')
const overlay16 = document.getElementById('overlay16')

openModalButtons16.forEach(button16 => {
    button16.addEventListener('click', () => {
        const modal16 = document.querySelector(button16.dataset.modalTarget16)
        openModal(modal16)
    })
})

closeModalButtons16.forEach(button16 => {
    button16.addEventListener('click', () => {
        const modal16 = button16.closest('.modal16')
        closeModal(modal16)
    })
})

function openModal(modal16) {
    if (modal16 == null) return
    modal16.classList.add('active')
    overlay16.classList.add('active')
}

function closeModal(modal16) {
    if (modal16 == null) return
    modal16.classList.remove('active')
    overlay16.classList.remove('active')
}

function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');
  
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }

function myCards() {
    document.documentElement.scrollTop = 10000;
}

function myPokedex() {
    document.documentElement.scrollTop = 500;
}

function myKanto() {
    document.documentElement.scrollTop = 850;
}

function myJohto() {
    document.documentElement.scrollTop = 1850;
}

const openModalButtons17 = document.querySelectorAll('[data-modal-target17]')
const closeModalButtons17 = document.querySelectorAll('[data-close-button17]')
const overlay17 = document.getElementById('overlay17')

openModalButtons17.forEach(button17 => {
    button17.addEventListener('click', () => {
        const modal17 = document.querySelector(button17.dataset.modalTarget17)
        openModal(modal17)
    })
})

closeModalButtons17.forEach(button17 => {
    button17.addEventListener('click', () => {
        const modal17 = button17.closest('.modal17')
        closeModal(modal17)
    })
})

function openModal(modal17) {
    if (modal17 == null) return
    modal17.classList.add('active')
    overlay17.classList.add('active')
}

function closeModal(modal17) {
    if (modal17 == null) return
    modal17.classList.remove('active')
    overlay17.classList.remove('active')
}

const openModalButtons18 = document.querySelectorAll('[data-modal-target18]')
const closeModalButtons18 = document.querySelectorAll('[data-close-button18]')
const overlay18 = document.getElementById('overlay18')

openModalButtons18.forEach(button18 => {
    button18.addEventListener('click', () => {
        const modal18 = document.querySelector(button18.dataset.modalTarget18)
        openModal(modal18)
    })
})

closeModalButtons18.forEach(button18 => {
    button18.addEventListener('click', () => {
        const modal18 = button18.closest('.modal18')
        closeModal(modal18)
    })
})

function openModal(modal18) {
    if (modal18 == null) return
    modal18.classList.add('active')
    overlay18.classList.add('active')
}

function closeModal(modal18) {
    if (modal18 == null) return
    modal18.classList.remove('active')
    overlay18.classList.remove('active')
}

const openModalButtons19 = document.querySelectorAll('[data-modal-target19]')
const closeModalButtons19 = document.querySelectorAll('[data-close-button19]')
const overlay19 = document.getElementById('overlay19')

openModalButtons19.forEach(button19 => {
    button19.addEventListener('click', () => {
        const modal19 = document.querySelector(button19.dataset.modalTarget19)
        openModal(modal19)
    })
})

closeModalButtons19.forEach(button19 => {
    button19.addEventListener('click', () => {
        const modal19 = button19.closest('.modal19')
        closeModal(modal19)
    })
})

function openModal(modal19) {
    if (modal19 == null) return
    modal19.classList.add('active')
    overlay19.classList.add('active')
}

function closeModal(modal19) {
    if (modal19 == null) return
    modal19.classList.remove('active')
    overlay19.classList.remove('active')
}