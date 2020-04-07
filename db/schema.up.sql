--  psql -U rodrigosanchezgaos -d commentsDB < schema.sql

DROP TABLE IF EXISTS comments;
CREATE TABLE comments (
  song_id INT,
  user_id INT,
  float_id NUMERIC (11,3),
  created_at INT,
  comment TEXT 
) PARTITION BY RANGE (song_id);

DROP TABLE IF EXISTS songs;
CREATE TABLE songs (
  id SERIAL PRIMARY KEY,
  name VARCHAR,
  plays INT,
  likes INT,
  reposts INT,
  user_id INT
);

DROP TABLE IF EXISTS users;
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR,
  location VARCHAR,
  followers INT,
  pic_url VARCHAR
);

CREATE TABLE comments_songid_1_to_2m PARTITION OF comments
  FOR VALUES FROM (1) TO (2000000);

CREATE TABLE comments_songid_2m_to_4m PARTITION OF comments
  FOR VALUES FROM (2000001) TO (4000000);

CREATE TABLE comments_songid_4m_to_6m PARTITION OF comments
  FOR VALUES FROM (4000001) TO (6000000);

CREATE TABLE comments_songid_6m_to_8m PARTITION OF comments
  FOR VALUES FROM (6000001) TO (8000000);

CREATE TABLE comments_songid_8m_to_10m PARTITION OF comments
  FOR VALUES FROM (8000001) TO (10000000); 

CREATE TABLE comments_songid_10m_to_12m PARTITION OF comments
  FOR VALUES FROM (10000001) TO (12000000);  

ALTER TABLE songs ADD CONSTRAINT constraint_fk1 FOREIGN KEY (user_id)
REFERENCES users(id);

ALTER TABLE comments ADD CONSTRAINT constraint_fk1 FOREIGN KEY (song_id)
REFERENCES songs(id);

ALTER TABLE comments ADD CONSTRAINT constraint_fk2 FOREIGN KEY (user_id)
REFERENCES users(id);