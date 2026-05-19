const http = require('http');
const PORT = 2000;

const server = http.createServer((req,res)=>{

     const baseURL = `http://${req.headers.host}`;
     const parsedURL = new URL(req.url , baseURL);

     const pathname  = parsedURL.pathname;
     const searchParams = parsedURL.searchParams;

     if(pathname === '/add' && req.method ==='GET')
     {
        const number1 = searchParams.get('num1') || 'nothing';
        const number2 = searchParams.get('num2')  || 'nothing';

        res.writeHead(200, {'Content_Type': 'application/Json'});
        const total = Number(number1 )+ Number(number2);
        return res.end(`the result is ${total}`);
     }

    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
})

server.listen(PORT, () => console.log(`🚀 Running on http://localhost:${PORT}`));