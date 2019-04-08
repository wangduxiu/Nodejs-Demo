//引入http模块
let http = require('http');
//用http模块创建服务
// req 获取url信息
// res 浏览器获取响应信息
http.createServer(function (req, res) {
    //发送HTTP 头部
    // http状态值 200：ok
    // 设置http头部 状态码是200，文件类型是html，字符集是utf-8
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write('<head><meta charset="utf-8"/></head>');
    res.write('你好,nodejs');
    res.write('你好,这是我得第一个nodejs程序');
    res.end()//结束响应
}).listen(8001);//设置监听端口