const fs = require('fs');
const path = require('path');
  

const filepath = path.join(__dirname,'learning.txt');

fs.writeFile(filepath, 'I am mastering the Event loop', (err) => {
    if (err) {
        console.error('Error writing to file:', err);
    } else {
        console.log('writing finished');
        
        fs.readFile(filepath, 'utf-8',(err, data)=>{
    if(err) return console.log(err);
    console.log("read complete :",data);
}  )
    }
});


