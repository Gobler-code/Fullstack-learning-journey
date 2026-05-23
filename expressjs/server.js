require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const Note = require('./models/note');
const app = express();
app.use(express.json())

app.get('/api/notes',async(req,res)=>{
    const notes = await Note.find();
    res.json(notes);
})

app.post('/api/notes', async(req,res)=>{
    const note = new Note(req.body);
    await note.save();
    res.status(201).json(note);
})

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('MongoDB connected');
        app.listen(process.env.PORT, () => {
            console.log(`Server running on port ${process.env.PORT}`);
        });
    })
    .catch((error) => {
        console.log('MongoDB connection failed', error);
        process.exit(1); // stop the server completely
    })