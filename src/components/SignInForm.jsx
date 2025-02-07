import React, { useContext, useRef, useState } from "react";
import { UserContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";

function SignInForm() {
  const { modalState, toggleModals, signIn } = useContext(UserContext);

  const navigate = useNavigate();

  const [validation, setValidation] = useState("");

  const inputs = useRef([]);
  const addInputs = (element) => {
    if (element && !inputs.current.includes(element)) {
      inputs.current.push(element);
    }
  };

  const formRef = useRef();

  const handleForm = async (e) => {
    e.preventDefault();

    try {
      const credential = await signIn(
        inputs.current[0].value,
        inputs.current[1].value
      );
      formRef.current.reset();
      setValidation("");
      navigate("/private/dashboard");
    } catch (error) {
      setValidation("Email or password is incorrect");
    }
  };

  const close = () => {
    setValidation("");
    toggleModals("close");
  };

  return (
    <>
      {modalState.signIn && (
        <div className="position-fixed top-0 vw-100 vh-100">
          <div
            onClick={close}
            className="w-100 h-100 bg-dark bg-opacity-75"
          ></div>
          <div
            className="position-absolute top-50 start-50 translate-middle"
            style={{ minWidth: "300px" }}
          >
            <div className="modal-dialog">
              <div className="modal-content p-4">
                <div className="modal-header">
                  <h3 className="modal-title">Log In</h3>
                  <button
                    onClick={() => toggleModals("close")}
                    className="btn-close"
                  ></button>
                </div>
                <div className="modal-body">
                  <form
                    onSubmit={handleForm}
                    className="signin-form"
                    ref={formRef}
                  >
                    <div className="mb-3">
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        id="signinEmail"
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
                        id="signinPwd"
                        ref={addInputs}
                        required
                      />
                      <p className="text-danger mt-1">{validation}</p>
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
  );
}

export default SignInForm;
