USE soundiverse;

COPY comments_by_song (id, song_id, comment_ts, created_ts, comment, user_name, location, followers, pic_url) FROM '/home/ubuntu/comments-service/db/cassandra/comments3.csv';
COPY comments_by_song (id, song_id, comment_ts, created_ts, comment, user_name, location, followers, pic_url) FROM '/home/ubuntu/comments-service/db/cassandra/comments4.csv';