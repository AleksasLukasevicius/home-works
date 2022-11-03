const http = require("http"); // mūsų sistemoje kreipkis į http package.

const port = 5_000; // specifiška vieta, kurioje teikti užklausą. Tipiškai 3000, 5000.
const randomNumber =
    Math.round(Math.random());

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/plain"); // panašu, kaip JavaScripte su fetch

    if (randomNumber) {
        res.statusCode = 403;
        res.end("Error! Something went wrong!");
    }

    res.statusCode = 200;
    res.end("Hello!");
});

server.listen(port, () => {
    console.log(`Server is running ${randomNumber}.`);
});