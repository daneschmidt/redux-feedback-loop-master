import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

//PAGES
import Comments from '../pages/Comments/Comments';
import Feeling from '../pages/Feeling/Feeling';
import Understanding from '../pages/Understanding/Understanding';
import Supported from '../pages/Supported/Supported';
import Submit from '../pages/Submit/Submit';

class App extends Component {

  state = {
    feedBack: [],
    enteredFeedBack: {
      feeling: '',
      understanding: '',
      support: '',
      comments: '',
      flagged: '',
      date: '',
    }
  }

  componentDidMount() {
    this.getFeedBack();
  }

  getFeedBack = () => {
    axios({
      method: 'GET',
      url: '/get_feedback',
    })
      .then((response) => {
        this.setState({
          feedBack: response.data
        }, () => {
          console.log(this.state);
        });
      })
      .catch((err) => {
        console.log(err);
      })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Feedback!</h1>
            <h4><i>Don't forget it!</i></h4>
          </header>
          <br />

          <Route path="/" exact component={Feeling} />
          <Route path="/understanding" component={Understanding} />
          <Route path="/supported" component={Supported} />
          <Route path="/comments" component={Comments} />
          <Route path="/submit" component={Submit} />

        </div>
      </Router>
    );
  }
}


export default connect()(App);
