import '../style/App.css'
import React , {Component } from 'react'
import { getInitialData } from '../utils/api';
import Tweet from './Tweet';
import loading from "../img/loading.gif";

class App extends Component {
  // first get the users  and tweets

    state = {
      tweets :[],
      users:[],
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
     return  this.state.users.find((user) => user.id === id )
  }
  

  render() {
    return (
      // loading 
        <div className="App">
          {this.state.tweets.length > 0 && this.state.users.length>0 ? 
              <div className="tweets-continer"> 


                  {
                  this.state.tweets.map((tweet) => 
                  <Tweet tweet={tweet} author = {this.getAuthorTweet(tweet.author)} /> )
                   }
              </div>
          : 
              <div className='loading-image'>
                <img src={loading} />
              </div> 
          
           }
       </div> 

  
      
      
    
  );

}}

export default App;
