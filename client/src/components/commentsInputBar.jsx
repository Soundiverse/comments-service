import React from 'react';

class CommentsInputBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    const value = event.target.value;
    this.setState({
      input: value,
    })
  }

  handleSubmit(event) {
    this.props.addComment(this.state.input);
    event.preventDefault();
    this.setState({
      input: '',
    })
  }

  render() {
    return (
      <div className="CM-comments-input-bar">
        <form onSubmit={this.handleSubmit}>
          <input className="CM-input-bar" type="text" placeholder="Write a comment" value={this.state.input} onChange={this.handleChange} />
        </form>
      </div>
    );
  }
}

export default CommentsInputBar;
