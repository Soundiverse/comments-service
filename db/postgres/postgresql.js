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
  client.query(
    `select * from public.comments INNER JOIN public.users 
    ON public.comments."user_id" = public.users.id 
    where public.comments.song_id = ${sonngID}`)

    .then((response) => res.send(response.rows))
    .catch((e) => console.log(e));
});

app.post('/api/songs/:songid/comments', (req, res) => {
  const object = req.body;
  const demo = `1000001, 400025, 1000001.000, 1584337440, 'First post Request comment!'`;
  client.query(`INSERT INTO comments (song_id, user_id, float_id, created_at, comment) VALUES (${demo})`)
    .then((response) => {
      console.log(Object.keys(response));
      res.send('Created!');
    })
    .catch((e) => console.log(e));
});

app.delete('/api/songs/:songid/comments/:commentid', (req, res) => {
  const object = req.body;
  const demo = req.params.commentid;
  client.query(`DELETE FROM comments WHERE id = ${demo}`)
    .then((response) => {
      console.log(Object.keys(response));
      res.send('Deleted');
    })
    .catch((e) => console.log(e));
});

app.listen(8000, () => {
  console.log('listening on port 8000');
});
