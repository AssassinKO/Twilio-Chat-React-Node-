import React, {useEffect, useState} from "react"
import axios from 'axios'
import {ReactComponent as Logo} from '../assets/logo.svg'


const ctrl = "b41f14acf862f590e9b36f500cb83f90"

const userUrl = "https://www.assodimi.it/admin/ext/list.php"
function SignIn() {

    const[value, handleValue] = useState({email: "", name: "", surname: ""});
    useEffect(() => document.body.classList.add('form-membership'), []);

    const handlechangeValue=(event, key)=> {
        if(key == "email") {
            handleValue({...value, email:event.target.value});
        }
		if(key == "name") {
            handleValue({...value, name:event.target.value});
        }
		if(key == "surname") {
            handleValue({...value, surname:event.target.value});
        }
		console.log(value);
    }
	const handleSignin=()=> {
        var config = {
            method: 'post',
            url: 'https://www.assodimi.it/admin/ext/user.php?Ctrl=b41f14acf862f590e9b36f500cb83f90&Email=andrea.sogliaghi@still.it&Name=andrea&Surname=sogliaghi',
            headers: { }
        };
        axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
          console.log(error);
        });

		// axios
        //     .post(`https://www.assodimi.it/admin/ext/user.php?Ctrl=${ctrl}&Email=${value.email}&Name=${value.name}&Surname=${value.surname}`)
        //     .then(response => {
        //         console.log(response);
        //     })
        //     .catch(error => {
        //         console.error('There was an error!', error);
        //     });
	}
    return (
        <div className="form-wrapper">
            <div className="logo">
                <Logo/>
            </div>
            <h5>Sign in</h5>
            <form>
                <div className="form-group">
                    <input type="text" name="email" onChange={(e)=> {handlechangeValue(e, "email")}} className="form-control" placeholder="Email"/>
                </div>
                <div className="form-group">
                    <input type="text" name="name" onChange={(e)=> {handlechangeValue(e, "name")}} className="form-control" placeholder="Name"/>
                </div>
                <div className="form-group">
                    <input type="text" name="surename" onChange={(e)=> {handlechangeValue(e, "surname")}} className="form-control" placeholder="Surename"/>
                </div>
                <div className="form-group d-flex justify-content-between">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1"/>
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>
                <button type="button" onClick={handleSignin} className="btn btn-primary btn-block">Sign in</button>
                <hr/>
                <p className="text-muted">Login with your social media account.</p>
                <ul className="list-inline">
                    <li className="list-inline-item">
                        <a href="/" className="btn btn-floating btn-facebook">
                            <i className="fa fa-facebook"></i>
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a href="/" className="btn btn-floating btn-twitter">
                            <i className="fa fa-twitter"></i>
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a href="/" className="btn btn-floating btn-dribbble">
                            <i className="fa fa-dribbble"></i>
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a href="/" className="btn btn-floating btn-linkedin">
                            <i className="fa fa-linkedin"></i>
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a href="/" className="btn btn-floating btn-google">
                            <i className="fa fa-google"></i>
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a href="/" className="btn btn-floating btn-behance">
                            <i className="fa fa-behance"></i>
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a href="/" className="btn btn-floating btn-instagram">
                            <i className="fa fa-instagram"></i>
                        </a>
                    </li>
                </ul>
                <hr/>
            </form>
        </div>
    )
}

export default SignIn
