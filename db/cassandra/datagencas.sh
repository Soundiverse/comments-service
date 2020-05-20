printf ">\n>>>>> Creating Cassandra DB and schema...\n"
cqlsh -f cassandra.sql 
#printf ">\n>>>>> Writing comments0.csv with first 14m entries...\n"
#node --max-old-space-size=10000 /Users/rodrigosanchezgaos/repos/sdc/comments-profile/db/cassandra/ca-seed-comments0.js
#printf ">\n>>>>> Writing comments1.csv with first 14m entries...\n"
#node --max-old-space-size=10000 /Users/rodrigosanchezgaos/repos/sdc/comments-profile/db/cassandra/ca-seed-comments1.js
#printf ">\n>>>>> Writing comments2.csv with next 14m entries...\n"
#node --max-old-space-size=10000 /Users/rodrigosanchezgaos/repos/sdc/comments-profile/db/cassandra/ca-seed-comments2.js
#printf ">\n>>>>>> Writing comments3.csv with next 14m entries...\n"
#node --max-old-space-size=10000 /Users/rodrigosanchezgaos/repos/sdc/comments-profile/db/cassandra/ca-seed-comments3.js
#printf ">\n>>>>>> Writing comments4.csv with final 14m entries...\n"
#node --max-old-space-size=10000 /Users/rodrigosanchezgaos/repos/sdc/comments-profile/db/cassandra/ca-seed-comments4.js
#printf ">\n>>>>>> CSV files for Cassandra written: 52M comments!!!\n"
printf ">\n>>>>>> Seeding first half of the DB from CSV Files 1 and 2...\n"
cqlsh -f seedCassandra1-2.sql
# printf ">\n>>>>>> Deleteing CSV files on first half...\n"
# rm comments1.csv
# rm comments2.csv
printf ">\n>>>>>> Seeding second half of the DB form CSV files 3 and 4...\n"
cqlsh -f seedCassandra3-4.sql
# printf ">\n>>>>>> Deleteing CSV files for second half...\n"
# rm comments1.csv
# rm comments2.csv
printf ">\n>>>>>> All Done\n"
