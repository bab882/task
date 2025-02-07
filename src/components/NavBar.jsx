import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../context/userContext'
import { Link } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase-config'
import logo from '../assets/logo.png'

function NavBar() {
    const { toggleModals } = useContext(UserContext)
    const [currentUser, setCurrentUser] = useState(null)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
        });

        return () => unsubscribe();
    }, []);

    return (
        <div className="header p-3">
            <div className="d-flex justify-content-between align-content-center">
                <div className="content-logo">
                <Link to="/" className="logo">
                    <img src={logo} alt="logo" className="img img-fluid" />
                </Link>
                </div>
                <div className="d-flex justify-content-center align-content-center">
                    {!currentUser ? (
                        <>
                            <button 
                                onClick={() => toggleModals("signUp")}
                                className="button-log">
                                Sign Up
                            </button>
                            <button 
                                onClick={() => toggleModals("signIn")}
                                className="button-log2 ms-2">
                                Log In
                            </button>
                        </>
                    ) : (
                        <button 
                            onClick={() => {
                                auth.signOut();
                                setCurrentUser(null);
                            }}
                            className="button-log2 ms-2">
                            Log Out
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default NavBar;
