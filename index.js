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
    if(type === 'spell'){
        const spellName = document.createTextNode(`${textField.value}`)
        attr.value = 'spell'
        spellNode.setAttributeNode(attr)
        spellNode.appendChild(spellName)
    }else if(type === 'level'){
        const spellLevel = document.createTextNode(` - ${level.value}`)
        attr.value = 'level'
        spellNode.setAttributeNode(attr)
        spellNode.appendChild(spellLevel)
    }else{
        //it shouldn't ever get here but just in case it'll create the spell node
        const spellName = document.createTextNode(`${textField.value}`)
        attr.value = 'spell'
        spellNode.setAttributeNode(attr)
        spellNode.appendChild(spellName)
    }
    return spellNode
}

const createLi = function() {
    const node = document.createElement('LI')
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