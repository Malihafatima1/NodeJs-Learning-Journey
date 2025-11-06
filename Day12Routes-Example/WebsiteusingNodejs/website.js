const http=require('http');
const fs=require('fs');



http.createServer((req,res)=>{

let collectHeaderData=fs.readFileSync('html/Header.html', 'utf-8',)



let file='/LandingPage';
if(req.url!='/'){
    file=req.url;
}

if (req.url === '/favicon.ico') {
    res.writeHead(204); // No Content
    return res.end();
  }  


    if(req.url ==='/style.css'){
        fs.readFile('html/style.css', 'utf-8', (error,data)=>{
            if(error){
                res.writeHead(500,{ 'Content-Type': 'text/plain'});
                res.end('CSS not found');
                console.error('read error:',error);
                return;
            }
           
            res.writeHead(200, { 'Content-Type': 'text/css' });
           res.end(data);
        });
        return;
    }
    
    //Handle html page
    fs.readFile(`html/${file}.html`,'utf-8',(error,data)=>{
        if(error){
            res.writeHead(404,{'Content-Type': 'text/plain'});
            res.end('Page not found');
            console.log('Read error',error);
            return;
        }
        res.writeHead(200, { 'Content-Type': 'text/html'});
        res.write(collectHeaderData + data);
        res.end()
    })
}).listen(3800,()=>{
    console.log("Server running on http:localhost3800");
});