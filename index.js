const button = document.querySelector('#change')
const title = document.querySelector('#title')
const description = document.querySelector('#desc')
const textField = document.querySelector('#textBox')
const submit = document.querySelector('#sub')
const form = document.querySelector('#form')
const level = document.querySelector('#level')

const createSpan = function(type) {
    const spellNode = document.createElement('SPAN')
    const attr = document.createAttribute('class')
    attr.value = type
    spellNode.setAttributeNode(attr)
    if(type === 'spell'){
        const spellName = document.createTextNode(`${textField.value}`)
        spellNode.classList.add('spellName')
        spellNode.appendChild(spellName)
    }else if(type === 'level'){
        const spellLevel = document.createTextNode(` - ${level.value}`)
        spellNode.classList.add('level')
        spellNode.appendChild(spellLevel)
    }else{
        //it shouldn't ever get here but just in case it'll create the spell node, we can always add a new function to this later
        const spellName = document.createTextNode(`${textField.value}`)
        spellNode.appendChild(spellName)
    }
    return spellNode
}

const createLi = function() {
    const node = document.createElement('LI')
    node.classList.add('spell')
    const spellNameNode = createSpan('spell')
    const spellLevelNode = createSpan('level')
    node.appendChild(spellNameNode)
    node.appendChild(spellLevelNode)
    document.querySelector('#spells').appendChild(node)
}

form.onsubmit = function(event) {
    createLi()
    textField.value = ''
    return false
}