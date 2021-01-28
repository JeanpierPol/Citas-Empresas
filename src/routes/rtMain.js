const express = require('express')
const rtMain = express.Router();

const rtMainController = require('../controllers/rtMainController')

rtMain.get('/', rtMainController.renderIndex);

rtMain.get('/calendario', rtMainController.renderCalendar);

 
module.exports = rtMain;