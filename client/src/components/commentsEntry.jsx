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
    return (
      <div>
        <div className="CM-commentEntry">
          <UserToolTip user={this.props.comment.name[0]} >
            <img className="CM-profileImage" src={this.props.comment.name[0].image} alt='' />
          </UserToolTip>
          <div className="CM-userName">{this.props.comment.name[0].name}</div>
          <div className="CM-commentText">{this.props.comment.text}</div>
          <div className="CM-time">{this.state.time}</div>
          <input className="CM-reply-btn" type='submit' value='Reply' onClick={this.showReply} />
          {this.state.show ? <ReplyInputBar addReply={this.props.addReply} id={this.props.comment._id} /> : null}
          <div className='CM-reply-list'>
            <ReplyList replies={this.props.comment.reply} />
          </div>
        </div>
      </div>
    );
  }
}

export default CommentsEntry;
