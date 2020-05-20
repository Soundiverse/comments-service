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
  return Math.floor(Math.random() * (max - min)) + min; 
}

let seconds = 0;
let dateCounter = 1586920100;

const writer = csvWriter();
const commentGen = () => {
  writer.pipe(fs.createWriteStream(`comments0.csv`));
  for (let i = 0; i < 40; i++) {	
    for (let j = 0; j < 100000; j++) {
      seconds++;
      if (seconds >= 6) {
        dateCounter++;
        seconds = 0;
      }
      writer.write({
        id: faker.random.uuid(),
        song_id: getRandomInt(9000000, 10000000),
        comment_ts: dateCounter,
        created_ts: dateCounter,
        comment: faker.lorem.sentence(),
        user_name: faker.name.findName(),
        location: faker.address.city(),
        followers: Math.floor(Math.random() * Math.floor(1200)),
        pic_url: faker.image.avatar(),
      });
    }
    let message = (i < 9) ? `${i + 1}00K comments done!` : `${(i + 1) / 10} Million comments done!`;
    console.log(message);
  }
  writer.end();
  end();
};

commentGen();
