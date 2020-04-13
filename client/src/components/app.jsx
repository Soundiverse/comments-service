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
  return Math.floor(Math.random() * (max - min)) + min;
}

const random = getRandomInt(1, 10000000);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
    };
    this.getComments = this.getComments.bind(this);
    this.addComment = this.addComment.bind(this);
    this.addReply = this.addReply.bind(this);
  }

  componentDidMount() {
    this.getComments();
  }

  getComments() {
    axios.get(`/api/songs/${random}/comments`)
      .then((response) => {
        this.setState({ comments: response.data });
      })
      .catch((error) => {
        console.log(error, 'failed to retrieve list of commments');
      });
  }

  addComment(input) {
    let int_ts = Math.floor((new Date().getTime()) / 1000);
    const pic = 'https://s3.amazonaws.com/uifaces/faces/twitter/peejfancher/128.jpg';

    axios.post(`api/songs/${random}/comments`, {
      comment_ts: int_ts, created_ts: int_ts,
      comment: input, user_name: 'Guest', pic_url: pic, followers: 666, location: 'Mexico'
    })
      .then(() => {
        console.log('post request succeeded');
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
