import {useState} from 'react';
import axiosConfig from './axiosConfig';
import TopMenu from "../Menu/TopMenu";
const AddCourse =()=>{
    const[subject,setSubject]=useState("");
    const[medium,setMedium]=useState("");
    const[division,setDivision]=useState("");
    const[msg,setMsg]=useState("");
    const Submit=(event)=>{
        event.preventDefault();
        var data={ subject:subject, medium:medium, division:division};
        axiosConfig.post("/addCourse",data)
        .then((rsp)=>{
         setMsg(rsp.data.msg);
        },(err)=>{
        }) 
    }
    return(
        <div align='center'> 
        <TopMenu/>   
            <h1>Add Course</h1>
        <form onSubmit={Submit} >
            <span>{msg}</span><br/>
            Course : <input type="text" onChange={(e)=>setSubject(e.target.value)} value={subject}/><br/><br/>
            Medium : <input type="text" onChange={(e)=>setMedium(e.target.value)} value={medium}/><br/><br/>
            Class : <input type="text" onChange={(e)=>setDivision(e.target.value)} value={division}/><br/><br/>
            <input type="submit" value="Submit"/>
        </form>
        </div>
    )
}

export default AddCourse;