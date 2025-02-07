import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase-config';
import logo from '../assets/logo.png'

function SideBar() {

    const navigate = useNavigate();

    const logOut = async () => {
        try {
            await signOut(auth);
            navigate("/");
        } catch {
            alert("Pour une raison inconnue, nous ne pouvons pas vous déconnecter. Veuillez vérifier votre connexion Internet et réessayer");
        }
    };

    return (
        <nav className="navbar" >
            <div className="content-logo">
                    <Link to="/" className="logo">
                        <img src={logo} alt="logo" className="img img-fluid" />
                    </Link>    
            </div>      
            <div className="submenu">
                <h4 className="title-sidebar">Dashboard</h4>
                <Link to="/private/dashboard" className="link" >
                    <i className="fa-solid fa-list"></i> To Do
                </Link> 
                <Link to="/private/projects" className="link">
                    <i className="fa-solid fa-folder"></i>Projets
                </Link> 
                <Link to="/private/agenda" className="link">
                    <i className="fa-solid fa-calendar"></i>Agenda
                </Link> 
                <Link to="/private/profil" className="link">
                    <i className="fa-solid fa-user"></i>Profil
                </Link> 
            </div>
            <div className="learn-more">
                <div className="learn-header">
                    <h5 className="learn-title">Besoin d'infos ?</h5>
                    <p className="learn-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, sed.</p>
                </div>
                <button 
                    onClick={() => {}}
                    className="button-learn"
                >
                    Submit
                </button>       
            </div>
            <button 
                onClick={logOut} 
                className="button-logout"
            >
                <i className="fa-solid fa-arrow-right-from-bracket mx-2"></i>Log Out
            </button>
        </nav>
    );
}

export default SideBar;
