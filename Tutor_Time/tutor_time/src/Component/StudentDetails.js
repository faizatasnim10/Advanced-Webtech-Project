import {useParams} from 'react-router-dom';
import { useState,useEffect } from 'react';
import axiosConfig from './axiosConfig';
import {useNavigate} from 'react-router-dom';
import TopMenu from "../Menu/TopMenu";
const StudentDetails=(props)=>{
    const {student_id} = useParams();
    const [student,setStudent] = useState({});
    const navigate= useNavigate();
    useEffect(()=>
    {
        console.log(localStorage.getItem("_authToken"))
        if(!localStorage.getItem("_authToken")){        
            navigate("/adminlogin");
        }
        axiosConfig.get(`/sdetails/${student_id}`)
        .then((rsp)=>{
            setStudent(rsp.data);
        },(err)=>{
            debugger;
        }) 
    },[]);
return (
    <div align='center'>
        <TopMenu/>
        <h1>Student Details</h1>
        <strong>Name:      {student.name}</strong><br/><br/>
        <strong>Email:     {student.email}</strong><br/><br/>
        <strong>ID:        {student.student_id}</strong><br/><br/>
        <strong>Phone:     {student.phone}</strong><br/><br/>
        <strong>Username:  {student.username}</strong><br/><br/>
        <strong>Address:   {student.address}</strong><br/><br/>
        <strong>Desc:      {student.desc}</strong><br/>
    </div>
)
}

export default StudentDetails;