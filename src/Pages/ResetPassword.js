import React, {useEffect} from "react"
import {ReactComponent as Logo} from '../assets/logo.svg'

function ResetPassword() {

    useEffect(() => document.body.classList.add('form-membership'), []);

    return (
        <div className="form-wrapper">
            <div className="logo">
                <Logo/>
            </div>
            <h5>Reset password</h5>
            <form>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Username or email" required autoFocus/>
                </div>
                <button className="btn btn-primary btn-block">Submit</button>
                <hr/>
                <p className="text-muted">Take a different action.</p>
                <a href="/sign-up" className="btn btn-sm btn-outline-light mr-1">Register now!</a>
                or
                <a href="/sign-in" className="btn btn-sm btn-outline-light ml-1">Login!</a>
            </form>
        </div>
    )
}

export default ResetPassword
