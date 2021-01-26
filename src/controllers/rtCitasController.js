const rtCitasCtrl = {};

rtCitasCtrl.renderCitasForm = (req, res) => {
    res.send('nota añadida');
};

rtCitasCtrl.CreateNewCita = (req, res) => {
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