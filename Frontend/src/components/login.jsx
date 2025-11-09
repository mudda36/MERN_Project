import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import '../styles/login.css'

const Login = () => {
    let [email,setEmail]=useState('')
    let [password,setPassword]=useState('')
    let navigate=useNavigate()

    let logSubmit=(e)=>{
        e.preventDefault();
        let data={email,password}
        axios.post('http://localhost:4000/login',data)
        .then((res)=>{
            if(res.data.message =='login successfull'){
                navigate('/home')
            }else{
                alert(res.data.message)
            }
        })
    }
    return (
        <div className="loginmainimg">
        <center> <div className="login rounded-4 my-0  border border-primary text-warning text-center " style={{width:"30%"}} >
            <center><h1>Login page</h1>
            <div className="login_form  my-5  rounded-5"style={{width:'60%'}}>

                <form action="" onSubmit={logSubmit}>

                    <div className="email">
                        <input className="form-control my-2 rounded-4" value={email} type="email" onChange={(e)=>setEmail(e.target.value)} placeholder="Enter The Email" name="email" />
                    </div>

                    <div className="password">
                        <input value={password} type="password" className="form-control rounded-4" onChange={(e)=>setPassword(e.target.value)} placeholder="Enter The Password" name="password" />
                    </div>

                    <div className="options">
                        <button className="btn btn-primary my-3">Login</button>
                    </div>

                </form>
                <div className="signUp_button my-2">
                        <p>Are u a new user ?</p>
                        <Link to="/signUp" className="btn btn-outline-primary fw-bolder ">SignUp</Link>
                    </div>
            </div></center>
        </div></center>
        </div>
    );
}

export default Login;