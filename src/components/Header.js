import { signOut } from "firebase/auth";
import { auth } from "../utilities/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removerUser } from "../utilities/userSlice";
import { netflixLogo } from "../constants";

const Header = () => {
    const navigate = useNavigate();
    const user = useSelector(store => store.user);
    const dispatch = useDispatch();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { displayName, email, uid, accessToken } = user;
                dispatch(addUser({ displayName, email, uid, accessToken }));
                navigate("/browse")
            } else {
                dispatch(removerUser());
                navigate("/")
            }
        });

        return unsubscribe
        // eslint-disable-next-line
    }, []);
    const handleSignOut = () => {
        signOut(auth).then(() => { }).catch((error) => {
            console.log("An Error Occured")
        });
    }

    return <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 flex w-full justify-between">
        <img className="w-44" src={netflixLogo} alt="Netflix logo" />
        {user && <div className="font-extrabold text-white flex justify-evenly items-center w-[15%]">
            <h3>{user.displayName}</h3>
            <button className="bg-red-600 p-2" onClick={handleSignOut}>Sign Out</button>
        </div>}
    </div>
}

export default Header;