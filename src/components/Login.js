import { useRef, useState } from "react"
import Header from "./Header"
import { validator } from "../utilities/validator";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile  } from "firebase/auth";
import {auth} from "../utilities/firebase"
import { useDispatch } from "react-redux";
import { addUser } from "../utilities/userSlice";
import { netflixLoginBackgroundImage } from "../constants";

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const dispatch = useDispatch()

    const email = useRef("");
    const displayName = useRef("");
    const password = useRef("");


    const handleSignIn = () => {
        setIsSignInForm(!isSignInForm);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errorMsg = validator(email.current.value, password.current.value);
        if(errorMessage) {
            setErrorMessage(errorMsg);
            return;
        };

        if(isSignInForm) {
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then(() => {})
                .catch((error) => {
                    setErrorMessage(`${error.code}, ${error.message}`);
                });
        } else {
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    updateProfile(user, {displayName: displayName.current.value}).then(() => {
                        const {displayName, email, uid, accessToken} = auth.currentUser;
                        dispatch(addUser({displayName, email, uid, accessToken}))
                    })
                })
                .catch((error) => {
                    setErrorMessage(`${error.code}, ${error.message}`);
                });
        }
    }

    return <div>
        <Header />
        <div className="absolute">
            <img className="bg-cover" src={netflixLoginBackgroundImage} alt="login coverpage" />
        </div>
        <form className="w-3/12 absolute bg-black p-12 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
            <h1 className="font-bold text-3xl py-4">Sign {isSignInForm ? "In" : "Up"}</h1>
            <input type="text" ref={email} placeholder="Email Address" className="p-2 my-4 w-full bg-gray-700" />
            {!isSignInForm && <input type="text" ref={displayName} placeholder="Full Name" className="p-2 my-4 w-full bg-gray-700" />}
            <input type="password" ref={password} placeholder="Password" className="p-2 my-4 w-full bg-gray-700" />
            <p className="text-center text-red-700">{errorMessage}</p>
            <button className="p-4 my-6 bg-red-700 w-full rounded-lg" onClick={handleSubmit} >Sign {isSignInForm ? "In" : "Up"}</button>
            <p className="text-center cursor-pointer" onClick={handleSignIn}>{isSignInForm ? "New to Netflix? Sign Up Now" : "Return to Login"}</p>
        </form>
    </div>
}

export default Login