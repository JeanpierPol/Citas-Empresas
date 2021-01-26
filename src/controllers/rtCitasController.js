const rtCitasCtrl = {};

rtCitasCtrl.renderCitasForm = (req, res) => {
    res.render('citas/new-cita')
};

rtCitasCtrl.CreateNewCita = (req, res) => {
    console.log(req.body)
    res.send('Crear nota');
};

rtCitasCtrl.renderCitas = (req, res) => {
    res.send('render citas');
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