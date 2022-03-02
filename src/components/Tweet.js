import React,{ Component } from "react"
import '../style/tweet.css'
import { RiHeart3Fill } from 'react-icons/ri'
import { RiHeart3Line } from 'react-icons/ri'
import { BsReply } from 'react-icons/bs'
import {Link } from 'react-router-dom'



class Tweet extends Component {
    stat = {
        displayReplay:true
    }
    
    render() {
        const tweet = this.props.tweet
        const author =this.props.author
        const displayReplay = this.state
        return (
            <div className="tweet">
                <div className="profile-image">
                    <img src={author.avatarURL} />
                </div>
                    <div className="tweet-body">
                    <div className="tweet-header">
                        <div className="user-name"> { author.name} <span className="user-id"> @{author.id } </span></div>
                    </div>
                    
                    <Link to={`/tweet/${tweet.id}`}>
                    <div className="tweet-text"> {tweet.text} </div>
                    </Link>
                    
                    <div className="tweet-react-icons">  
                    {/* Like icon  */}
                        <div className="like-icons" onClick={() => this.props.handleLike(tweet.id)} >
                            {this.props.checkLike(tweet) ? <RiHeart3Fill size={20} color ="#be3c16" /> :<RiHeart3Line size={20} color ="#545454" />}
                        </div>
                     <span className="like-number"> {tweet.likes.length} </span>

                    {/* replay icon  */}
                    
                        <div className="replay">
                            <BsReply   size={25} color= { displayReplay ? "#04db85" : "#545454"  } /> <span className="replay-number"> {tweet.replies.length} </span>  
                        </div>

                   
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Tweet;