const express = require('express');
const router = express.Router();
const tacos = require('../controllers/tacosController');

// returns all tacos
router.get('/tacos', tacos.index);

// returns the creation form
router.get('/tacos/new', tacos.new);

// adds the form data to the DB
router.post('/tacos', tacos.create);

// returns one taco
router.get('/tacos/:id', tacos.show);

// returns the update form
router.get('/tacos/:id/edit', tacos.edit);

// updates the selected taco
router.put('/tacos/:id', tacos.update);

// deletes the selected taco
router.delete('/tacos/:id', tacos.destroy);

module.exports = router;