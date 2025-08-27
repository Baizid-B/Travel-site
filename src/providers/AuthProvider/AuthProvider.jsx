import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from "../../firebase/firebase.config";

export const AuthContext = createContext(null)
const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider()

    // signInUser/loginUser in the website-----
    const loginUser = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    // create a new user in the website------
    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    // currentUser loggOut in the website-----
    const userLoggedOut = () =>{
        return signOut(auth)
    }

    // password reset 
    const passwordReset = () =>{
        setLoading(true)
        return sendPasswordResetEmail(auth, email)
        // console.log =(sendPasswordResetEmail(auth, email))
    }

    // signin and register google--------
    const googleSignIn = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    // Checking whether the user is Acha or not-------
    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            console.log('currnet user', currentUser);
            setLoading(false)
        });
        return () =>{
            return unsubscribe();
        }
    }, [])


    const authInfo ={
        user,
        loading,
        createUser,
        loginUser,
        userLoggedOut,
        passwordReset,
        googleSignIn
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;