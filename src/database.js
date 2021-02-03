const mongoose = require('mongoose')

mongoose.connect('mongodb://LocalAdmin:inalbis@localhost:27017', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex:true
})
    .then(db => console.log('database is connected'))
    .catch(err => console.log(err));