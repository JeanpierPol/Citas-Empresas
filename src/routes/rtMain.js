const { Router } = require('express')
const router = Router();

const rtMainController = require('../controllers/rtMainController')

router.get('/', rtMainController.renderIndex);

router.get('/calendario', rtMainController.renderCalendar);

 
module.exports = router;