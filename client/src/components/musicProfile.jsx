import React from 'react';
import axios from 'axios';
import albumProfile from '../images/profile-album-image.jpg';
import trackIcon from '../images/tracks-icon.png';
import followersIcon from '../images/followers-icon.png';

class MusicProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      followers: 0,
      tracks: 0,
    };
    this.getTrackedInfo = this.getTrackedInfo.bind(this);
    this.alertUser = this.alertUser.bind(this);
  }

  componentDidMount() {
    this.getTrackedInfo();
  }

  getTrackedInfo() {
    axios.get('/api/tracker')
      .then((response) => {
        console.log('grabbing tracker info');
        this.setState({
          followers: response.data[0].plays,
          tracks: response.data[0].tracks,
        });
      })
      .catch((error) => {
        console.log(error, 'unable to grab tracker info');
      });
  }

  alertUser() {
    alert('Please log in first');
  }

  render() {
    return (
      <div className="CM-music-profile">
        <span className="CM-musicProfile-left">
          <div>
            <img className="CM-profile-album-image" src="https://theholybucket.s3-us-west-1.amazonaws.com/projectaudibly/album-cover.jpg" alt="album-profile" />
          </div>
          <div>Pink Floyd</div>
          <div>
            <span>
              <img className="CM-follower-icon" src="https://theholybucket.s3-us-west-1.amazonaws.com/projectaudibly/followers-icon.png" alt="" />{this.state.followers}
            </span>
            <span>
              <img className="CM-tracks-icon" src="https://theholybucket.s3-us-west-1.amazonaws.com/projectaudibly/music-notes.png" alt="" /> {this.state.tracks}
            </span>
          </div>
          <button  type="button" onClick={this.alertUser} >follow</button>
        </span>
        <span className="CM-musicProfile-right">
          <div>
            <strong>Released By:</strong>
            <div>ATO Records</div>
          </div>
          <div>
            <strong>Released Date:</strong>
            <div>January 24, 2018</div>
          </div>
          <div>
            <strong>P-Line:</strong>
            <div>℗ 2017 Flightless Records, under exclusive license to ATO Records, LLC.</div>
          </div>
          <div>
            <strong>C-Line:</strong>
            <div>© 2017 2017 Flightless Records, under exclusive license to ATO Records, LLC.</div>
          </div>
        </span>
      </div>
    );
  }
}



export default MusicProfile;
