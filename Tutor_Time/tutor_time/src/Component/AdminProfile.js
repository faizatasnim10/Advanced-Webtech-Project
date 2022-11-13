import {useParams} from 'react-router-dom';
import { useState,useEffect } from 'react';
import axiosConfig from './axiosConfig';
import {useNavigate} from 'react-router-dom';
import TopMenu from "../Menu/TopMenu";
const AdminProfile=(props)=>{
    const {username} = useParams();
    const [admin,setAdmin] = useState({});
    const navigate= useNavigate();
    useEffect(()=>
    {
        console.log(localStorage.getItem("_authToken"))
        if(!localStorage.getItem("_authToken")){
            navigate("/adminlogin");
        }
        axiosConfig.get(`/admin/details/${username}`)
        .then((rsp)=>{
            setAdmin(rsp.data);
        },(err)=>{
            debugger;
        }) 
    },[]);
return (
    <div align='center'>
        <TopMenu/> 
        <h1>Admin Profile</h1>
        <strong>Username:  {admin.username}</strong><br/><br/>
    </div>
)
}

export default AdminProfile;