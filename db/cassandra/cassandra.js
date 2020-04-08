const express = require('express');
const cassandra = require('cassandra-driver');

const client = new cassandra.Client({
  contactPoints: ['h1', 'h2'],
  localDataCenter: 'datacenter1',
  keyspace: 'soundiverse'
});

const query = 'SELECT * FROM users WHERE song_id = ?';
 
client.execute(query, ['8766524'])
  .then((result) => console.log('cooments are: ', result.rows))
  .catch((e) => console.log(e));

const app = express();
app.listen(3000, () => {
  console.log('Listening on port 3000');
});
