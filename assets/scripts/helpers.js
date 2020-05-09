'use strict'

const store = require('./store.js')
const displayTemplate = require('./templates/display.handlebars')

const colors = {
  christmas: ['#ff0000', '#008000', '#D4AF37', '#C0C0C0'],
  channukah: ['#0000c0', '#afeeee', '#FFFFFF', '#C0C0C0'],
  kwanza: ['#ff0000', '#000000', '#008000'],
  diwali: ['#5c1193', '#0047ab', '#dc143c', '#ff00ff'],
  rainbow: ['#ff0000', 'orange', 'yellow', 'green', 'blue', 'purple']
}

const switchBtns = () => {
  $('.btn').toggleClass('hidden')
}

const setColors = () => {
  const num = store.colors.length
  store.display.forEach(row => {
    row.forEach(light => {
      const colorIndex = Math.round(Math.random() * (num - 1))
      const i = store.display.indexOf(row)
      const j = store.display[i].indexOf(light)
      store.display[i][j] = store.colors[colorIndex]
    })
  })
  const displayHtml = displayTemplate({ rows: store.display })
  $('#display').html(displayHtml)
}

module.exports = {
  colors,
  switchBtns,
  setColors
}
