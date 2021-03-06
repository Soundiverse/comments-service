import React from 'react';
import ReplyInputBar from './replyInputBar.jsx';
import ReplyList from './replyList.jsx';
import UserToolTip from './userToolTip.jsx';


class CommentsEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      time: 0,
    };
    this.showReply = this.showReply.bind(this);
    this.getTime = this.getTime.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(() => this.getTime(), 1000);
  }

  showReply() {
    this.setState({
      show: !this.state.show,
    });
  }

  getTime() {
    const currentDate = new Date().getTime();
    let timePassed = currentDate - this.props.comment.time;
    timePassed = Math.floor(timePassed / 1000);
    if (timePassed >= 1 && timePassed < 60) {
      this.setState({
        time: `${timePassed} seconds ago`,
      });
    }
    if (timePassed >= 60 && timePassed < 3600) {
      timePassed = Math.floor(timePassed / 60);
      this.setState({
        time: `${timePassed} minutes ago`,
      });
    }
    if (timePassed >= 3600 && timePassed < 86400) {
      timePassed = Math.floor(timePassed / 3600);
      this.setState({
        time: `${timePassed} hours ago`,
      });
    }
    if (timePassed >= 86400 && timePassed < 2592000) {
      timePassed = Math.floor(timePassed / 86400);
      this.setState({
        time: `${timePassed} days ago`,
      });
    }
  }

  render() {
    const { user_name, location, pic_url, followers, comment, } = this.props.comment;
    const userInfo = { user_name, location, pic_url, followers };
    return (
      <div>
        <div className="CM-commentEntry">
          <UserToolTip user={userInfo} >
            <img className="CM-profileImage" src={pic_url} alt='' />
          </UserToolTip>
          <div className="CM-userName">{user_name}</div>
          <div className="CM-commentText">{comment}</div>
          <div className="CM-time">{this.state.time}</div>
          <input className="CM-reply-btn" type='submit' value='Reply' onClick={this.showReply} />
          {this.state.show ? <ReplyInputBar addReply={this.props.addReply} id={this.props.comment.id} /> : null}
          <div className='CM-reply-list'>
            {/* <ReplyList replies={this.props.comment.replies} /> */}
          </div>
        </div>
      </div>
    );
  }
}

export default CommentsEntry;
