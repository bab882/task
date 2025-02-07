import React from 'react'
import NavBar from '../components/NavBar'
import SignUpForm from '../components/SignUpForm'
import SignInForm from '../components/SignInForm'
import img from '../assets/mokup.png'

function Home() {
  
  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <NavBar />
      <SignUpForm />
      <SignInForm />
      <section className="container-fluid container-home px-5 g-0" style={{ flex: 1, overflow: "hidden" }}>
        <div className="home">
          <h1 className="home-title">Tachy</h1>
          <span className="home-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum temporibus et quibusdam deserunt error ? Repellendus !</span>
          <div className="mokup">
            <img src={img} alt="" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home