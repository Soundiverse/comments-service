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


let counter = 0;
const writer = csvWriter();

const commentGen = () => {
  writer.pipe(fs.createWriteStream(`comments1.csv`));
  for (let i = 0; i < 140; i++) {	
    for (let j = 0; j < 100000; j++) {
      counter++;
      writer.write({
        id: counter,
        song_id: getRandomInt(1, 10000001),
        user_id: getRandomInt(1, 5000000),
        float_id: counter,
        created_at: getRandomInt(1576800000, 1585977015),
        comment: faker.lorem.sentence(),
      });
    }
    let message = (i < 10) ? `${(i + 1)}00 K comments done!` : `${((i + 1) / 10)}M comments done!`;
    console.log(message);
  }
  writer.end();
  end();
};

commentGen();
