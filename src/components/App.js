import '../style/App.css'
import React , {Component } from 'react'
import { getInitialData } from '../utils/api';
import Tweet from './Tweet';
import loading from "../img/loading.gif";

class App extends Component {
  // first get the users  and tweets

    state = {
      tweets :{},
      users:{},
      Authed_ID: 'tylermcginnis' 
    };

  
  componentDidMount() {
    return getInitialData()
        .then(({users,tweets}) => {
          this.setState({
            tweets,
            users,
          })

        });
  }


  getAuthorTweet = (id) => {
     return  this.state.users[id]
  }
  
  isLiked = (tweet) =>{
    return tweet.likes.some((auth) => auth ===  this.state.Authed_ID )
    
  }

  toggleLike = (id) => {
    const  authedUser = this.state.Authed_ID 
    let likes = []
    console.log(this.state.tweets[id])
    if(this.isLiked(this.state.tweets[id])){
      likes = this.state.tweets[id].likes.filter((likedId) => likedId !== authedUser)
    } else {
      likes = [...this.state.tweets[id].likes, authedUser ]
    }
     
    const nweTweets = this.state.tweets
    nweTweets[id].likes = likes
    this.setState({
      tweet:nweTweets
    })
  }

  render() {
    const tweets = Object.keys(this.state.tweets).map((key) => { return  this.state.tweets[key]; })
    const users = Object.keys(this.state.users).map((key) => { return  this.state.users [key]; })
    return (
      // loading 
        <div className="App">
          {tweets.length > 0 && users.length>0 ? 
              <div className="tweets-continer"> 
                  {
                  tweets.map((tweet) => 
                  <Tweet tweet={tweet} author = {this.getAuthorTweet(tweet.author)} checkLike= {this.isLiked } handleLike = {this.toggleLike}  key ={tweet.id} /> )
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
