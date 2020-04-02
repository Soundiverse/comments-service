--  psql -U rodrigosanchezgaos -d commentsDB < schema.sql

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

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR,
  location VARCHAR,
  followers INT,
  pic_url VARCHAR
);

CREATE TABLE comments (
  id SERIAL PRIMARY KEY,
  created_at TIMESTAMP,
  comment text, 
  song_id INT,
  user_id INT
);

CREATE TABLE replies (
  id SERIAL PRIMARY KEY,
  created_at TIMESTAMP,
  reply text, 
  comment_id INT,
  user_id INT
);

ALTER TABLE songs ADD CONSTRAINT constraint_fk1 FOREIGN KEY (user_id)
REFERENCES users(id);

ALTER TABLE comments ADD CONSTRAINT constraint_fk1 FOREIGN KEY (song_id)
REFERENCES songs(id);

ALTER TABLE comments ADD CONSTRAINT constraint_fk2 FOREIGN KEY (user_id)
REFERENCES users(id);

ALTER TABLE replies ADD CONSTRAINT constraint_fk FOREIGN KEY (comment_id)
REFERENCES comments(id);

ALTER TABLE replies ADD CONSTRAINT constraint_fk2 FOREIGN KEY (user_id)
REFERENCES users(id);
