const app = {
    spells: [],

    index: 0,

    init: function() {
      const form = document.querySelector('form')
      form.addEventListener('submit', ev => {
        this.handleSubmit(ev)
      })
    },
  
    renderProperty: function(name, value) {
      const el = document.createElement('span')
      el.textContent = value
      el.classList.add(name)
      el.setAttribute('title', value)
      return el
    },
  
    renderItem: function(spell, index) {
      // ['name', 'level']
      properties = Object.keys(spell)
  
      // collect an array of renderProperty's return values
      // (an array of <span> elements)
      const childElements = properties.map(property => {
        return this.renderProperty(property, spell[property])
      })
  
      const item = document.createElement('li')
      item.classList.add('spell')
  
      // append each <span> to the <li>
      childElements.forEach(el => {
        item.appendChild(el)
      })

      item.lastChild.remove()

      //creates remove button for each spell
      const removeButton = document.createElement('button')
      const text = document.createTextNode('X')
      removeButton.classList.add('delete')
      removeButton.setAttribute('title', 'delete spell')
      removeButton.appendChild(text)

      //creates event listener for the remove button
      removeButton.addEventListener('click', event => {
          this.removeSpell(event, index)
      })
  
      //adds the button to the <li>
      item.appendChild(removeButton)

      return item
    },
  
    handleSubmit: function(ev) {
      ev.preventDefault()
  
      const f = ev.target
  
      const spell = {
        name: f.spellName.value,
        level: f.level.value,
        index: this.index,
      }

      this.spells.push(spell)

      console.log(this.spells)

      const item = this.renderItem(spell, spell.index)
  
      const list = document.querySelector('#spells')
      list.appendChild(item)
  
      this.index++
      
      f.reset()
    },

    removeSpell: function(event, index) {
        const list = document.querySelector('#spells')
        list.children[index].remove()
        for(let i = index; i < this.index; i++){
            this.spells[i].index--
        }
        this.spells.splice(index, 1)
        this.index--
        list.innerHTML = ''
        for(let i = 0; i < this.index; i++){
            const item = this.renderItem(this.spells[i], this.spells[i].index)
            list.appendChild(item)
        }
        console.log(this.spells)
    },
  }
  
  app.init()