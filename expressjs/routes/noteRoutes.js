const express = require('express');
const router = express.Router();
const { getNotes, getNoteById, postNotes, putNotes, deleteNote } = require('../controllers/noteController');

router.get('/', getNotes);
router.get('/:id', getNoteById);
router.post('/', postNotes);
router.put('/:id',putNotes);
router.delete('/:id',deleteNote);

module.exports = router;