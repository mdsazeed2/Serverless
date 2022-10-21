import axios from "axios";
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import login_logo from "./images/Login_logo.jpg";
export default function Login() {

    const [username, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
   
    function SignUp() {
        navigate("/Signup");
    }
    
      const loginClick = (e) => {
        //alert("hi")
        const url = "http://localhost:3000/dev/Login";
        const data = {username:username,password:password};
        const headers = {}
        axios.post(url,data,{headers: headers})
        .then((res) => {
          console.log("Response==>" +JSON.stringify(res.data))
          localStorage.setItem("tokenvariable",res.data)
          if(res.data.status === "error"){
            alert("Incorrect Username or Password")
          }
          else{
          navigate("/AdminDash")
          }
        })
        .catch((err) => {
          console.log("Error==>" +err)
        })

      };
    return <>
        <div className='login'>
            <div className='login_outer_row1'>
                <div className='login_inner_row1'><img src={login_logo} alt=""/><label>Logo</label></div>
                <div className='login_inner_row2'>Welcome!</div>
                <div className='login_inner_row3'>Please Sign-in to your Account</div>
                <div className='login_inner_row4'><input type='email' placeholder='Email' onChange={(e) => (setEmail(e.target.value))} /><label>{username}</label></div>
                <div className='login_inner_row5'><input type='Password' placeholder='Password' onChange={(e) => (setPassword(e.target.value))} /><label>{password}</label></div>
                <div className='login_inner_row6'><input type='checkbox' /><label>Remember Me</label>
                    <a href='random'>Forgot Password?</a></div>
                <div className='login_inner_row7' ><input type='submit' value="Login" onClick={loginClick}/></div>
            </div>
            <div className='login_outer_row2'>
                <label>New User?</label><span onClick={SignUp}>SignUp</span>
            </div>
        </div>
    </>
}