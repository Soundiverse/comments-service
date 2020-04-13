import React from 'react';
import axios from 'axios';
// import CSSModules from 'react-css-modules';
import CommentsList from './commentsList.jsx';
import CommentsInputBar from './commentsInputBar.jsx'
import Tracker from './tracker.jsx';
import MusicProfile from './musicProfile.jsx'
// import styles from './app.css';

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

let random = getRandomInt(1, 10000000);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
    };
    this.getComments = this.getComments.bind(this);
    this.addComment = this.addComment.bind(this);
    this.getReplies = this.getReplies.bind(this);
    this.addReply = this.addReply.bind(this);
  }

  componentDidMount() {
    this.getComments();
  }

  getComments() {
    axios.get(`/api/songs/${random}/comments`)
      .then((response) => {
        // console.log(response.data);
        this.setState({ comments: response.data });
        console.log('Success! Retrieved data from server');
      })
      .catch((error) => {
        console.log(error, 'failed to retrieve list of commments');
      });
  }

  getReplies() {
    axios.get('/api/reply')
      .then((response) => {
        console.log(response.data);
        this.setState({ comments: response.data });
        console.log('Success! Retrieved data from server');
      })
      .catch((error) => {
        console.log(error, 'failed to retrieve list of commments');
      }); 
  }

  addComment(input) {
    let counter = 56000009;
    const pic = 'https://s3.amazonaws.com/uifaces/faces/twitter/peejfancher/128.jpg';
    console.log(`the comment ${input} was posted`)
    axios.post('api/songs/80901/comments', {
      id: counter, song_id: random, comment_id: counter, created_at: Math.floor((new Date().getTime()) / 1000),
      comment: input, user_name: 'Guest', pic_url: pic, followers: 666, location: 'Mexico',
    })
      .then(() => {
        console.log('post request succeeded')
        this.getComments();
      })
      .catch((error) => {
        console.log(error, 'failed to post comment')
      });
  }

  addReply(reply, id) {
    console.log(`the reply ${reply} has been posted`);
    axios.post('/api/reply', { reply, id })
      .then(() => {
        console.log('post request suceeeded');
        this.getReplies();
      })
      .catch((error) => {
        console.log(error, 'cannot post reply right now');
      });
  }

  render() {
    return (
      <div>
        <div className="CM-comments-app">
          <CommentsInputBar addComment={this.addComment} />
          <Tracker />
          <MusicProfile />
          <CommentsList addReply={this.addReply} comments={this.state.comments} />
        </div>
      </div>
    );
  }
}

export default App;
