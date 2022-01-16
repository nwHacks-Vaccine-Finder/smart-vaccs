import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleOAuth extends React.Component {
  componentDidMount() {
    window.gapi.load('auth2', () => {
      window.gapi.auth2
        .init({
          clientId:
            '656395246468-6egfg5obl2od4o9npdgv6mva9jrh7qgs.apps.googleusercontent.com',
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
      return <button onClick={this.onSignOutClick}>Sign Out</button>;
    } else {
      return (
        <button onClick={this.onSignInClick}>
          <img src={'./google_sign_in.png'} alt="signIn" />
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
