import React, {useEffect} from "react"
import {ReactComponent as Logo} from '../assets/logo.svg'

function SignUp() {

    useEffect(() => document.body.classList.add('form-membership'), []);

    return (
        <div className="form-wrapper">
            <div className="logo">
                <Logo/>
            </div>
            <h5>Create account</h5>
            <form>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Firstname" required autoFocus/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Lastname" required/>
                </div>
                <div className="form-group">
                    <input type="email" className="form-control" placeholder="Email" required/>
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" placeholder="Password" required/>
                </div>
                <button className="btn btn-primary btn-block">Register</button>
                <hr/>
                <p className="text-muted">Already have an account?</p>
                <a href="/sign-in" className="btn btn-outline-light btn-sm">Sign in!</a>
            </form>
        </div>
    )
}

export default SignUp
