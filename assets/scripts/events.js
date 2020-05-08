'use strict'

const store = require('./store.js')
const displayTemplate = require('./templates/display.handlebars')
const helpers = require('./helpers.js')

const sideLength = 15

const createDisplay = () => {
  const display = []
  for (let i = 0; i < sideLength; i++) {
    display[i] = []
  }
  display.forEach(row => {
    for (let j = 0; j < sideLength; j++) {
      row[j] = 0
    }
  })
  store.display = display
  const displayHtml = displayTemplate({ rows: display })
  $('#display').html(displayHtml)
}

const setColors = event => {
  store.colors = helpers.colors[event.target.value]
  console.log(store.colors)
}

const play = event => {
  $('.btn').toggleClass('hidden')
  // const colors = store.colors
  console.log(store)
}

const stop = event => {
  $('.btn').toggleClass('hidden')
}

const addHandlers = () => {
  $('#colors').on('change', setColors)
  createDisplay()
  $('#play').on('click', play)
  $('#stop').on('click', stop)
}

module.exports = {
  addHandlers
}
