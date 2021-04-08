const autoPrefixer = require('autoprefixer')
const declarationSorter = require('css-declaration-sorter')

module.exports = {
  plugins: [
    autoPrefixer,
    declarationSorter,
  ],
}
