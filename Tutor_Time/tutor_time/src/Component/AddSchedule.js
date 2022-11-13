import {useState} from 'react';
import axiosConfig from './axiosConfig';
import TopMenu from "../Menu/TopMenu";
const AddSchedule =()=>{
    const[time,setTime]=useState("");
    const[date,setDate]=useState("");
    const[day,setDay]=useState("");
    const[msg,setMsg]=useState("");
    const Submit=(event)=>{
        event.preventDefault();
        var data={ time:time, date:date, day:day};
        axiosConfig.post("/addSchedule",data)
        .then((rsp)=>{debugger;
         setMsg(rsp.data.msg);
         
        },(err)=>{
            debugger;
        }) 
    }
    return(
        <div align='center'>
            <TopMenu/> 
            <h1>Add Schedule</h1>
        <form onSubmit={Submit}>
            <span>{msg}</span><br/>
            Time : <input type="time" onChange={(e)=>setTime(e.target.value)} value={time}/><br/><br/>
            Date : <input type="date" onChange={(e)=>setDate(e.target.value)} value={date}/><br/><br/>
            Day : <input type="text" onChange={(e)=>setDay(e.target.value)} value={day}/><br/><br/>
            <input type="submit" value="Submit"/>
        </form>
        </div>
    )
}

export default AddSchedule;