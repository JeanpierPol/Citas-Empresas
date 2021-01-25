const {Schema,model} = require('mongoose')

const CitasSchema = new Schema({
    cName:String,
    cLastName:String,
    cPhone:Number,
    cEmail:String,
    cDate:String,
    cTime:String
},{
    timestamps:true
})

module.exports = model('Citas', CitasSchema);