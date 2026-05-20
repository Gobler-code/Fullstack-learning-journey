// Import the built-in HTTP module from Node.js
// This module helps create web servers
const http = require('http');



// createServer() creates an HTTP server

// The callback function runs every time
// a client sends a request to the server

// req  = request object
// res  = response object

const server = http.createServer((req, res) => {



    // req.method tells us which HTTP method was used

    // Common methods:
    // GET    = fetch data
    // POST   = send/create data
    // PUT    = replace data
    // PATCH  = update partial data
    // DELETE = remove data

    // POST requests usually contain BODY DATA

    if (req.method === 'POST') {



        // Create empty array

        // Purpose:
        // store incoming chunks of data

        // Why array?
        // because body data may arrive in multiple pieces

        let body = [];



        // req is a STREAM object

        // Streams emit events while data flows

        // .on() listens for events

        // Syntax:
        // object.on('eventName', callback)

        // 'data' event fires whenever
        // a new chunk arrives from client

        req.on('data', (chunk) => {



            // chunk = small piece of incoming data

            // Usually a Buffer object

            // Buffer stores raw binary data

            // Example chunk:
            // <Buffer 7b 22 6e 61 ...>

            // push() adds chunk into array

            body.push(chunk);
        });



        // 'end' event fires when ALL data
        // has finished arriving

        // Meaning:
        // no more chunks coming

        req.on('end', () => {



            // body currently contains multiple buffers

            // Example:
            // [
            //   <Buffer ...>,
            //   <Buffer ...>
            // ]



            // Buffer.concat() combines all buffers
            // into ONE large buffer

            // .toString() converts binary data
            // into readable text/string

            const parsedBody = Buffer.concat(body).toString();



            // Print received body in terminal

            console.log("Received Raw Body Data:", parsedBody);



            // writeHead() sends response headers

            // 200 = success status code

            // Content-Type tells browser/client
            // what type of response data is being sent

            // text/plain = plain text response

            res.writeHead(200, {
                'Content-Type': 'text/plain'
            });



            // res.end() sends final response
            // and closes the response

            res.end('Data received successfully!');
        });

    } else {



        // If request method is NOT POST

        // send 404 error

        // 404 = resource not found

        res.writeHead(404);



        // Send error response

        res.end('Not Found');
    }
});



// Start server on port 3000

server.listen(3000, () => {



    // Runs when server starts successfully

    console.log('Server running on port 3000');
});