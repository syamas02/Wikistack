const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + 'public'));
app.use(morgan('dev'));

app.get('/', (req, res) => {
  return res.send('Hello World');
});

const PORT = 1337;
app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}.`);
});
