import React, {Component} from 'react'
import '../style/newTweet.css'


class NewTweet extends Component {
    state = {
        text:''
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const text = this.state.text
        if(text !== ''){
        this.props.addTweet(text)
        this.setState({text:''})
        }
    }

    handleChange = (e) => {
        const text = e.target.value;
        this.setState (()=> ({
            text
        }))
    }
    render() {
        const text = this.state.text
        const tweetLeft = 280 - text.length

        return (
            <div className='new-tweet-comp'>
            <h3 className='new-tweet-text' > Compose new Tweet </h3> 
            <form className='new-tweet' onSubmit={(e)=> this.handleSubmit(e) }>
                <textarea 
                 placeholder="what't happening?"
                 value={text}
                 onChange= {this.handleChange}
                 maxLength = {280}
                 className='textarea'
                />
                {tweetLeft <= 100 && (
                       <div className='tweet-length'>
                           {tweetLeft}
                       </div>
                   )}
                
                <button className = 'submit-btn' type='submit' disabled={''}>
                    Tweet
                </button>
            </form>
         </div>
        )
    }
}

export default NewTweet