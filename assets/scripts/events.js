'use strict'

const store = require('./store.js')
const displayTemplate = require('./templates/display.handlebars')
const helpers = require('./helpers.js')

const sideLength = 15 // default display side length

// function run on document load, fills display div with "lights"
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
  store.display = display // records the display array in store object
  const displayHtml = displayTemplate({ rows: display })
  $('#display').html(displayHtml) // fills display container w/the lights' html
}

const setColorScheme = event => {
  store.colors = helpers.colors[event.target.value]
}

let colorInterval

const play = event => {
  if (!store.colors) {
    $('#usr-msg').text('Choose a color scheme first!')
    setTimeout(() => { $('#usr-msg').text('') }, 2000)
    return
  }
  $('.btn').toggleClass('hidden') // hides play btn & shows stop btn
  colorInterval = setInterval(helpers.setColors, 500)
}

const stop = event => {
  $('.btn').toggleClass('hidden') // hides stop btn & shows play btn
  $('input').prop('checked', false)
  store.colors = null
  clearInterval(colorInterval)
  createDisplay()
}

const addHandlers = () => {
  $('#colors').on('change', setColorScheme)
  createDisplay()
  $('#play').on('click', play)
  $('#stop').on('click', stop)
}

module.exports = {
  addHandlers
}
