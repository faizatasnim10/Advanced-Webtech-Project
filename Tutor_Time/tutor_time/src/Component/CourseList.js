import {useState,useEffect} from 'react';
import axiosConfig from './axiosConfig';
import {useNavigate} from 'react-router-dom';
import TopMenu from "../Menu/TopMenu";
const CourseList=()=>{
    const [tutors,setTutors] = useState([]);
    const[search_cou,setSearch_cou]=useState("");
    const navigate= useNavigate();
    useEffect(()=>{
        console.log(localStorage.getItem("_authToken"))
        if(!localStorage.getItem("_authToken")){
            navigate("/adminlogin");
        }
        axiosConfig.get("/course")
        .then((rsp)=>{
            debugger;
            setTutors(rsp.data);
        },(err)=>{
            debugger;
        }) 
    },[]);
    const Submit=(event)=>{  
        event.preventDefault();
        var data={ search_cou:search_cou};
        axiosConfig.post("/csearch",data)
        .then((rsp)=>{ 
            setTutors(rsp.data);
        },(err)=>{
        }) 
    }
    return(
        <div align='center'>   
        <TopMenu/> 
        <form onSubmit={Submit}>
        <input type="text" placeholder="Search course here" onChange={(e)=>setSearch_cou(e.target.value)} value={search_cou}/>
        <input type="submit" value="Search"/>
        </form> 
         <h1 align='center'>Course List</h1>
            <table border="3">
                <tr>
                <th>Id</th>
                <th>Course</th>
                <th>Medium</th>
                <th>Class</th>
                <th>Edit</th>
                <th>Delete</th>
                </tr>
                {
                    tutors.map((st)=>(
                    <tr> 
                        <td>{st.tutor_id}</td>
                        <td>{st.subject}</td>
                        <td>{st.medium}</td>
                        <td>{st.division}</td>
                        <td><a href={`/editCourse/${st.tutor_id}`}>Edit</a></td>
                        <td><a href={`http://localhost:8000/api/subdel/${st.tutor_id}`}>Delete</a></td>
                    </tr>))
                }
            </table>
        </div>
    )
}
export default CourseList;