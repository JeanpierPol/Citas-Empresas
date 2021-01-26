const { Router } = require('express')
const router = Router();

const { renderIndex, renderNewCita, renderCalendar } = require('../controllers/ctrP')

router.get('/', renderIndex);

router.get('/add-cita', renderNewCita);

router.get('/calendario', renderCalendar);

 
module.exports = router;