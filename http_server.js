const http = require('http');
const url = require('url');
const PORT = 5000;

// Task 2 Logic (Stays outside the listener, runs immediately)
const testUrl = '/search?q=nodejs&category=core';
const parsedQuery = url.parse(testUrl,true).query;
console.log(`Task 2 result (Query 'q'): ${parsedQuery.q}`);

const requestListener = (req,res) =>{
    
    if(req.url ==='/home' && req.method ==='GET'){
        // Task 3 & 4: Successful Home Route
        res.setHeader('X-Developer', 'Uparjan');
        res.setHeader('Content-Type', 'text/plain');
        res.statusCode = 200; // Explicitly setting status 200 is good practice
        
        res.end('Welcome Home!');
        return; // <--- 💡 SOLUTION: Exit the function after sending the response!
    }
    
    // --- If not GET /home, handle the 404 case ---
    
    res.setHeader('Content-Type', 'text/plain');
    res.statusCode = 404; // Set status code to 404 (Not Found)
    res.end('Not Supported or Unknown Path');

    // NOTE: All the original duplicate code (res.writeHead, res.write, res.end)
    // at the end of the function is now GONE.
}

const server = http.createServer(requestListener);
server.listen(PORT , () =>{
    console.log(`Server is UP on port ${PORT}`);
})