import {useState,useEffect} from 'react';
import axiosConfig from './axiosConfig';
import {useNavigate} from 'react-router-dom';
import TopMenu from "../Menu/TopMenu";
const AdminLogin =()=>{
    const[username,setUserName]=useState("");
    const[password,setPassWord]=useState("");
    const[msg,setMsg]=useState("");
    const navigate= useNavigate();
    const Submit=(event)=>{
    event.preventDefault();
    var data={username:username, password:password};
    axiosConfig.post("/adminlogin",data)
    .then((rsp)=>{ 
    setMsg(rsp.data.msg); 
    localStorage.setItem('_authToken',rsp.data.token);
    if(rsp.data.msg=="Login successfully"){
    navigate("/home"); 
    }
},(err)=>{
    debugger;
    }) 
    } 
    return(
    <div align='center'> 
    <TopMenu/> 
    <h1>Admin Login</h1>  
    <form onSubmit={Submit}>
    <span>{msg}</span><br/>
    Username : <input type="text" onChange={(e)=>setUserName(e.target.value)} value={username}/><br/><br/>
    Password: <input type="password" onChange={(e)=>setPassWord(e.target.value)} value={password} ></input><br/><br/>
    <input type="submit" url="/home" value="Login"/>
    </form>
    </div>
    )
    }

export default AdminLogin;

