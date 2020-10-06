import React from 'react';

import {Link} from 'react-router-dom';

function Navbar()
{
 return(
 
    <React.Fragment>
<nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
  <a className="navbar-brand text-secondary"><b>Employee Management System</b></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <Link to="/login" className="nav-link text-secondary" >Login</Link>
      </li>
      <li className="nav-item active">
        <Link to="/register" className="nav-link text-secondary" >Register</Link>
      </li>
    
     
    </ul>
   
  </div>
</nav>
    </React.Fragment>
 
 );
}

export default Navbar;