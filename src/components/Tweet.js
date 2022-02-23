import React,{ Component } from "react"
import '../style/tweet.css'
import { RiHeart3Fill } from 'react-icons/ri'
import { RiHeart3Line } from 'react-icons/ri'
import { BsReply } from 'react-icons/bs'



class Tweet extends Component {

    render() {
        return (
            <div className="tweet">
                <div className="profile-image">
                    <img src="https://tylermcginnis.com/would-you-rather/sarah.jpg" />
                </div>
                <div className="tweet-body">
                    <div className="tweet-header">
                        <div className="user-name"> Sarah Drasner <span className="user-id"> @sarah_edo </span></div>
                        <div className="time"> 22 February </div>
                    </div>
                    <div className="tweet-text"> By the way, if you have a blog post sitting around and want to get some eyes on it, we take guest submissions! That's how I started. </div>
                    <div className="tweet-react-icons">  <RiHeart3Line size={20} color ="#545454" /> <span className="like-number"> 1 </span> <BsReply size={25} color="#545454" /> <span className="replay-number"> 1 </span>  </div>
                </div>
            </div>
        )
    }
}

export default Tweet;