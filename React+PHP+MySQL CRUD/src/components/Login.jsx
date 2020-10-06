import React from 'react';

function Login()
{
    return (
<React.Fragment>
 <div className="container  pt-5 mt-5 text-center">
     <h3>Login</h3>
     </div> 
<div className="container">
    <div className="row justify-content-center">
        <div className="col-md-6">
            <form>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" placeholder="User Name" className="form-control"></input>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" placeholder="Password" className="form-control"></input>
                </div>

                <div className="form-group">
                  <button className="btn btn-block btn-primary">Login</button>
                </div>

            </form>
        </div>
    </div>
</div>
</React.Fragment>
        
    );
}

export default Login;