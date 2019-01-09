const express = require('express');
const app = express();
app.use(express.static(`${__dirname}/web`));
app.get('*', function(request, response, next) {
  response.sendfile(__dirname + '/web/index.html');
});
app.listen(4201, err => {
  if (err) {
    console.error(err);
  }
  console.log('Listening on port 4201');
});
