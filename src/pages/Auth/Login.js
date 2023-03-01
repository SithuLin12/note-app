import React, { useContext, useState,useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import ax from '../../api/ax';
import Master from '../../layout/Master'
import MessageContext from "../../context/MessageContext";
import AuthContext from '../../context/AuthContext';
import LableContext from '../../context/LableContext';

export default function Login() {

  // hook
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [loader,setLoader] = useState(false);
  const [err,setErr] = useState([])


  // router 
  const history = useHistory();

  // context
  const authUserContext = useContext(AuthContext)
  const Msgtext = useContext(MessageContext)
  const {setLable} = useContext(LableContext)

  useEffect(()=>{
    if(localStorage.getItem('token')){
      Msgtext.setMessage({type:"error",message: "Your Already login"})
      history.push('/')
    }
  },[])

  // handle
  const Login = () =>{
    setLoader(true)
    var fmdata = new FormData();
    fmdata.append('email',email)
    fmdata.append('password',password)
    ax.post('/login', fmdata).then((res)=> {
      setLoader(false)
      const { success, data } = res.data ;
      if (success === false) {
        setErr(data);
      }else{
        localStorage.setItem('token',data.token)
        authUserContext.setAuth(data.user)

        // toast message
        Msgtext.setMessage({type:"success",message:`Welcome Back ${data.user.name}`})

        ax.get('/category', {headers : {Authorization : "Bearer " + data.token }})
        .then((res) => {
          const {data} = res.data
          setLable(data)
        })
        // redirect
        history.push('/')
      }
      
    }).catch((err)=>{
      console.log(err);
    })
  }

 


  return (
    <Master>
        <div className="container mt-3">
  <div className="row">
    {/* For Category and Information */}
    
    <div className="col-md-8 offset-md-2">
      <div className="card">
        <div className="card-header bg-dark">
          <h3 className="text-white">Login</h3>
        </div>
        <div className="card-body">
          <form>
            <div className="form-group">
              <label htmlFor className="text-white">Enter Email</label>
              <input onChange={(e)=>setEmail(e.target.value)} type="email" className={`form-control bg-dark ${err.email && 'border border-danger'} border-0 text-white`}  placeholder="enter your email" />
              {err.email &&
                      err.email.map((err, index) => (
                        <span key={index} className="text-danger">
                          {err}
                        </span>
                      ))}
            </div>
            <div className="form-group">
              <label htmlFor className="text-white">Enter Password</label>
              <input onChange={(e)=>setPassword(e.target.value)} type="password" className={`form-control bg-dark ${err.password && 'border border-danger'} text-white`}  placeholder="*****" />
              {err.password &&
                      err.password.map((err, index) => (
                        <span key={index} className="text-danger">
                          {err}
                        </span>
                      ))}
            </div>
            <button onClick={() => Login()} disabled={loader} className='btn btn-dark'>
            {loader && 
              <span
              class="spinner-border spinner-border-sm mr-2"
              role="status"
              aria-hidden="true"
            ></span>}
              Login</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

    </Master>
  )
}
