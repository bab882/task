import React, { useContext, useState } from 'react';
import { UserContext } from '../../context/userContext';
import Avatar from '../../assets/avatar.jpg';

function Header({ incompletedTask }) {
    const { currentUser } = useContext(UserContext);
    const [isPopupVisible, setIsPopupVisible] = useState(false);

    const togglePopup = () => {
        setIsPopupVisible(!isPopupVisible);
    };

    return (
        <section className="container-fluid g-0">
            {currentUser && (
                <div className="user-info">
                    <div className="profil">
                        <div className="profil-img">
                            <img src={Avatar} alt="profil" className="img-fluid" />
                        </div>
                        <div className="profil-info">
                            <h4>Bienvenue 
                                <span className="pseudo"> {currentUser.email.split("@")[0].charAt(0).toUpperCase() + currentUser.email.split("@")[0].slice(1)}</span>
                            </h4>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                    <form className="d-flex" role="search">
                        <div className="input-group">
                            <input className="form-control search" type="search" placeholder="Search here" aria-label="Search" />
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </div>
                    </form>
                    <div className="setting">
                        <div className="notification-wrapper">
                            <button className="button-icone" onClick={togglePopup}>
                                <i className="fa-regular fa-bell"></i>
                                {incompletedTask > 0 && (
                                    <span className="notification-badge">{incompletedTask}</span>
                                )}
                            </button>
                            {isPopupVisible && (
                                <div className="notification-popup">
                                    <h6>Notifications</h6>
                                    {incompletedTask > 0 ? (
                                        <div>
                                            <p>{incompletedTask} tâche{incompletedTask > 1 ? 's' : ''} à faire</p>
                                        </div>
                                    ) : (
                                        <div className="no-tasks">
                                            <p>Aucune tâche pour le moment.</p>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                        <button className="button-icone ms-2">
                            <i className="fa-solid fa-gear"></i>
                        </button>    
                    </div>
                </div>
            )}
        </section>
    );
}

export default Header;
