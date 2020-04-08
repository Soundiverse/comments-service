const fs = require('fs');
const faker = require('faker');
const csvWriter = require('csv-write-stream');

const end = () => {
  console.log('All files written!');
  return;
};

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

const writer = csvWriter();
let counter = 0;
const songsGen = () => {
  writer.pipe(fs.createWriteStream('songs.csv'));
  for (let i = 0; i < 100; i++) {	
    for (let j = 0; j < 100000; j++) {
      counter++;
      writer.write({
        id: counter,
        name: faker.lorem.word(),
        plays: Math.floor(Math.random() * Math.floor(24050)),
        likes: Math.floor(Math.random() * Math.floor(1240)),
        reposts: Math.floor(Math.random() * Math.floor(2100)),
        user_id: getRandomInt(1, 5000000),
      });
    }
    let message = (i < 10) ? `${(i + 1)}00 K songs done!` : `${((i + 1) / 10)}M songs done!`;
    console.log(message);
  }
  writer.end();
  end();
};

songsGen();
