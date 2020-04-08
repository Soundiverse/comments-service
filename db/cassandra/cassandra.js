const express = require('express');
const cassandra = require('cassandra-driver');

const client = new cassandra.Client({
  contactPoints: ['localhost'],
  localDataCenter: 'datacenter1',
  keyspace: 'soundiverse'
});

client.connect(() => {
  console.log('connected to cassandra!');
});


const app = express();
app.listen(3000, () => {
  console.log('Listening on port 3000');
});

app.get('/comments', (req,res) => {
  const query = 'SELECT * FROM comments_by_song WHERE song_id = 766524';
 // [766524], { prepared: true }
  client.execute(query)
    .then((result) => console.log('cooments are: ', result.rows))
    .catch((e) => console.log(e));
})