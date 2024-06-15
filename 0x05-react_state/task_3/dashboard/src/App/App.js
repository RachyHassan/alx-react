import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import PropTypes from 'prop-types';
import { getLatestNotification } from '../utils/utils';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import { StyleSheet, css } from 'aphrodite';


class App extends React.Component {
  state = {
    listCourses: [
      {id: 1, name: 'ES6', credit: 60},
      {id: 2, name: 'Webpack', credit: 20},
      {id: 3, name: 'React', credit:40}
    ],
    listNotifications: [
      {id: 1, type: 'default', value: 'New course available'},
      {id: 2, type: 'urgent', value: 'New resume available'},
      {id: 3, type: 'urgent', html: getLatestNotification()}
    ]
  }

  constructor(props) {
    super(props);
    this.isLoggedIn = props.isLoggedIn;
    this.logOut = props.logOut;
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.state = {
      displayDrawer: false,
      user: defaultUser,
      logOut: this.logOut,
    };

    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
  }

  handleDisplayDrawer() {
    this.setState({ displayDrawer: true});
  }

  handleHideDrawer() {
    this.setState({ displayDrawer: false});
  }

  componentDidMount() {
    if (typeof window !== 'undefined'){
      window.addEventListener('keydown', this.handleKeyDown);
    }
  }

  componentWillUnmount() {
    if (typeof window !== 'undefined'){
      window.removeEventListener('keydown', this.handleKeyDown);
    }
  }
  
  handleKeyDown(event) {
    event.preventDefault();
    if(event.key === 'h' && event.ctrlKey) {
      alert('Logging you out');
      this.logOut();
    }
  }

    logIn(email, password) {
      this.setState({
        user: {
          email,
          password,
          isLoggedIn: true,
        },
      });
    }
  
    logOut() {
      this.setState({
        user: defaultUser,
      });
    }

  render() {
    const { user, logOut } = this.state;
    return (
      <React.Fragment>
        <AppContext.Provider value={{ user, logOut }}>
        <Notifications displayDrawer={this.state.displayDrawer} />
        <Header />
        {user.isLoggedIn ? <CourseList /> : <Login logIn={this.logIn} />}
      </AppContext.Provider>
        <Notifications listNotifications={this.state.listNotifications}
        displayDrawer={this.state.displayDrawer}
        handleDisplayDrawer={this.state.handleDisplayDrawer}
        handleHideDrawer={this.state.handleHideDrawer}
        />
        <div className={css(styles.App)}>
          <Header />
          {this.props.isLoggedIn ?
            <BodySectionWithMarginBottom title="Course list"><CourseList listCourses={this.state.listCourses}/></BodySectionWithMarginBottom>
          : 
            <BodySectionWithMarginBottom title="Log in to continue"><Login /></BodySectionWithMarginBottom>
          }
          <BodySection title="News from the School">
            <p>
              The poems of a poet are like the diary of a girl, they may look like lines, but hidden messages lie within
            </p>
          </BodySection>
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  App: {
    margin: '0 auto',
    padding: '2px 8px',
    minHeight: '100%',
  }
})

App.defaultProps = {
  isLoggedIn: false,
  logOut() {
    return;
  }
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};

export default App;