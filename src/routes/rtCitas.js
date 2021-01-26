const { Router } = require('express')
const router = Router()

const rtCitasCtrl = require('../controllers/rtCitasController')


//new Cita
router.get('/citas/add', rtCitasCtrl.renderCitasForm);

router.post('/citas/add', rtCitasCtrl.CreateNewCita);

//Get All citas
router.get('/citas', rtCitasCtrl.renderCitas)

//Edit citas
router.get('/citas/edit/:id', rtCitasCtrl.renderEditForm)

router.put('/citas/edit/:id', rtCitasCtrl.updateCita)

//Delete Cita
router.delete('/citas/delete/:id', rtCitasCtrl.deleteCita)

module.exports = router
