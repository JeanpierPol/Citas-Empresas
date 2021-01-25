const mongoose = require('mongoose')

const MONGODB_URI = 'mongodb://localhost/citas-app'

mongoose.connect(MONGODB_URI , {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
    .then(db => console.log('database is connected'))
    .catch(err => console.log(err));