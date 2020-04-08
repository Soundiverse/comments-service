const express = require('express');
const { Client } = require('pg');

const config = {
  connectionString: 'postgres://@localhost/soundiverse',
};

const client = new Client(config);

client.connect((err) => {
  if (err) {
    console.error('connection error', err.stack);
  } else {
    console.log('connected to PostgreSQL!');
  }
});

const app = express();

app.get('/api/songs/:songid/comments', (req, res) => {
  const sonngID = req.params.songid;
  client.query(`SELECT * FROM comments WHERE song_id = ${sonngID}`)
    .then((response) => res.send(response.rows))
    .catch((e) => console.log(e));
});

app.listen(8000, () => {
  console.log('listening on port 8000');
});
