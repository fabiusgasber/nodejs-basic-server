const http = require('http');
const path = require('path');
const fs = require('fs');
const PORT = 3000;

const server = http.createServer((req, res) => {
    const filepath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url += '.html');
        fs.readFile(filepath, 'utf-8', (err, data) => {
            if(err){
                if(err.code === 'ENOENT') {
                fs.readFile(path.join(__dirname, '404.html'), (err, data) => {
                    if(err) console.error('error found', err);
                    else {
                    res.writeHead(404, { 'Content-Type': 'text/html' });
                    res.end(data);
                    }
                })
                }
                else {
                console.error('error found', err);
                }
            }
            else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
            }
        })
});
server.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));