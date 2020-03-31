import React from 'react';


class ReplyEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: null,
    };
    this.getTime = this.getTime.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(() => this.getTime(), 1000);
  }

  getTime() {
    const currentDate = new Date().getTime();
    let timePassed = currentDate - this.props.reply.time;
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
        <div className="CM-replyEntry">
          <img className="CM-profileImage2" src={this.props.reply.name[0].image} alt="" />
          <div className="CM-userName2">{this.props.reply.name[0].name}</div>
          <div className="CM-commentText2">{this.props.reply.text}</div>
          <div className="CM-time2">{this.state.time}</div>
        </div>
      </div>
    );
  }
}

export default ReplyEntry;
