const express = require('express');
const app = express();
let notes = [
  { id: 1, title: "First note", content: "Hello world" },
  { id: 2, title: "Second note", content: "Express is cool" }
];
app.use(express.json());

app.get('/api/notes',(req,res)=>{
   
    res.json(notes);
})
app.get('/api/notes/:id',(req,res)=>{
    const singleNote = notes.find((note)=> note.id === Number(req.params.id))
    res.json(singleNote);
}) 
app.post('/api/notes',(req,res)=>{
   
    const allNote = req.body;
    res.json({message:"Note recieved",notes:allNote});
})

app.put('/api/notes/:id',(req,res)=>{
     const oldNote = notes.find((note)=> note.id === Number(req.params.id))
      oldNote.title = req.body.title;
      oldNote.content = req.body.content;
      res.json({message:"Updated notes",notes:oldNote});

})

app.delete('/api/notes/:id',(req,res)=>{
      notes = notes.filter((note)=> note.id != Number(req.params.id))
      res.json({message:"note deleted",notes:notes});

})
app.listen(3000,()=>{
    console.log('Express server running on port 3000')
})
