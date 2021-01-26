const rtCitasCtrl = {};

const Citas = require('../models/Citas')

rtCitasCtrl.renderCitasForm = (req, res) => {
    res.render('citas/new-cita')
};

rtCitasCtrl.CreateNewCita = async (req, res) => {
    const {cName,cLastName,cPhone,cEmail,cDate,cTime} = req.body;
    const newCita = new Citas({cName,cLastName,cPhone,cEmail,cDate,cTime})
    await newCita.save();
    res.send('Crear nota');
};

rtCitasCtrl.renderCitas = async (req, res) => {
    const citas = await Citas.find().lean();
    res.render('citas/all-citas', {citas});
};

rtCitasCtrl.renderEditForm =(req, res) =>{
    res.send('render');
};

rtCitasCtrl.updateCita = (req, res) => {
    res.send('editas');
};

rtCitasCtrl.deleteCita = (req, res) =>{
    res.send('deleteCita')
}

module.exports = rtCitasCtrl;