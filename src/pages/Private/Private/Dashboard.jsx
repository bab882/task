import React, { useState, useEffect } from 'react';
import Header from '../../../components/header/header';
import Task from '../../../components/Task';

function Dashboard() {
    const [incompletedTask, setIncompletedTask] = useState(0);

    useEffect(() => {
        console.log("Dashboard rendu !");
    }, []);

    return (
        <section className="dashboard-container">
            <Header incompletedTask={incompletedTask} />
            <Task setIncompletedTask={setIncompletedTask} />
        </section>
    );
}

export default Dashboard;
