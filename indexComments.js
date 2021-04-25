/*
// PRVA LEKCIJA nodeJS - prvi server
*/

const http = require("http"); //http module

const requestHandler = (req, res) => {
  console.log(req.url);
  res.end("Hello Node Server!"); // .end() metoda prekida response proces
};

const server = http.createServer(requestHandler); // pomoću http modula napravili smo server. requestHandler je pointer na ono što treba da se uradi kada request dođe.

//server.listen(5000); // postavili smo da osluškuje na portu 5000

/*
// DRUGA LEKCIJA express.js
*/
