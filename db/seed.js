const express = require('express');
const { Client } = require('pg');

const config = {
  connectionString: 'postgres://@localhost/commentsDB',
};

const client = new Client(config);

client.connect((err) => {
  if (err) {
    console.error('connection error', err.stack);
  } else {
    console.log('connected');
  }
});

const app = express();

app.get('/users', (req, res) => {
  client.query('SELECT * FROM users')
    .then(response => res.send(response.rows))
    .catch(e => console.log(e));
});

app.listen(8000, () => {
  console.log('listening on port 8000');
});
