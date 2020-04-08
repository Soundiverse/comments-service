const fs = require('fs');
const faker = require('faker');
const csvWriter = require('csv-write-stream');

const end = () => {
  console.log('All files written!');
  return;
};

const writer = csvWriter();
let counter = 0;
const userGen = () => {
  writer.pipe(fs.createWriteStream('users.csv'));
  for (let i = 0; i < 50; i++) {	
    for (let j = 0; j < 100000; j++) {
      counter++;
      writer.write({
        id: counter,
        name: faker.name.findName(),
        location: faker.address.city(),
        followers: Math.floor(Math.random() * Math.floor(1200)),
        pic_url: faker.image.avatar(),
      });
    }
    let message = (i < 10) ? `${(i + 1)}00 K users done!` : `${(i + 1) / 10}M users done!`;
    console.log(message);
  }
  writer.end();
  end();
};

userGen();
