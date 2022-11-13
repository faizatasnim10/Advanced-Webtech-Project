import {useState,useEffect} from 'react';
import axiosConfig from './axiosConfig';
import {useNavigate} from 'react-router-dom';
import TopMenu from "../Menu/TopMenu";
const ScheduleList=()=>{
    const [tutors,setTutors] = useState([]);
    const navigate= useNavigate();
    useEffect(()=>{
        console.log(localStorage.getItem("_authToken"))
        if(!localStorage.getItem("_authToken")){        
            navigate("/adminlogin");
        }
        axiosConfig.get("/schedule")
        .then((rsp)=>{
            debugger;
            setTutors(rsp.data);
        },(err)=>{
            debugger;
        }) 
    },[]);
    return(
        <div align='center'>  
        <TopMenu/>  
         <h1 align='center'>Schedule List</h1>
            <table border="3">
                <tr>
                <th>Id</th>
                <th>Schedule</th>
                <th>Date</th>
                <th>Day</th>
                <th>Delete</th>
                </tr>
                {
                    tutors.map((st)=>(
                    <tr> 
                        <td>{st.tutor_id}</td>
                        <td>{st.time}</td>
                        <td>{st.date}</td>
                        <td>{st.day}</td>
                        <td><a href={`http://localhost:8000/api/schdel/${st.tutor_id}`}>Delete</a></td>
                    </tr>))
                }
            </table>
        </div>
    )
}
export default ScheduleList;