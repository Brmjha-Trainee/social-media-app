import '../style/App.css'
import React , {Component } from 'react'
import { getInitialData } from '../utils/api'
import loading from '../img/loading.gif'
import nextId from "react-id-generator"
import {Switch, Route , Redirect} from 'react-router-dom'
import TimeLine from './TimeLine'
import TweetPage from './TweetPage'
import Signin from './Signin'



class App extends Component {
  // first get the users  and tweets

    state = {
      tweets :{},
      users:{},
      Authed_ID: 'tylermcginnis',
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

  handAuthentication  = (username,passward) => {
    const {users} = this.state
    if (typeof(users[username]) == 'undefined' ){
      return false
    } else if(!(users[username].pass === passward)){
      return false
    } else {
      this.setState({
        Authed_ID:username
      })
      return true

    }
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
  
  addTweet = (text,tweetID = null) => {
    const { Authed_ID} = this.state
    const newTweets = this.state.tweets
    const id = nextId()
    newTweets[id] = {
      id: id,
      text: text,
      author: Authed_ID,
      likes: [],
      replies: [],
      replyingTo:tweetID,
  } 
  if(tweetID){
    newTweets[tweetID].replies = [...newTweets[tweetID].replies, id]
  }
    this.setState({
      tweets: newTweets
    })
  }

  render() {
    const tweets = Object.keys(this.state.tweets).map((key) => { return  this.state.tweets[key]; }).slice(0).reverse()
    const users = Object.keys(this.state.users).map((key) => { return  this.state.users [key]; })
    const author = this.state.users[this.state.Authed_ID]
    return (
      // loading 
        <div className="App">
          {tweets.length > 0 && users.length>0 ? 
            <Switch>
              <Route 
              exact path="/"      
              render={() => 
                <Signin handAuthentication = {this.handAuthentication} />
        } />
            <Route 
              exact path="/timeLine"      
              render={() => 
              <TimeLine tweets = {tweets} 
                author = {author} 
                isLiked={this.isLiked} 
                getAuthorTweet={this.getAuthorTweet}
                toggleLike = {this.toggleLike}
                addTweet ={this.addTweet}
                 />} />
            <Route 
              exact path="/tweet/:id"  
              render={() => <TweetPage 
                tweets = {this.state.tweets}
                author = {author} 
                isLiked={this.isLiked} 
                getAuthorTweet={this.getAuthorTweet}
                toggleLike = {this.toggleLike}
                addTweet ={this.addTweet}
                 />} />
          </Switch>
          : 
              <div className='loading-image'>
                <img src={loading} />
              </div> 
          
           }
       </div> 

  
      
      
    
  );

}}

export default App;
