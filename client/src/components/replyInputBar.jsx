import React from 'react';

class ReplyInputBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reply: '',
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(event) {
    this.setState({
      reply: event.target.value,
    });
  }

  handleSubmit(event) {
    this.props.addReply(this.state.reply, this.props.id);
    event.preventDefault();
    this.setState({
      reply: '',
    });
  }

  render() {
    return (
      <div className="CM-reply-input-bar">
        <form onSubmit={this.handleSubmit}>
          <input className="CM-reply-bar" placeholder="Write a reply" value={this.state.reply} onChange={this.handleInput} />
        </form>
      </div>
    );
  }
}

export default ReplyInputBar;
