import React, { Component } from 'react'

export default class Login extends Component {
    render(){
        return(
            <div>
                <form>
                    <div>
                        <input type="text" name="username" placeholder="Username"></input>
                        <label htmlFor="username">Username</label>
                    </div>
                    <div>
                        <input type="password" name="password" placeholder="Password"></input>
                        <label htmlFor="password">Password</label>
                    </div>
                    <div>
                        <input type="submit" value="Login"></input>
                    </div>
                </form>
            </div>
        )
    }
}