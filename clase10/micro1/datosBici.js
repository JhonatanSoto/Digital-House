const { json } = require('stream/consumers')
const fs = require('fs')


 let bici = JSON.parse(fs.readFileSync("./bicecletas.json","utf-8"))


module.exports = bici