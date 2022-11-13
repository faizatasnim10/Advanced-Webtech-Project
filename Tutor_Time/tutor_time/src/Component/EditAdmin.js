import {useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';
import axiosConfig from './axiosConfig';
import {useNavigate} from 'react-router-dom';
import TopMenu from "../Menu/TopMenu";
const EditAdmin =()=>{
    const {username} = useParams();
    const [admin,setAdmin] = useState({});
    const[uname,setUname]=useState(""); 
    const[msg,setMsg]=useState("");
    const Submit=(event)=>{
        event.preventDefault();
        var data={ username:uname};
        axiosConfig.post(`/editAdmin/${username}`,data)
        .then((rsp)=>
        {        debugger;
            setAdmin(rsp.data);
            setMsg(rsp.data.msg);
        },(err)=>{debugger;
        }) 
    }
   const navigate= useNavigate();
    useEffect(()=>
    {
        console.log(localStorage.getItem("_authToken"))
        if(!localStorage.getItem("_authToken")){
            navigate("/adminlogin");
        }
        axiosConfig.get(`/admin/details/${username}`)
        .then((rsp)=>{debugger;
            setUname(rsp.data.uname);
        },(err)=>{
            debugger;
        }) 
    },[]);
    return(
        <div align='center'>
            <TopMenu/> 
            <h1>Edit Admin Profile</h1>
        <form onSubmit={Submit}>
            <span>{msg}</span><br/>
            Username : <input type="text" onChange={(e)=>setUname(e.target.value)} value={username}/><br/><br/>
            <input type="submit" value="Submit"/>
        </form>
        </div>
    )
}

export default EditAdmin;