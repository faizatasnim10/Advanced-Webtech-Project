import {useParams} from 'react-router-dom';
import { useState,useEffect } from 'react';
import axiosConfig from './axiosConfig';
import {useNavigate} from 'react-router-dom';
import TopMenu from "../Menu/TopMenu";
const TeacherDetails=(props)=>{
    const {tutor_id} = useParams();
    const [teacher,setTeacher] = useState({});
    const navigate= useNavigate();
    useEffect(()=>
    {
        console.log(localStorage.getItem("_authToken"))
        if(!localStorage.getItem("_authToken")){        
            navigate("/adminlogin");
        }
        axiosConfig.get(`/tdetails/${tutor_id}`)
        .then((rsp)=>{
            debugger;
            setTeacher(rsp.data);
        },(err)=>{
            debugger;
        }) 
    },[]);
return (
    <div align='center'>
        <TopMenu/>
        <h1>Tutor Details</h1>
        <strong>Name:      {teacher.name}</strong><br/><br/>
        <strong>Email:     {teacher.email}</strong><br/><br/>
        <strong>ID:        {teacher.tutor_id}</strong><br/><br/>
        <strong>Phone:     {teacher.phone}</strong><br/><br/>
        <strong>Username:  {teacher.username}</strong><br/><br/>
        <strong>Gender:    {teacher.gender}</strong><br/><br/>
    </div>
)
}

export default TeacherDetails;