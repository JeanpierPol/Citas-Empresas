const { Router } = require('express')
const router = Router();

const { renderIndex, renderNewCita, renderCalendar } = require('../controllers/rtMainController')

router.get('/', renderIndex);

router.get('/calendario', renderCalendar);

 
module.exports = router;