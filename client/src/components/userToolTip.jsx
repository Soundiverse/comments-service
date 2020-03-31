import React from 'react';

class UserToolTip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  handleMouseEnter() {
    this.setState({
      visible: true,
    });
  }

  handleMouseLeave() {
    this.setState({
      visible: false,
    });
  }

  render() {
    return (
      <div>
        <span className="CM-tool-tip" onMouseLeave={this.handleMouseLeave} >
          {this.state.visible &&
            <span className="CM-tool-tip-bubble CM-tool-tip-bottom" >
              <div>
                <img className="CM-tool-tip-profile-pic" src={this.props.user.image} alt="" />
                <div className="CM-tool-tip-user">{this.props.user.name}</div>
                <div className="CM-tool-tip-followers">{this.props.user.followers}</div>
                <div className="CM-tool-tip-location">{this.props.user.location}</div>
                <button className="CM-tool-tip-follow-btn">follow</button>
              </div>
            </span>
          }
          <span onMouseOver={this.handleMouseEnter}>
            {this.props.children}
          </span>
        </span>
      </div>
    );
  }
}

export default UserToolTip;
