var http=require('http');

http.createServer((req,res)=>{
    var linkData = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();

    switch(linkData){
        case '':
            res.writeHead(200,{'content-type': 'text/plain'});
            res.end("Homepage")
            break;  
        case '/about':
            res.writeHead(200,{'content-type': 'text/plain'});
            res.end("About");
            break;
        default: 
            res.writeHead(404,{'content-type': 'text/plain'});
            res.end("Not Found")
    }

    // if(linkData==''){
    //     res.writeHead(200,{'content-type': 'text/plain'});
    //     res.end("Homepage")
    // }else if(linkData=='/about'){
    //     res.writeHead(200,{'content-type': 'text/plain'});
    //     res.end("About")
    // }else{
    //     res.writeHead(404,{'content-type': 'text/plain'});
    //     res.end("Not Found")
    // }
    
}).listen(3000);
console.log("server is running at port 3000");