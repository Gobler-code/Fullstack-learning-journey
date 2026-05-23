const express = require('express');
const app = express();
app.use(express.json());
app.use((req,res,next)=>{
    console.log(req.method,req.url);
    next();
})
app.get('/',(req,res)=>{
    res.json({message:"Express server running"});
});


app.get('/api/users' , (req,res)=>{
    const users = [
            { id: 1, name: "abc"},
            { id: 2, name: "xyz" }
        ];
    res.json(users);
})
app.post('/api/users',(req,res)=>{
  const user = req.body;
    res.json({message:"user recieved",user:user});
})
app.listen(3000,()=>{
    console.log('Express server running on port 3000')
})