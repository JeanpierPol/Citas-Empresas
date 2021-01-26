const rtMainController = {};

rtMainController.renderIndex = (req, res) => {
    res.render('index')
};

rtMainController.renderCalendar = (req, res) => {
    res.render('calendario')
};


module.exports = rtMainController;