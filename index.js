const button = document.querySelector('#change')
const title = document.querySelector('#title')
const description = document.querySelector('#desc')
const textField = document.querySelector('#textBox')
const submit = document.querySelector('#sub')
const form = document.querySelector('#form')
const level = document.querySelector('#level')

const createSpan = function(type) {
    if(type === 'spell'){
        const spellNameNode = document.createElement('SPAN')
        const spellAttr = document.createAttribute('class')
        const spellName = document.createTextNode(`${textField.value}`)
        spellAttr.value = 'spell'
        spellNameNode.setAttributeNode(spellAttr)
        spellNameNode.appendChild(spellName)
        return spellNameNode
    }else if(type === 'level'){
        const spellLevelNode = document.createElement('SPAN')
        const levelAttr = document.createAttribute('class')
        const spellLevel = document.createTextNode(` - ${level.value}`)
        levelAttr.value = 'level'
        spellLevelNode.setAttributeNode(levelAttr)
        spellLevelNode.appendChild(spellLevel)
        return spellLevelNode
    }else{
        const spellNameNode = document.createElement('SPAN')
        const spellAttr = document.createAttribute('class')
        const spellName = document.createTextNode(`${textField.value}`)
        spellAttr.value = 'spell'
        spellNameNode.setAttributeNode(spellAttr)
        spellNameNode.appendChild(spellName)
        return spellNameNode
    }
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