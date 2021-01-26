const mongoose = require('mongoose')

const { CITAS_APP_MONGODB_HOST, CITAS_APP_MONGODB_DATABASE } = process.env;
const MONGODB_URI = `mongodb://${CITAS_APP_MONGODB_HOST}/${CITAS_APP_MONGODB_DATABASE}`

mongoose.connect(MONGODB_URI , {    
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex:true
   
})
    .then(db => console.log('database is connected'))
    .catch(err => console.log(err));