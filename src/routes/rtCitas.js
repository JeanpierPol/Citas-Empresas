const express = require('express');
const rtCitas = express.Router();

const rtCitasCtrl = require('../controllers/rtCitasController')

//new Cita
rtCitas.get('/citas/add', rtCitasCtrl.renderCitasForm);

rtCitas.post('/citas/new-cita', rtCitasCtrl.CreateNewCita);

//Get All citas
rtCitas.get('/citas', rtCitasCtrl.renderCitas)

//Edit citas
rtCitas.get('/citas/edit/:id', rtCitasCtrl.renderEditForm)

rtCitas.put('/citas/edit/:id', rtCitasCtrl.updateCita)

//Delete Cita
rtCitas.delete('/citas/delete/:id', rtCitasCtrl.deleteCita)

module.exports = rtCitas
