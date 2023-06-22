var spin = require('spinnies')

var spinner = { 
"interval": 120,
"frames": [
"Xyro",
"Xyro Selalu",
"Xyro Selalu Mengawasi",
"Xyro Selalu Mengawasi Script Ini",
"Xyro Selalu Mengawasi",
"Xyro Selalu",
"Xyro"
]}

let globalSpinner;
var getGlobalSpinner = (disableSpins = false) => {
if(!globalSpinner) globalSpinner = new spin({ color: 'white', succeedColor: 'blue', spinner, disableSpins});
return globalSpinner;
}
spins = getGlobalSpinner(false)
module.exports.start = (id, text) => {
spins.add(id, {text: text})
}