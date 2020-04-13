// const newRelic = require('newrelic');
const express = require('express');
const cassandra = require('cassandra-driver');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

app.listen(3000, () => {
  console.log('Listening on port 3000');
});

const client = new cassandra.Client({
  contactPoints: ['localhost'],
  localDataCenter: 'datacenter1',
  keyspace: 'soundiverse'
});

client.connect(() => {
  console.log('connected to cassandra!');
});


app.get('/api/songs/:songid/comments', (req,res) => {
  const song = req.params.songid;
  const query = `SELECT * FROM comments_by_song WHERE song_id = ${song}`;
 // [766524], { prepared: true }
 console.log('Responding to GET request for song:', song);
  client.execute(query)
    .then((result) => res.send(result.rows))
    .catch((e) => console.log(e));
});

app.post('/api/songs/:songid/comments', (req, res) => {
  const song = req.params.songid;
  const {
    comment_ts, created_ts, comment, user_name, location, followers, pic_url
  } = req.body;
  const query =
  `INSERT INTO comments_by_song (id, song_id, comment_ts, created_ts, comment, user_name, location, followers, pic_url) VALUES (now(), ${song}, ${comment_ts}, ${created_ts}, '${comment}', '${user_name}', '${location}', ${followers}, '${pic_url}')`;
  client.execute(query)
    .then((result) => {
      console.log('Comment inserted');
      res.send('added');
    })
    .catch((e) => console.log(e));
});
