import React, { useContext } from 'react'
import { UserContext } from '../../context/userContext'
import { Outlet, useLocation, Navigate } from 'react-router-dom'
import SideBar from '../../components/SideBar';


function Private() {

    const {currentUser} = useContext(UserContext);
    console.log("PRIVATE", currentUser);

    if(!currentUser){
        return <Navigate to="/" />
    }

    return (
        <div className="d-flex vh-100" style={{ overflowY: "hidden" }}>
            <div style={{ width: "200px", flexShrink: 0 }}>
                <SideBar />
            </div>
            <div className="flex-grow-1 d-flex flex-column">
                <main className="main-content flex-grow-1">
                    <Outlet />
                </main>
            </div>
        </div>
    )
}

export default Private
