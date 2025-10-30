const http = require('http');
const userForm=require('./userForm');
const userDataSubmit=require('./userDataSubmit');
// Create server
const server = http.createServer((req, res) => {

  
if(req.url=='/' && req.method === 'GET'){
    res.writeHead(200,{ "Content-Type":"text/html" })
    userForm(req,res);
}else if(req.url=='/submit' && req.method === 'POST'){
    res.writeHead(200,{ "Content-Type":"text/html" })
   userDataSubmit(req,res);
}
else{
    res.writeHead(404, {'Content-Type': 'text/html'});
    res.write('<h1>404 Page Not Found </h1>');
    res.end();
}

});

server.listen(3000, () => {
  console.log('Server is running on 3000');
});
