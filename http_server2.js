const http = require('http');
const PORT = 2000; // Capitalized to match its usage below

// 1. Changed to 'let' so we can increment its value over time
let visitCount = 0; 

const server = http.createServer((req, res) => {
    if (req.url === '/home' && req.method === 'GET') {
        visitCount++; // Increment count on every valid home request
        
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        
        // 4. Send the updated count directly back to the browser response
        return res.end(`Welcome! This page has been viewed ${visitCount} times.`);
    }
    if(req.url==='/status' && req.method ==='GET'){
         res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        return res.end(`Final visitor count ${visitCount} .`);
    }
    
    // Default 404 handler for any other route
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('404 Page Not Found');
});

// 2. Moved server.listen OUTSIDE of the createServer block
server.listen(PORT, () => {
    // 3. This runs exactly once when you type 'node file.js'
    console.log(`🚀 Tracking server is live on http://localhost:${PORT}`);
});