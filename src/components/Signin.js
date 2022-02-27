import React , {Component} from 'react'
import '../style/signin.css'
import avatar from '../img/avatar.png'
import {Redirect} from 'react-router-dom'

class Signin extends Component {
    state = {
        username:'',
        pass:'',
        message: false,
        redirect:false
    }
    handleSubmit =  (e) => {
        e.preventDefault();
        const {username,pass} = this.state
        if(!this.props.handAuthentication(username,pass)) {
            this.setState({
                message: true
            })
        }  else {
            this.setState({
                redirect:true
            })
        }   
    }

    handleChange = (e,input) => {
        const text = e.target.value;
        if (input === 'userName'){
            this.setState (()=> ({
                username:text
            }))
        } else {
            this.setState (()=> ({
                pass:text
            }))
        }
        
    }
    render(){
        const messageStyle ={
            display:this.state.message ? 'block' :'none'
        }
        if(this.state.redirect){
           return <Redirect to='/timeLine' />;
        } else {
        return(
            <div> 
                <div className='signin-cont'>
                    <div className='signin-header'>
                        <h1>Log In</h1>
                        <img src={avatar} />
                    </div>
                    <form className='sigin-form'  onSubmit={(e)=> this.handleSubmit(e) }> 
                        <p className='message' style={messageStyle} >  Sorry, you entered an invalid username or password. Please try again</p>
                        <div className='username'>
                            <label htmlFor = 'user-name'>Username</label>
                            <input type='text' htmlFor = 'user-name' value={this.state.username}  onChange= {(e) => this.handleChange(e,'userName')}/>
                        </div>
                        <div className='passward'>
                            <label htmlFor ='passward'>Password</label>
                            <input type= 'password' name="password" htmlFor='passward' value={this.state.pass}  onChange= {(e) => this.handleChange(e,'pass')} />
                        </div>
                        <button className ='btn' type='submit' >
                            sigin
                        </button>
                    </form>
                </div>
            </div> 
        )}
    }
}

export default Signin