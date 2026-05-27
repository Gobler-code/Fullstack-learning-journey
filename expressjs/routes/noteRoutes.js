const express = require('express');
const router = express.Router();
const protect  = require('../middleware/authMiddleware');
const { getNotes, getNoteById, postNotes, putNotes, deleteNote } = require('../controllers/noteController');

router.get('/',protect, getNotes);
router.get('/:id',protect, getNoteById);
router.post('/',protect, postNotes);
router.put('/:id',protect,putNotes);
router.delete('/:id',protect,deleteNote);

module.exports = router;