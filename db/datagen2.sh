psql -d commentsDB < schema.down.sql
printf "Creating csv files for PostgreSQL..."
printf ">\n>>>>> Writing users.csv with 1.5m entries..."
node --max-old-space-size=10000 /Users/rodrigosanchezgaos/repos/sdc/comments-profile/db/ps-seed-users.js
printf ">\n>>>>> Writing songs.csv with 10m entries..."
node --max-old-space-size=10000 /Users/rodrigosanchezgaos/repos/sdc/comments-profile/db/ps-seed-songs.js
printf ">\nWriting comments1.csv with first 14m entries..."
node --max-old-space-size=10000 /Users/rodrigosanchezgaos/repos/sdc/comments-profile/db/ps-seed-comments1.js
printf ">\n>>>>> Writing comments1.csv with next 14m entries..."
node --max-old-space-size=10000 /Users/rodrigosanchezgaos/repos/sdc/comments-profile/db/ps-seed-comments2.js
printf ">\n>>>>>> Writing comments1.csv with next 14m entries..."
node --max-old-space-size=10000 /Users/rodrigosanchezgaos/repos/sdc/comments-profile/db/ps-seed-comments3.js
printf ">\n>>>>>> Writing comments1.csv with final 14m entries..."
node --max-old-space-size=10000 /Users/rodrigosanchezgaos/repos/sdc/comments-profile/db/ps-seed-comments4.js
printf ">\n>>>>>> CSV files for PostgreSQL written: 1.5M users, 10M Songs and 56M comments!!!"

printf ">\n>>>>>> Moving csv files to 'data' folder"
mv *.csv data

printf ">\n>>>>>> Creating new psql db"
createdb soundiverse
printf ">\n>>>>>> Creating schema for db"
psql -d soundiverse < schema.up.sql


printf ">\n>>>>>> Seeding Users and Songs into DB..."
psql -d soundiverse < usersANDsongs.sql
printf ">\n>>>>>> Seeding comments 1-2 into DB..."
psql -d soundiverse < comments1-2.sql
# printf ">\n>>>>>> Seeding comments 3-4 into DB..."
# psql -d soundiverse < comments1-4.sql
printf ">\n>>>>>> All done! WOOOO!!! :) "




