import '../style/App.css'
import React , {Component } from 'react'
import { getInitialData } from '../utils/api';
import Tweet from './Tweet';


class App extends Component {
  // first get the users  and tweets

    state = {
      tweets: [],
      users : [],
    };

  
  componentDidMount() {
    return getInitialData()
        .then(({users,tweets}) => {
          this.setState({
            tweets : Object.keys(tweets).map((key) => {
                return tweets[key];
            }),
            users :Object.keys(users).map((key) => {
              return  users[key];
          })
          })

        });
  }

  getAuthorTweet = (id) => {
     console.log(this.state.users.find((user) => user.id = id ))
  }

  



  render() {
    
    return (
      
    <div className="App">
      <header className="App-header">
      </header>
        <Tweet tweet={this.state.tweets[0]}  />
    </div>
  );

}}

export default App;
