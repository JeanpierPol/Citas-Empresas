require('dotenv').config();
console.log("asdasd")
const app = require('./server')
require('./database');

app.listen(app.get('port'), () => {
    console.log('escuchando en el puerto', app.get('port'))
})