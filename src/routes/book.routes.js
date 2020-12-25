const express = require('express');

const router = express.Router();

const bookCtrl = require('../controllers/book.controller');

router.get('/', bookCtrl.findAllBooks);

router.get('/:id', bookCtrl.findOneBook);

router.post('/', bookCtrl.createBook);

router.put('/:id', bookCtrl.updateBook);

router.delete('/:id', bookCtrl.deleteBook);

module.exports = router;