import React, { useContext, useRef } from "react";
import UserContext from "../../context/UserContext";

const Login = () => {
  const { user, setUser } = useContext(UserContext);
  const emailRef = useRef();

  const handleLoginFormSubmit = (e) => {
    e.preventDefault();
    console.log("user input", emailRef.current.value);
    if (emailRef.current.value) {
      //   console.log("storing user in local storage");
      localStorage.setItem("user", emailRef.current.value);
      setUser(emailRef.current.value);
    }
  };

  return (
    <>
      {!user && (
        <form
          id="frmLogin"
          className="form-group p-2"
          onSubmit={handleLoginFormSubmit}
        >
          <input
            type="email"
            className="form-control mb-3"
            placeholder="Enter your email"
            ref={emailRef}
          />
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      )}
      {user && <p>{user}</p>}
    </>
  );
};

export default Login;
