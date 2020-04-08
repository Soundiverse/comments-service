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

let counter = 42000000;
let seconds = 0;
let dateCounter = 1583799999;
const writer = csvWriter();
const commentGen = () => {
  writer.pipe(fs.createWriteStream(`comments3.csv`));
  for (let i = 0; i < 140; i++) {	
    for (let j = 0; j < 100000; j++) {
      counter++;
      seconds++;
      if (seconds >= 6) {
        dateCounter++;
        seconds = 0;
      }
      writer.write({
        id: counter,
        song_id: getRandomInt(1, 10000001),
        comment_id: counter,
        created_at: dateCounter,
        comment: faker.lorem.sentence(),
        user_name: faker.name.findName(),
        location: faker.address.city(),
        followers: Math.floor(Math.random() * Math.floor(1200)),
        pic_url: faker.image.avatar(),
      });
    }
    let message = (i < 9) ? `${i + 1}00K comments done!` : `${(i + 1) / 10}Mliion comments done!`;
    console.log(message);
  }
  writer.end();
  end();
};

commentGen();
