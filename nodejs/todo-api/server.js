const http = require('http');
const fs = require('fs');
const path = require('path');

// tasks.json को absolute path मिलाउने
const dbPath = path.join(__dirname, 'tasks.json');

const server = http.createServer((req, res) => {
    
    // ==========================================
    // 1. GET ROUTE: Fetch all tasks from JSON file
    // ==========================================
    if (req.url === '/api/tasks' && req.method === 'GET') {
        
        // tasks.json फाइल रीड (Read) गर्ने
        fs.readFile(dbPath, 'utf8', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'application/json' });
                return res.end(JSON.stringify({ error: 'Database read error!' }));
            }
            
            // फाइलमा भएको डाटा सिधै Postman लाई पठाइदिने
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(data);
        });
    }
    
    // ==========================================
    // 2. POST ROUTE: Receive and save a new task
    // ==========================================
    else if (req.url === '/api/tasks' && req.method === 'POST') {
        let bodyChunks = [];

        // Postman बाट आएको डाटा chunks मा कलेक्ट गर्ने
        req.on('data', (chunk) => {
            bodyChunks.push(chunk);
        });

        // सबै डाटा आइसकेपछि चल्ने इभेन्ट
        req.on('end', () => {
            try {
                // १. कलेक्ट भएको binary data लाई string र object मा बदल्ने
                const rawString = Buffer.concat(bodyChunks).toString();
                const newTask = JSON.parse(rawString);

                // २. सिम्पल Validation (यदि title पठाइएको छैन भने रोक्ने)
                if (!newTask.title) {
                    res.writeHead(400, { 'Content-Type': 'application/json' });
                    return res.end(JSON.stringify({ error: 'Task title is required!' }));
                }

                // ३. फाइलमा पहिलेदेखि भएका डाटाहरू रीड गर्ने
                fs.readFile(dbPath, 'utf8', (readErr, fileData) => {
                    if (readErr) {
                        res.writeHead(500, { 'Content-Type': 'application/json' });
                        return res.end(JSON.stringify({ error: 'Failed to read database!' }));
                    }

                    // पुराना डाटाहरूलाई Array मा बदल्ने
                    const tasksArray = JSON.parse(fileData);

                    // ४. नयाँ टास्कमा एउटा Unique ID थपिदिने (Time in milliseconds)
                    newTask.id = Date.now();

                    // ५. नयाँ टास्कलाई पुरानो Array को अन्तिममा थप्ने (Push)
                    tasksArray.push(newTask);

                    // ६. अपडेट भएको पूरा Array लाई फेरि tasks.json मा राइट (Write) गर्ने
                    // null, 2 ले JSON फाइललाई चिटिक्क परेको format मा सेभ गर्छ
                    fs.writeFile(dbPath, JSON.stringify(tasksArray, null, 2), (writeErr) => {
                        if (writeErr) {
                            res.writeHead(500, { 'Content-Type': 'application/json' });
                            return res.end(JSON.stringify({ error: 'Failed to write to database!' }));
                        }

                        // ७. सफलतापूर्वक सेभ भएपछि response पठाइदिने (21 Created)
                        res.writeHead(201, { 'Content-Type': 'application/json' });
                        res.end(JSON.stringify({ message: 'Task added successfully!', task: newTask }));
                    });
                });

            } catch (catchErr) {
                // यदि Postman बाट बिग्रेको JSON आयो भने सर्भर क्र्यास हुन नदिने
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Invalid JSON format payload!' }));
            }
        });
    }
    
    // ==========================================
    // 3. CATCH-ALL: Route Not Found
    // ==========================================
    else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Route not found!' }));
    }
});

const PORT = 4000;
server.listen(PORT, () => console.log(`Pure Node.js DB API live on port ${PORT}`));