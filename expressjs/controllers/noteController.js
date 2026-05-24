const Note = require('../models/note');
const getNotes = async (req, res,next) => {
    try {
        const notes = await Note.find();
        if (notes.length === 0) {
            res.status(404).json({ message: 'No notes found' });
            return;
        }
        res.json(notes);
    } catch (error) {
        next(error);
    }
};

const getNoteById = async(req,res,next)=>{
    try{ const notes = await Note.findById(req.params.id);
    if(!notes){
        res.status(404).json({message:'Note not found'});
        return;
    }
    res.json(notes);
   } catch (error) {
         next(error);
    }
   
}

const postNotes= async(req,res,next)=>{
    try{ const note = new Note(req.body);
    await note.save();
    res.status(201).json(note);
    }catch (error) {
       next(error);
    }
   
}

const putNotes = async (req,res,next)=>{
 try{
       const note = await Note.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    );
    if(!note){
        res.status(404).json({message:"Note not found"})
        return;
    }
    res.json(note);
 }catch (error) {
        next(error);
    }
}

const deleteNote = async (req,res,next)=>{
   try{
     const note = await Note.findByIdAndDelete(req.params.id);
    if(!note){
        res.status(404).json({message:"Note not found"})
        return;
    }
    res.json({message:"Note deleted",note});
   }catch (error) {
        next(error);
    }
}
module.exports = { getNotes, getNoteById, postNotes, putNotes, deleteNote };