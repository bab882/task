import React from 'react'
import Header from '../../../components/header/header';

function Agenda() {
  return (
    <section className="dashboard-container">
      <Header />
      <div className="container-fluid p-5">
      <div className="d-flex flex-column justify-content-center align-content-center">
        <h1>Agenda</h1>
        <span>
          <strong>Un peu de patient ça arrive ..</strong>😊
        </span>
      </div>
    </div>
    </section>
  )
}

export default Agenda
