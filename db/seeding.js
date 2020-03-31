const faker = require('faker');
const mongoose = require('mongoose');

const songIdGen = () => {
  const min = 1;
  const max = 100;
  return Math.floor(Math.random() * (max - min) + min);
};
const commentsCreater = () => {
  const commentsContainer = [];
  const replyNumberGen = () => (
    Math.floor(Math.random() * 3)
  );
  for (let i = 0; i < replyNumberGen(); i += 1) {
    const user = {
      name: faker.name.findName(),
      location: faker.address.city(),
      followers: faker.random.number({'min':10, 'max': 300}),
      image: faker.image.avatar(),
    };
    const comments = {
      name: user,
      text: faker.lorem.sentence(),
      time: faker.date.recent().getTime(),
    };
    commentsContainer.push(comments);
  }
  return commentsContainer;
};

const commentAndReplyCreator = () => {
  const container = [];
  for (let i = 0; i < 10; i += 1) {
    const user = {
      name: faker.name.findName(),
      location: faker.address.city(),
      followers: faker.random.number({'min':10, 'max': 300}),
      image: faker.image.avatar(),
    };
    const commentsAndReplies = {
      songId: songIdGen(),
      name: user,
      text: faker.lorem.sentence(),
      time: faker.date.recent().getTime(),
      reply: commentsCreater(),
    };
    container.push(commentsAndReplies);
  }
  return container;
};


const allComments = commentAndReplyCreator();


mongoose.connect('mongodb://172.17.0.2:27017/audiblyComments', { useNewUrlParser: true })
  .then(() => {
    console.log('Connection to Mongo Database established. What would you like to do today?');
  })
  .catch((err) => {
    console.log(err, 'We are unable to establish a connection with Mongo Database . . . Please try again.')
  });

const childUser = new mongoose.Schema({
  name: String,
  location: String,
  followers: Number,
  image: String,
});

const childReplies = new mongoose.Schema({
  name: [childUser],
  text: String,
  time: Number,
});

const myComments = mongoose.model('comments',
  new mongoose.Schema(
    {
      songId: Number,
      name: [childUser],
      text: String,
      time: Number,
      reply: [childReplies],
    },
  ));

myComments.insertMany(allComments);


const myTracker = mongoose.model('trackers',
  new mongoose.Schema(
    {
      plays: Number,
      likes: Number,
      reposts: Number,
      follows: Number,
      tracks: Number,
    },
  ));

const trackers = new myTracker({
  plays: faker.random.number({'min':10, 'max': 300}),
  likes: faker.random.number({'min':10, 'max': 300}),
  reposts: faker.random.number({'min':10, 'max': 300}),
  follows: faker.random.number({'min':10, 'max': 300}),
  tracks: faker.random.number({'min':10, 'max': 300}),
});

trackers.save((err) => {
  if (err) {
    console.log(err, 'could not seed trackers into db');
  } else {
    console.log('trackers seeded');
  }
});
