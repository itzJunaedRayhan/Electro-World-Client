import React, { useContext, useState } from 'react';
import './Login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { Link, useHistory, useLocation } from 'react-router-dom';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './Firebase.config';
import { userContext } from '../../App';
// Initialize Firebase
if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}
const Login = () => {
    const GoogleProvider = new firebase.auth.GoogleAuthProvider();
    const [loggedInUser,setLoggedInUser] = useContext(userContext)
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    const [user, setUser] = useState({
        isSignIn: false,
        name: '',
        email: ''
    })

    //  Google Login Handle
    const handleGoogleLogIn = () =>{
        firebase.auth().signInWithPopup(GoogleProvider)
        .then((result) =>{  
            const data = result.user;
            console.log(data.email, 'name')
            const {displayName, email} = result.user;
            var UserData = {
                isSignIn : true, 
                name : displayName,
                email : email
            }
            setUser(UserData)
            setLoggedInUser(UserData)
            history.replace(from);
        }).catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
    }


   
    return (
        <div className="login">
            <Link to="/home">
                <h1>ElectroWorld</h1>
            </Link>
            <button onClick={handleGoogleLogIn} className="GoogleLogIn"><FontAwesomeIcon className="icon" icon={faGoogle} /> Login</button>
            
        </div>
    );
};

export default Login;