import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

const authClientId = process.env.REACT_APP_GOOGLE_OAUTH2_CLIENT_ID;
class GoogleOAuth extends React.Component {
  componentDidMount() {
    window.gapi.load('auth2', () => {
      window.gapi.auth2
        .init({
          clientId: authClientId,
          scope: 'email',
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };

  onSignInClick = () => {
    this.auth.signIn();
    // .then(() => {
    //   window.location.reload();
    // });
  };
  onSignOutClick = () => {
    this.auth.signOut();
  };
  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <button onClick={this.onSignOutClick}>
          <img src={'./Sign_Out.png'} id="oauth-btn" alt="Sign Out"></img>
        </button>
      );
    } else {
      return (
        <button onClick={this.onSignInClick}>
          <img src={'./Sign_In.png'} id="oauth-btn" alt="signIn" />
        </button>
      );
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleOAuth);
