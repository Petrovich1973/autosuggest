const express = require('express')
const path = require('path')
const port = process.env.PORT || 3434
const app = express()

app.use(express.static(__dirname + '/'))

app.get('*', function(req, res) {
	res.sendFile(path.resolve(__dirname + '/public/', 'index.html'))
})

app.use(function(req, res, next) {
	res.status(404).send('404 — Страница не найдена!')
})

app.use(function(err, req, res, next) {
	console.error(err.stack)
	res.status(500).send('500 — Что-то не так!')
})

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

app.use(function(req, res, next){
    res.header("Content-Security-Policy", "default-src 'self';script-src 'self';object-src 'none';img-src 'self';media-src 'self';frame-src 'none';font-src 'self' data:;connect-src 'self';style-src 'self'");
    next();
});

app.listen(port)


console.log('http://localhost:'+port+'/public/index.html')



// app.get('/', function(req, res){
//     res.send("<html><body><p>hello world</p><script type='text/javascript'>alert('got you')</script></body><html>");
// });