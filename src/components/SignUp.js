import React, { useState } from "react";
import Axios from "axios";

const SignUp = props => {
  
    const [userReg, setUserReg] = useState({
      name: "",
      username: "",
      password: "",
      location: "",
      contact_info: ""
    });
    const handleChanges = (e) => {
      setUserReg({
        ...userReg,
        [e.target.name]: e.target.value
      });
    };
    const handleSubmit = (e) => {
      e.preventDefault();
      Axios.post("https://simmr.herokuapp.com/api/chefs/register", userReg)
        .then(res => {
          console.log("new user registered", res);
          props.history.push("/login");
        })
        .catch(err => {
          console.log("could not register new user", err);
        });
      setUserReg({
        name: "",
        username: "",
        password: "",
        location: "",
        contact_info: ""
      });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>name</label>
                <input 
                type='text'
                name='name'
                onChange={handleChanges}
                value={userReg.name}/>
            </div>
            <div>
                <label>username</label>
                <input 
                type='text'
                name='username'
                onChange={handleChanges}
                value={userReg.username}/>
            </div>
            <div>
                <label>password</label>
                <input 
                type='password'
                name='password'
                onChange={handleChanges}
                value={userReg.password}/>
            </div>
            <div>
                <label>location</label>
                <input 
                type='number'
                name='location'
                onChange={handleChanges}
                value={userReg.location}/>
            </div>
            <div>
                <label>contact_info</label>
                <input 
                type='tel'
                name='contact_info'
                onChange={handleChanges}
                value={userReg.contact_info}/>
            </div>
            <button>submit</button>
        </form>

    )
};

export default SignUp;

