// console.log('Hello World');

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(`<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Pseudo selectors & more designing</title>
    </head>
    <style>
        .container {
            border: 3px solid rgb(245, 89, 245);
            background-color: rgb(165, 207, 255);
            padding: 22px;
            margin: 32px auto;
            width: 666px;
        }
    
        h3 {
            margin: auto;
        }
    
        .btn {
            font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
            background-color: #dd794a;
            border: none;
            padding: 6px;
            cursor: pointer;
            font-size: 13px;
            border-radius: 4px;
        }
    
        a {
            text-decoration: none;
            color: black;
        }
        a:visited{
            background-color: chartreuse;
        }
    
        a:hover {
            color: black;
            background-color: rgb(248, 174, 63);
        }
        a:active{
            background-color: cornflowerblue;
        }
    </style>
    
    <body>
        <h1>Pseudo selectors & more designing</h1>
        <div class="container" id="cont1">
            <h3>This is my heading</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum harum nesciunt esse debitis vel
                perspiciatis culpa facilis illo quod in magnam repellat omnis molestiae, accusamus temporibus aspernatur
                odit repudiandae dicta quae ab laudantium minus.</p>
            <a href="http://yahoo.com" target="_blank" class="btn">Read more</a>
            <button class="btn">Contuct us</button>
        </div>
    </body>
    
    </html>`);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});