const http = require('http');
const fs = require('fs');
const os = require('os');
const path = require('path');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        const filePath = path.join(__dirname, 'index.html');
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Error loading page');
            } else {
                const systemInfo = `
                    <p><strong>Current Time:</strong> ${new Date().toLocaleString()}</p>
                    <p><strong>Server OS:</strong> ${os.type()} (${os.platform()})</p>
                    <p><strong>Host Name:</strong> ${os.hostname()}</p>
                `;
                const finalHtml = data.replace('{{systemInfo}}', systemInfo);

                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(finalHtml);
            }
        });
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});
