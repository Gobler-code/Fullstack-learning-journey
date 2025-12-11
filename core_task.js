const fs = require('fs');
const path = require('path');

const folderName = 'user_data';
const fileName = 'profile.txt';

const fullPath = path.join(folderName,fileName);
console.log('Task 1 result(Joined path):', fullPath);

const inputPath = 'user/admin/data/config.json';
const directoryOnly = path.dirname(inputPath);
console.log('Task 2 Result (Directory Name):', directoryOnly);

const content = "This data was written asynchronously.";

fs.writeFile('output.txt', content, (err) => {
    if(err)
    {
        console.log('Task 3 error:', err);
        return;
    }
    else{
        console.log('Task 3 Result:', 'File write complete!');

    }



try{
    const fileContent = fs.readFileSync('output.txt', 'utf-8');
    console.log('Task 4 Result (synchronous read content):', fileContent);
}
catch(error)
{
    console.error('Task 4 Error reading file synchrounously:',error.message);

}
});