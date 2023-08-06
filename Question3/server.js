// Using the HTTP module Create an http server

// Return “Hello world” from the response
// Ensure when you navigate to the server on the browser, “Hello world” is returned.

const http = require('http');   
const POSTNAME = 'localhost';
const PORT = 9000;

const server = http.createServer((req, res) => {
    res.end('Hello world');

}
);

server.listen(PORT, POSTNAME, () => {
    console.log(`Server is running on http://${POSTNAME}:${PORT}`);
}
);