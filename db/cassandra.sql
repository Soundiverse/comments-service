
CREATE KEYSPACE soundCloud WITH replication = {'class': 'SimpleStrategy', 'replication_factor' : 3};

CREATE TYPE comment.user (
  name text, 
  location text, 
  followers counter, 
  pic_url, text 
);

CREATE TYPE comment.reply (
  created_at timestamp,
  comment text,
  user <user> 
);

CREATE TABLE comment.comments_by_song (
  song_id counter, 
  comment_id counter,
  created_at timestamp,
  comment text,
  user <user>, 
  replies list <reply>,
  PRIMARY KEY (song_id)
);