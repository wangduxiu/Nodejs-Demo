//引入http模块
let http = require('http');
//引入url模块
let url = require('url');
//用http模块创建服务
// req 获取url信息
// res 浏览器获取响应信息
http.createServer(function (req, res) {



    //发送HTTP 头部
    // http状态值 200：ok
    // 设置http头部 状态码是200，文件类型是html，字符集是utf-8
    res.writeHead(200, { "Content-Type": "text/html" });

    //http://localhost:8002/news?aid=123 拿到id值
    //http://localhost:8002/news?aid=123&cid=345 拿到id值
    if (req.url !== '/favicon.ico') {
        //console.log(req.url);
        let result = url.parse(req.url, true);//第一个参数表示地址,第二个参数为true表示把get传值转换为对象
        console.log(result.query.aid);//获取url中的get传值
        console.log(result.query.cid);//获取url中的get传值
    }

    res.write('<head><meta charset="utf-8"/></head>');
    res.write('哈喽');
    res.write('哈喽,这是我得第2个nodejs程序111');
    res.end()//结束响应
}).listen(8002);//设置监听端口