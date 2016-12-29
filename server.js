var express = require('express');

// Create app

var app = express();

app.use(express.static('public'));

app.listen(3000, () => {
  console.log('Express server started on post 3000');
});
