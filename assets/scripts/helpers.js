'use strict'

const colors = {
  christmas: ['#ff0000', '#008000', '#D4AF37', '#C0C0C0'],
  channukah: ['#0000c0', '#afeeee', '#FFFFFF', '#C0C0C0'],
  kwanza: ['#ff0000', '#000000', '#008000'],
  diwali: ['#fffff0', '#ff0000', '#8B0000', '#FFFF33', '#006400'],
  rainbow: ['#ff0000', '#ffa500', '#ffff00', '#008000', '#0000cd', '#800080']
}

const switchBtns = () => {
  $('.btn').toggleClass('hidden')
}

module.exports = {
  colors,
  switchBtns
}
