--  psql -U rodrigosanchezgaos -d commentsDB < schema.sql

DROP TABLE IF EXISTS songs;
CREATE TABLE songs (
  id SERIAL PRIMARY KEY,
  name VARCHAR,
  plays INT,
  likes INT,
  reposts INT,
  followers INT,
  tracks INT,
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

DROP TABLE IF EXISTS comments;
CREATE TABLE comments (
  id SERIAL PRIMARY KEY,
  song_id INT,
  user_id INT,
  parent_id INT NULL,
  created_at TIMESTAMP,
  comment TEXT 
);


ALTER TABLE songs ADD CONSTRAINT constraint_fk1 FOREIGN KEY (user_id)
REFERENCES users(id);

ALTER TABLE comments ADD CONSTRAINT constraint_fk1 FOREIGN KEY (song_id)
REFERENCES songs(id);

ALTER TABLE comments ADD CONSTRAINT constraint_fk2 FOREIGN KEY (user_id)
REFERENCES users(id);

ALTER TABLE comments ADD CONSTRAINT constraint_fk3 FOREIGN KEY (parent_id)
REFERENCES comments(id);

