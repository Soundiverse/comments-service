psql -d commentsDB < schema.down.sql
echo "Creating csv files for PostgreSQL..."
echo "Writing users.csv with 1.5m entries..."
node --max-old-space-size=10000 /Users/rodrigosanchezgaos/repos/sdc/comments-profile/db/ps-seed-users.js
echo "Writing songs.csv with 10m entries..."
node --max-old-space-size=10000 /Users/rodrigosanchezgaos/repos/sdc/comments-profile/db/ps-seed-songs.js
echo "Writing comments1.csv with first 14m entries..."
node --max-old-space-size=10000 /Users/rodrigosanchezgaos/repos/sdc/comments-profile/db/ps-seed-comments1.js
echo "Writing comments1.csv with next 14m entries..."
node --max-old-space-size=10000 /Users/rodrigosanchezgaos/repos/sdc/comments-profile/db/ps-seed-comments2.js
echo ">>>>>> Writing comments1.csv with next 14m entries..."
node --max-old-space-size=10000 /Users/rodrigosanchezgaos/repos/sdc/comments-profile/db/ps-seed-comments3.js
echo ">>>>>> Writing comments1.csv with final 14m entries..."
node --max-old-space-size=10000 /Users/rodrigosanchezgaos/repos/sdc/comments-profile/db/ps-seed-comments4.js
echo ">>>>>> CSV files for PostgreSQL written: 1.5M users, 10M Songs and 56M comments!!!"

echo ">>>>>> Moving csv files to 'data' folder"
mv *.csv data

echo ">>>>>> Now here comes trouble:"
echo ">>>>>> Creating new psql db"
createdb soundiverse
echo ">>>>>> Creating schema for db"
psql -d soundiverse < schema.up.sql


echo ">>>>>> Seeding Users and Songs into DB..."
psql -d soundiverse < usersANDsongs.sql
echo ">>>>>> Seeding comments 1&2 into DB..."
psql -d soundiverse < comments1-4.sql
echo ">>>>>> All done! WOOOO!!! :) "




