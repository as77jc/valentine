import anime from './anime/anime.es.js';

const container = document.querySelector('.container');


const formData = document.createElement('div')
formData.classList.add('form');
container.appendChild(formData);
formData.innerHTML = `
        <form>
            <h1>Enter your paetner's name:</h1>
            <input type='text' placeholder='Name:' id='partnerName' autocomplete='off'>
            <br>
            <button id='submit'>Greeting</button>
        </form>`
        
const partnerName = document.getElementById('partnerName')
const submit = document.getElementById('submit')

submit.disabled = true
partnerName.addEventListener('keyup', () => {
    if (partnerName.value === "") {
        submit.disabled = true;
    } else {
        submit.disabled = false;
    }
})


submit.addEventListener('click', () => {
    
    let name = partnerName.value
    name = name.slice(0, 1).toUpperCase() + name.slice(1, name.length).toLowerCase()
    
    formData.remove()
    openEnv(name)

})



function openEnv (name) {
    
    for (let i = 0; i<= 100; i++){
        const blocks = document.createElement('div');
        blocks.classList.add('block');
        container.appendChild(blocks)   
    }

    container.innerHTML += `
        <div class='heart'></div>
        <h2>
            <span>
                happy valentine's day
                <br>
            </span>
                Dear ${name}
        </h2>`

    function animateBlocks () {
        anime({
            targets: '.block',
            translateX: function () {
                return anime.random(-700, 700);
            },
            translateY: function () {
                return anime.random(-500, 500);
            },
            scale: function () {
                return anime.random(.5, 5);
            },
            rotate: function () {
                return anime.random(-45, 200);
            },
            easing: 'linear',
            duration: 1500,
            delay: anime.stagger(5),
            complete: animateBlocks,
        })
        anime ({
            targets: '.heart',
            translateX: 200,
            scale: 5,
            rotate: 45,
            // scale: function () {
            //     return anime.random(2.5, 3.2);
            // },
            // complete: animateBlocks,
        })
    }

    animateBlocks()
}
