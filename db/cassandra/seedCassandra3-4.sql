USE soundiverse;

COPY comments_by_song (id, song_id, comment_ts, created_ts, comment, user_name, location, followers, pic_url) FROM '/home/ubuntu/data/comments3.csv';
COPY comments_by_song (id, song_id, comment_ts, created_ts, comment, user_name, location, followers, pic_url) FROM '/home/ubuntu/data/comments4.csv';
