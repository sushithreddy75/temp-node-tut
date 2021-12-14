const { resolveObjectURL } = require('buffer');
const http=require('http');

const server=http.createServer((req,res)=>{
    if(req.url==='/')
    res.end('welcome to our home page');
    if(req.url==='/about')
    res.end('THIS IS ABOUT PAGE');
    res.end(`
        <h1>OOPS</h1>
        <p>Cant find the page you are looking for</p>
        <a href="/">home<a/>
        `
    )
})

server.listen(5000);