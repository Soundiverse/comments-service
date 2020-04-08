printf ">\n>>>>> Creating Cassandra DB and schema...\n."
cqlsh -f cassandra.sql 
printf ">\n>>>>> Writing comments1.csv with first 14m entries..."
node --max-old-space-size=10000 /Users/rodrigosanchezgaos/repos/sdc/comments-profile/db/cassandra/ca-seed-comments1.js
printf ">\n>>>>> Writing comments2.csv with next 14m entries..."
node --max-old-space-size=10000 /Users/rodrigosanchezgaos/repos/sdc/comments-profile/db/cassandra/ca-seed-comments2.js
printf ">\n>>>>>> Writing comments3.csv with next 14m entries..."
node --max-old-space-size=10000 /Users/rodrigosanchezgaos/repos/sdc/comments-profile/db/cassandra/ca-seed-comments3.js
printf ">\n>>>>>> Writing comments4.csv with final 14m entries..."
node --max-old-space-size=10000 /Users/rodrigosanchezgaos/repos/sdc/comments-profile/db/cassandra/ca-seed-comments4.js
printf ">\n>>>>>> CSV files for Cassandra written: 52M comments!!!\n"
printf ">\n>>>>>> Seedingfirst half  DBs from CSV Files\n"
cqlsh -f seedCassandra1-2.sql
printf ">\n>>>>>> Deleteing CSV files on first half...\n"
rm comments1.csv
rm comments2.csv
cqlsh -f seedCassandra3-4.sql
printf ">\n>>>>>> All Done\n"
