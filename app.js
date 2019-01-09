const express = require('express');
const app = express();
app.use(express.static(`${__dirname}/web`));
app.listen(4201, err => {
    if (err) {
      console.error(err);
    }
    console.log('Listening on port 4201');
  })