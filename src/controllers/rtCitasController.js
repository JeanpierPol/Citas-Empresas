const rtCitasCtrl = {};

const Citas = require('../models/Citas')

rtCitasCtrl.renderCitasForm = (req, res) => {
    res.render('citas/new-cita')
};

rtCitasCtrl.CreateNewCita = async (req, res) => {
    const {cName,cLastName,cPhone,cEmail,cDate,cTime} = req.body;
    const newCita = new Citas({cName,cLastName,cPhone,cEmail,cDate,cTime})
    await newCita.save();
    res.redirect('/citas');
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

rtCitasCtrl.deleteCita = async (req, res) =>{
    await Citas.findByIdAndDelete(req.params.id);
    res.redirect('/citas');
}

module.exports = rtCitasCtrl;