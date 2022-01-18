const form = document.querySelector('form')
const words = document.querySelector('.word')
const counter = document.querySelector('.counter')
const input = document.querySelector('#input')
mainFunc()
let randomWord

function mainFunc(main) {

    fetch('https://random-word-api.herokuapp.com/word')
        .then(function(data) {
            return data.json()
        })
        .then(getWord)

    function getWord(word) {
        randomWord = word[0]
        words.innerHTML = randomWord
        input.value = ''

    }
}
let count = 0;

form.addEventListener('input', (e) => {
    if (randomWord == input.value.toLowerCase()) {
        mainFunc();

        count++;
        counter.innerHTML = `Your score: ${count}`
    }

})