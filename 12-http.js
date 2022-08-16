const http = require('http')

const server = http.createServer((req, res) => {
    // req is the incoming request
    // res is the response sent back

    if (req.url === '/') {
        res.end('Welcome to our home page')
    } 
    if (req.url === '/about') {
        res.write('This is our about page')
        res.end()
    }
    if (req === '**') {
        res.end('<h1>Oops</h1>')
    }

    

    // console.log(req);
    
})

server.listen(5000)