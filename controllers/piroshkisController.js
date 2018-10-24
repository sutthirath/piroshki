const Piroshki = require('../models/Piroshki');

module.exports = {
    index: function(req, res, next) {
        res.render('piroshkis/index', {piroshkis: Piroshki.getAllPiroskis() 
        });
    },
    new: function(req, res, next) {
        res.render('piroshkis/new');
    },
    create: function(req, res, next) {
        let data1 = req.body;
        Piroshki.addPiroshki(data1.piroshkiName, data1.piroshkiFilling, data1.piroshkiSize);
        res.redirect('/piroshkis');
    },
    show: function(req, res, next) {
        let t = req.params.id;
        res.render('piroshkis/show', {t: Piroshki.getPiroshki(t), id: req.params.id});
    },
    edit: function(req, res, next) {
        piroshki = Piroshki.getPiroshki(req.params.id);
        res.render('piroshkis/edit', {piroshki: piroshki, id: req.params.id});
    },
    update: function(req, res, next) {
        let data = req.body;
        Piroshki.updatePiroshki(req.params.id, data.piroshkiName, data.piroshkiFilling, data.piroshkiSize);
        res.redirect(`/piroshkis/${req.params.id}`);
    },
    destroy: function(req, res, next) {
        Piroshki.deletePiroshki(req.params.id);
        res.redirect('/piroshkis');
    }
}