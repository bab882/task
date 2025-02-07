import React, { useContext, useRef, useState } from 'react'
import { UserContext } from '../context/userContext'
import { useNavigate } from 'react-router-dom';

function SignUpForm() {

  const {modalState, toggleModals, signUp} = useContext(UserContext);

  const navigate = useNavigate();
  
  const [validation, setValidation] = useState("");
  
  const inputs = useRef([]);

  const addInputs = element => {
    if(element && !inputs.current.includes(element)){
      inputs.current.push(element)
    }
  }
  const formRef = useRef();

  const handleForm = async (e) => {

    e.preventDefault()

    if((inputs.current[1].value.length || inputs.current[2].value.length) < 8){
      setValidation("8 caractères minimun")
      return; 
    }
    else if(inputs.current[1].value !== inputs.current[2].value){
      setValidation("Les mots de passe sont différents")
      return;
    }

    try {
      const credential = await signUp(
        inputs.current[0].value,
        inputs.current[1].value
      )
      formRef.current.reset();
      setValidation("")
      navigate("/private/dashboard")
    } catch (error) {
      if(error.code === "auth/invalid-email"){
        setValidation("Le format Email est invalide")
      }
      if(error.code === "auth/email-already-in-use"){
        setValidation("Email déjà utilisé")
      }
    }
  }

  const close = () => {
    setValidation("")
    toggleModals("close")
  }
  
  return (
    <>
      {modalState.signUp && (
        <div className="position-fixed top-0 vw-100 vh-100">
          <div 
            onClick={close}
            className="w-100 h-100 bg-dark bg-opacity-75"
          >
          </div>  
      
          <div 
              className="position-absolute top-50 start-50 translate-middle"  
              style={{ minWidth: "300px" }}
            >
              <div className="modal-dialog">
                <div className="modal-content p-4">

                  <div className="modal-header">
                    <h3 className="modal-title">Sign Up</h3>
                    <button 
                      onClick={() => toggleModals("close")}
                      className="btn-close">
                    </button>
                  </div>
                  <div className="modal-body">
                    <form
                      onSubmit={handleForm} 
                      className="signup-form"
                      ref={formRef}
                    >
                      <div className="mb-3">
                        <input 
                          type="email"
                          name="email"
                          className="form-control"
                          placeholder="Email"
                          id="signupEmail"
                          ref={addInputs}
                          required 
                        />
                      </div>
                      <div className="mb-3">
                        <input 
                          type="password"
                          name="pwd"
                          className="form-control"
                          placeholder="Password"
                          id="signupPwd"
                          ref={addInputs}
                          required 
                        />
                      </div>
                      <div className="mb-3">
                        <input 
                          type="password"
                          name="pwd"
                          className="form-control"
                          placeholder="Repeat Password"
                          id="repeatPwd"
                          ref={addInputs}
                          required 
                        />
                        <p className="text-danger mt-1">
                          {validation}
                        </p>
                      </div>
                      <div className="footer-form">
                        <button className="button-submit">Submit</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
          </div>
        </div>
      )}
    </>
  )
}

export default SignUpForm
