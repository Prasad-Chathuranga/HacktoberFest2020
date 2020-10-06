import React, { Component } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

export default class Register extends Component
{
    
 constructor(props)
 {
     super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

     

     this.state = 
     {
         username: '',
         password: ''
     }
 }
 
 onSubmit(e)
 {
     e.preventDefault();

     const obj = {
         username : this.state.username,
         password : this.state.password
     };

    // console.log(obj);

    axios.post('/register.php', obj)
    .then(res => console.log(res.data));

    Swal.fire({
        title: 'Good Job !',
        text: 'Registration Successful !!!',
        icon: 'success',
        confirmButtonText: 'OK'
      })
    

    

    this.setState
    ({
        username: '',
        password: ''
    })

 }
 

onChangeName(e)
{
    this.setState({
        username: e.target.value
    });
}


onChangePassword(e)
{
    this.setState({
        password: e.target.value
    });
}
    render(){
    
        return (
    <React.Fragment>
     <div className="container  pt-5 mt-5 text-center">
         <h3>Register</h3>
         </div> 
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-6">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" placeholder="User Name" className="form-control" value={this.state.username} onChange={this.onChangeName}></input>
                    </div>
    
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" placeholder="Password" className="form-control" value={this.state.password} onChange={this.onChangePassword}></input>
                    </div>
    
                    <div className="form-group">
                      <button className="btn btn-block btn-success">Register</button>
                    </div>
    
                </form>
            </div>
        </div>
    </div>
    </React.Fragment>
            
        );

    }
      
}

