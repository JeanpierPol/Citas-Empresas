const ctrP = {};

ctrP.renderIndex = (req, res) => {
    res.render('index')
};

ctrP.renderCalendar = (req, res) => {
    res.render('calendario')
};

ctrP.renderNewCita = (req, res) => {
    res.render('nueva-cita')
}

module.exports = ctrP;