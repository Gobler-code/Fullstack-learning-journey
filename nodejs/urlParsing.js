// Import the built-in HTTP module from Node.js
// This module helps us create a web server
const http = require('http');


// Define the port number where the server will run
// Port = communication endpoint
const PORT = 2000;


// Create the server
// createServer() takes a callback function
// This callback runs EVERY time a user sends a request to the server
const server = http.createServer((req, res) => {

    // ---------------- REQUEST OBJECT ----------------
    // req = request object
    // Contains information sent by the client/browser
    // Example:
    // req.url
    // req.method
    // req.headers



    // req.headers.host gives:
    // localhost:2000

    // We add "http://" to make a COMPLETE URL
    // because new URL() needs full URL, not relative path
    const baseURL = `http://${req.headers.host}`;



    // req.url only contains relative path
    // Example:
    // /search?q=laptop&brand=dell

    // new URL() converts string URL into structured URL object

    // We pass:
    // 1. req.url = relative URL
    // 2. baseURL = base URL to complete it

    // Final complete URL becomes:
    // http://localhost:2000/search?q=laptop&brand=dell
    const parsedUrl = new URL(req.url, baseURL);



    // pathname gives only the route path
    // Example:
    // /search

    // It removes query parameters
    const pathname = parsedUrl.pathname;



    // searchParams contains query parameters
    // Example:
    // q=laptop
    // brand=dell

    // It returns URLSearchParams object
    const searchParams = parsedUrl.searchParams;



    // Check TWO conditions:

    // 1. pathname must be "/search"
    // 2. HTTP request method must be GET

    // GET means fetching/requesting data
    if (pathname === '/search' && req.method === 'GET') {



        // searchParams.get('q')
        // gets value of query parameter q

        // Example:
        // ?q=laptop

        // If q doesn't exist, use default value "nothing"
        const item = searchParams.get('q') || 'nothing';



        // searchParams.get('brand')
        // gets brand value

        // Example:
        // ?brand=dell

        // If brand doesn't exist,
        // default becomes "any brand"
        const brand = searchParams.get('brand') || 'any brand';



        // writeHead() sends response headers

        // 200 = success status code

        // Content-Type tells browser what kind of data we're sending
        // text/plain = plain text
        res.writeHead(200, { 'Content-Type': 'text/plain' });



        // res.end() sends final response to browser
        // and closes the response

        // return stops further code execution
        return res.end(`You searched for a ${item} made by ${brand}.`);
    }



    // If route does not match,
    // send 404 error

    // 404 = page not found
    res.writeHead(404, { 'Content-Type': 'text/plain' });



    // Send error message
    res.end('404 Not Found');
});



// Start server on specified port
server.listen(PORT, () => {

    // This runs when server starts successfully
    console.log(`🚀 Running on http://localhost:${PORT}`);
});