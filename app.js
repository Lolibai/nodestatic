const express = require('express');
const app = express();
require('dotenv').config()
const port = process.env.PORT || 4201;
app.use(express.static(`${__dirname}/web`));
app.get('*', function(request, response, next) {
  response.sendfile(__dirname + '/web/index.html');
});
app.listen(port, err => {
  if (err) {
    console.error(err);
  }
  console.log('Listening on port 4201');
});
