// Express server will go here
const express = require('express');
const app = express();
app.use(express.json());
app.get('/',(req,res)=>{
    res.json({message:"Express server running"});
});

app.listen(4000,()=>{
    console.log('Express server running on port 4000')
})