USE soundiverse;

COPY comments_by_song (id, song_id, comment_id, created_at, comment, user_name, location, followers, pic_url) FROM '/Users/rodrigosanchezgaos/repos/sdc/comments-profile/db/cassandra/comments3.csv';
COPY comments_by_song (id, song_id, comment_id, created_at, comment, user_name, location, followers, pic_url) FROM '/Users/rodrigosanchezgaos/repos/sdc/comments-profile/db/cassandra/comments4.csv';