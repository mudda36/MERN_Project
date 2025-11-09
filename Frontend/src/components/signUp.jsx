import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";
import '../styles/signUp.css'



const SignUp = () => {
let [name,setName]=useState('')
let [mobile,setMobile]=useState('')
let [email,setEmail]=useState('')
let [password,setPassword]=useState('')
let [confirm_password,setConfirm_Password]=useState('')
let navigate=useNavigate()

let handleSubmit=(e)=>{
    e.preventDefault();
    let data={name,mobile,email,password,confirm_password}
    if(name && mobile && email && (password == confirm_password)){
        axios.post('http://localhost:4000/signup',data)
        .then((res)=>{
            alert(res.data.message)
            navigate('/')
            console.log(data);
        })
    }else{
        alert('invalid credentials')
    }
}

    return ( 
        <div className="signupmaining ">
       <center> 
        <div className="signUp rounded-4 my-0 border border-primary text-warning  text-center" style={{width:'30%'}}>
            <h1>SignUp</h1>
            
           <center> <div className="signUp_form my-5 rounded-5" style={{width:'60%'}}>
                
                <form action="" onSubmit={handleSubmit} >

                    <div className="Name">
                        <input className="form-control my-2 rounded-4" value={name}  onChange={(e)=>setName(e.target.value)} type="name" name="text" placeholder="Enter The Name" />
                    </div>

                    <div className="mobile_number">
                        <input className="form-control my-2 rounded-4" value={mobile}  onChange={(e)=>setMobile(e.target.value)}  type="number" name="number" placeholder="Enter the number" />

                    </div>

                    <div className="email">
                        <input className="form-control my-2 rounded-4" value={email}  onChange={(e)=>setEmail(e.target.value)} type="email" name="Email" placeholder="Enter the Email" />

                    </div>

                    <div className="password">
                        <input className="form-control my-2 rounded-4" value={password}  onChange={(e)=>setPassword(e.target.value)} type="password" name="password" placeholder="Enter the Password" />
                    </div>

                    <div className="confirm_password">
                        <input className="form-control my-2 rounded-4" value={confirm_password}  onChange={(e)=>setConfirm_Password(e.target.value)} type="password" name="password" placeholder="Enter the Password" />

                    </div>

                    <div className="signUp_button">
                        <button   className="btn my-2 text-light  bg-primary">Sign up</button>
                    </div>

                    <div className="login_button">
                        <p>Already a user ?</p>
                        <Link to="/" className="btn btn-outline-primary fw-bolder">LogIn</Link>
                    </div>

                </form>
            </div></center>
        </div></center>
        </div>
     );
}
 
export default SignUp;