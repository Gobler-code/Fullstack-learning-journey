const http = require('http');

const server = http.createServer((req, res) => {
    // Check if the route is /api/users and the method is POST
    if (req.url === '/api/users' && req.method === 'POST') {
        let bodyChunks = [];

        req.on('data', (chunk) => {
            bodyChunks.push(chunk);
        });

        req.on('end', () => {
            try {
                // Combine chunks and parse the raw string into a JavaScript Object
                const stringifiedData = Buffer.concat(bodyChunks).toString();
                const userData = JSON.parse(stringifiedData);

                // Simple backend validation check
                if (!userData.username || !userData.email) {
                    res.writeHead(400, { 'Content-Type': 'application/json' });
                    return res.end(JSON.stringify({ error: 'Username and email are required' }));
                }

                // Simulate saving to a database
                console.log('Saving user to DB:', userData);

                // Respond with a 21 Created status and JSON data
                res.writeHead(201, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({
                    message: 'User created successfully',
                    user: userData
                }));

            } catch (error) {
                // Handle JSON parsing errors safely so the server doesn't crash
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Invalid JSON payload format received' }));
            }
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Route not found' }));
    }
});

server.listen(5000, () => console.log('API Server live on port 5000'));