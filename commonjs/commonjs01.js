let http = require('http');
let config = require('./config.js');


let app = http.createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
    res.write('你好 nodejs');
    if (req.url != '/favicon.ico') {
        console.log(config.str);
    }
    res.end();
})
app.listen(8002, '127.0.0.1');