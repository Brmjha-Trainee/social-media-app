import React , {Component} from 'react'
import '../style/tweetPage.css'
import Tweet from './Tweet'
import NewTweet from './NewTweet'
import {
    useParams
  } from "react-router-dom";


function TweetPage (props) { 

        let  {id}  = useParams();
        
        const {tweets} = props
        const tweet = tweets[id]
        return (
            <div className='tweet-page'>
                <Tweet 
                tweet={tweet} 
                author = {props.getAuthorTweet(tweet.author)} 
                checkLike= {props.isLiked } 
                handleLike = {props.toggleLike}  
                key ={tweet.id} />

               {tweet.replies.map((rep) => {
               const replay =tweets[rep]
                   return (
                   <div className='tweet-repaly'>
                       <div className='replay-to-text'> Reply to @ {tweet.author} </div>
                        <Tweet 
                            tweet={replay} 
                            author = {props.getAuthorTweet(replay.author)} 
                            checkLike= {props.isLiked } 
                            handleLike = {props.toggleLike}  
                            key ={replay.id} />

                    </div> )
               
               })}
            </div>
        )
}

export default TweetPage