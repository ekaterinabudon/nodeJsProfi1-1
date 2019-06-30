const express = require('express');
const zlib = require('zlib');

const PORT = 3000;
const app = express();

app
  .use(express.static('public_1'))
  .post('/zip', (req, res) => {
      res.setHeader('Content-Type', 'application/octet-stream');
      res.setHeader('Content-Encoding', 'gip');
      req
        .pipe(zlib.createGzip())
        .pipe(res);
  })
  .listen(process.env.PORT || PORT, () => console.log(process.pid));

console.log('http://localhost:3000');