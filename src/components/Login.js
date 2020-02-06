import React, { useState } from "react";
import Axios from "axios";
import { chefLogin } from '../actions/chefActions';

export default function Login(props) {
    const [userLog, setUserLog] = useState({
      username: "",
      password: ""
    });
    const handleChanges = e => {
      setUserLog({
        ...userLog,
        [e.target.name]: e.target.value
      });
    };
    const handleSubmit = e => {
      e.preventDefault();
      chefLogin(userLog);
      props.history.push("/profile");
      // Axios.post("https://simmr.herokuapp.com/api/chefs/login", userLog)
      //   .then(res => {
      //     console.log("user has logged in", res);
      //     chefLogin(res.data.id);
      //     localStorage.setItem("test-token", res.data.token);
      //     props.history.push("/profile");
      //   })
      //   .catch(err => {
      //     console.log("user FAILED to log in", err);
      //   });
    };

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label>username</label>
                <input 
                type='text'
                name='username'
                onChange={handleChanges}
                value={userLog.username}/>
            </div>
            <div>
                <label>password</label>
                <input 
                type='password'
                name='password'
                onChange={handleChanges}
                value={userLog.password}/>
            </div>
            <button>submit</button>
        </form>

    )
}