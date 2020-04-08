USE soundiverse;

COPY comments_by_song (id, song_id, comment_id, created_at, comment, user_name, location, followers, pic_url) FROM '/Users/rodrigosanchezgaos/repos/sdc/comments-profile/db/cassandra/comments1.csv';
COPY comments_by_song (id, song_id, comment_id, created_at, comment, user_name, location, followers, pic_url) FROM '/Users/rodrigosanchezgaos/repos/sdc/comments-profile/db/cassandra/comments2.csv';

-- INSERT INTO comments_by_song (id, song_id, comment_id, created_at, comment, user_name, location, followers, pic_url) 
-- VALUES (1, 100, 1, 78798111, 'First Comment', 'John Lennon', 'San Francisco', 10, 'amazonpicurl.com');

-- INSERT INTO comments_by_song (id, song_id, comment_id, created_at, comment, user_name, location, followers, pic_url) 
-- VALUES (2, 200, 2, 78798112, '2nd comment', 'Mike Penn', 'San Francisco', 0, 'amazonpicurl.com');

-- INSERT INTO comments_by_song (id, song_id, comment_id, created_at, comment, user_name, location, followers, pic_url) 
-- VALUES (3, 300, 3, 78798122, 'Third Comment', 'Dude99', 'San Francisco', 520, 'amazonpicurl.com');

-- INSERT INTO comments_by_song (id, song_id, comment_id, created_at, comment, user_name, location, followers, pic_url) 
-- VALUES (4, 100, 4, 78798123, '2nd on same song', 'John5', 'San Francisco', 10, 'amazonpicurl.com');

-- INSERT INTO comments_by_song (id, song_id, comment_id, created_at, comment, user_name, location, followers, pic_url) 
-- VALUES (5, 200, 5, 78798133, 'same song 200', 'mLennon', 'San Francisco', 1, 'amazonpicurl.com');

-- INSERT INTO comments_by_song (id, song_id, comment_id, created_at, comment, user_name, location, followers, pic_url) 
-- VALUES (6, 200, 5, 78798145, 'first reply', 'David', 'San Francisco', 50, 'amazonpicurl.com');

-- INSERT INTO comments_by_song (id, song_id, comment_id, created_at, comment, user_name, location, followers, pic_url) 
-- VALUES (7, 400, 7, 78798155, 'forth Comment', 'David Lennon', 'San Francisco', 60, 'amazonpicurl.com');

-- INSERT INTO comments_by_song (id, song_id, comment_id, created_at, comment, user_name, location, followers, pic_url) 
-- VALUES (8, 200, 5, 78798160, 'second reply', 'David', 'San Francisco', 50, 'amazonpicurl.com');

-- INSERT INTO comments_by_song (id, song_id, comment_id, created_at, comment, user_name, location, followers, pic_url) 
-- VALUES (9, 700, 9, 78798170, 'fifth Comment', 'Pat Lennon', 'San Francisco', 1, 'amazonpicurl.com');