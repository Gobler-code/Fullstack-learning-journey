const http = require('http');

const server = http.createServer((req, res) => {
    // 1. Handling an API endpoint route
    if (req.url === '/api/products' && req.method === 'GET') {
        
        // Simulated Database Array
        const products = [
            { id: 1, name: "Dell Laptop", price: 75000 },
            { id: 2, name: "Mechanical Keyboard", price: 4500 }
        ];

        // 2. Setting Headers for JSON delivery
        res.writeHead(200, { 'Content-Type': 'application/json' });
        
        // 3. Converting JavaScript Array to String data to send over the network
        return res.end(JSON.stringify(products));
    }

    // Default 404 Fallback
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: "Route not supported" }));
});

server.listen(5000, () => console.log("API Server running on port 5000"));