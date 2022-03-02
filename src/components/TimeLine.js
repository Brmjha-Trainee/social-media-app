import React, {Component} from 'react'
import Tweet from './Tweet'
import NewTweet from './NewTweet'
import '../style/timeLine.css'



class TimeLine extends Component {

    render() {
        const {tweets,author}  =this.props
        return (   
            <div className='time-line'>
                    <header className='userinfo'>
                    <div className='user-avatar'> <img src={author.avatarURL} /> </div>
                    <div className='user-name'> {author.name} </div>
                    </header>
                    <NewTweet addTweet = {this.props.addTweet} />
                        <div className="tweets-continer"> 
                            {
                            tweets.map((tweet) => {
                            if(tweet.replyingTo === null) {
                             return <Tweet tweet={tweet} author = {this.props.getAuthorTweet(tweet.author)} checkLike= {this.props.isLiked } handleLike = {this.props.toggleLike}  key ={tweet.id} />  
                        }
                    })}
                    </div>
            </div>

        )
    }

}

export default TimeLine