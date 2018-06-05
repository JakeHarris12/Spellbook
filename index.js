console.log("testing")
const button = document.querySelector('#change')
const title = document.querySelector('#title')
const description = document.querySelector('#desc')
const textField = document.querySelector('#textBox')
const submit = document.querySelector('#sub')
const form = document.querySelector('#form')

const changeHeading = function() {
    title.textContent = 'Hey look my button works!'
    description.textContent = 'Wow it must be magic or something!'
}

form.onsubmit = function(event) {
    document.querySelector('#spells').textContent += form.elements[0].value + '\n'
    textField.value = ''
    return false
}

button.addEventListener('click', changeHeading)
