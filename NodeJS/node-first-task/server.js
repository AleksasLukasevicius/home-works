const http = require("http");

const servername = "127.0.0.1";
const port = 5000;
const randomNumber = Math.round(Math.random());

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/plain");

    if (randomNumber) {
        res.statusCode = 403;
        res.end("Error! Somethind  wrong :(");
    }

    res.statusCode = 200;

    res.end("Hello!");
})

server.listen(port, servername, () => {
    console.info(`Server is runing!${randomNumber}`)
});
