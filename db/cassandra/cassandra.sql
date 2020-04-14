DROP KEYSPACE IF EXISTS soundiverse;
CREATE KEYSPACE soundiverse WITH replication = { 'class': 'SimpleStrategy', 'replication_factor' : 1 };

CREATE TABLE soundiverse.comments_by_song (
  id uuid,
  song_id int,
  comment_ts int, 
  created_ts int,
  comment text,
  user_name text, 
  location text, 
  followers int, 
  pic_url text, 
  PRIMARY KEY (song_id, comment_ts, id)
);
  

CREATE TABLE soundiverse.songs (
  id int,
  name text,  
  plays int,
  likes int,
  reposts int,
  user_id int, 
  PRIMARY KEY (id, name)
);

CREATE TABLE soundiverse.users (
  id int,
  name text, 
  location text, 
  followers int, 
  pic_url text,  
  PRIMARY KEY (id, name)
);



























































































