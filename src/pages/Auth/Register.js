import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import ax from "../../api/ax";
import AuthContext from "../../context/AuthContext";
import MessageContext from "../../context/MessageContext";
import Master from "../../layout/Master";

// lib


export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState([]);
  const [loader, setLoader] = useState(false);

  // router 
  const history = useHistory();

  // context
  const authUserContext = useContext(AuthContext)
  const Msgtext = useContext(MessageContext)

  useEffect(()=>{
    if(localStorage.getItem('token')){
      Msgtext.setMessage({type:"error",message: "Your Already register"})
      history.push('/')
    }
  },[])


  const register = () => {
    setLoader(true)
    var fmdata = new FormData();
    fmdata.append("name", name);
    fmdata.append("email", email);
    fmdata.append("password", password);
    ax.post("/register", fmdata).then((res) => {
      setLoader(false)
      const { success, data } = res.data;
      if (success === false) {
        setErr(data);
      }else{
        localStorage.setItem('token',data.token)
        authUserContext.setAuth(data.user)

        // toast message
        Msgtext.setMessage({type:"success",message:`Welcome ${data.user.name}`})

        // redirect
        history.push('/')
      }
    });
  };

  return (
    <Master>
      
      <div className="container mt-3">
        <div className="row">
          {/* For Category and Information */}

          <div className="col-md-8 offset-md-2">
            <div className="card">
              <div className="card-header bg-dark">
                <h3 className="text-white">Register</h3>
              </div>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label htmlFor className="text-white">
                      Enter Username
                    </label>
                    <input
                      onChange={(e) => setName(e.target.value)}
                      type="text"
                      className={`form-control bg-dark ${
                        err.name && "border border-danger"
                      } text-white`}
                      name="name"
                      placeholder="enter your name"
                    />
                    {err.name &&
                      err.name.map((err, index) => (
                        <span key={index} className="text-danger">
                          {err}
                        </span>
                      ))}
                  </div>
                  <div className="form-group">
                    <label htmlFor className="text-white">
                      Enter Email
                    </label>
                    <input
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      className={`form-control bg-dark ${
                        err.email && "border border-danger"
                      } text-white`}
                      name="email"
                      placeholder="enter your email"
                    />
                    {err.email &&
                      err.email.map((err, index) => (
                        <span key={index} className="text-danger">
                          {err}
                        </span>
                      ))}
                  </div>
                  <div className="form-group">
                    <label htmlFor className="text-white">
                      Enter Password
                    </label>
                    <input
                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                      className={`form-control bg-dark  ${
                        err.password && "border border-danger"
                      } text-white`}
                      name="password"
                      placeholder="*****"
                    />
                    {err.password &&
                      err.password.map((err, index) => (
                        <span key={index} className="text-danger">
                          {err}
                        </span>
                      ))}
                  </div>
                  <button onClick={() => register()}  class="btn btn-dark" type="button" disabled={loader}>
                    {loader && 
                    <span
                    class="spinner-border spinner-border-sm mr-2"
                    role="status"
                    aria-hidden="true"
                  ></span>
                    }
                    Register
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </Master>
  );
}
