
CREATE KEYSPACE comments WITH replication = { 'class': 'SimpleStrategy', 'replication_factor' : 1 };

CREATE TABLE comments.comments_by_song (
  song_id int,
  comment_id int, 
  created_at timestamp,
  comment text,
  user_name text, 
  location text, 
  followers int, 
  pic_url text, 
  reply_id int, 
  PRIMARY KEY (song_id, created_at)
);



























































































