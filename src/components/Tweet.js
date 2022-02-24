import React,{ Component } from "react"
import '../style/tweet.css'
import { RiHeart3Fill } from 'react-icons/ri'
import { RiHeart3Line } from 'react-icons/ri'
import { BsReply } from 'react-icons/bs'



class Tweet extends Component {

    render() {
        const tweet = this.props.tweet
        const author =this.props.author
        return (
            <div className="tweet">
                <div className="profile-image">
                    <img src={author.avatarURL} />
                </div>
                <div className="tweet-body">
                    <div className="tweet-header">
                        <div className="user-name"> { author.name} <span className="user-id"> @{author.id } </span></div>
                        <div className="time">  </div>
                    </div>
                    <div className="tweet-text"> {tweet.text} </div>
                    <div className="tweet-react-icons" onClick={() => this.props.handleLike(tweet.id)}>  
                    {/* Like icon  */}
                    {this.props.checkLike(tweet) ? <RiHeart3Fill size={20} color ="#be3c16" /> :<RiHeart3Line size={20} color ="#545454" />}
                     <span className="like-number"> {tweet.likes.length} </span>
                    {/* replay icon  */} 
                    <BsReply   size={25} color="#545454" /> <span className="replay-number"> {tweet.replies.length} </span>  
                    </div>
                </div>
            </div>
        )
    }
}

export default Tweet;