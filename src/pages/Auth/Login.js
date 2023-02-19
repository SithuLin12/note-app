import React from 'react'
import Master from '../../layout/Master'

export default function Login() {
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
          <form action>
            <div className="form-group">
              <label htmlFor className="text-white">Enter Email</label>
              <input type="email" className="form-control bg-dark border-0 text-white" name="email" placeholder="enter your email" />
            </div>
            <div className="form-group">
              <label htmlFor className="text-white">Enter Password</label>
              <input type="password" className="form-control bg-dark border-0 text-white" name="password" placeholder="*****" />
            </div>
            <input type="submit" defaultValue="Login" className="btn btn-dark" />
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

    </Master>
  )
}
