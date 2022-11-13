import {useState,useEffect} from 'react';
import axiosConfig from './axiosConfig';
import {Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import TopMenu from "../Menu/TopMenu";
const ListAdmin=()=>{
    const [Admins,setAdmins] = useState([]);
    const[search_ad,setSearch_ad]=useState("");
    const navigate= useNavigate();
    useEffect(()=>{
        console.log(localStorage.getItem("_authToken"))
        if(!localStorage.getItem("_authToken")){
            navigate("/adminlogin");
        }
        axiosConfig.get("/admin")
        .then((rsp)=>{
            debugger;
            setAdmins(rsp.data);
        },(err)=>{
        }) 
    },[]);
    const Submit=(event)=>{  
        event.preventDefault();
        var data={ search_ad:search_ad};
        axiosConfig.post("/adsearch",data)
        .then((rsp)=>{ 
            setAdmins(rsp.data);
        },(err)=>{
           
        }) 
    }
    return(
        <div align='center'>   
        <TopMenu/> 
        <form onSubmit={Submit} >
        <input type="text" placeholder="Search admin here" onChange={(e)=>setSearch_ad(e.target.value)} value={search_ad}/>
        <input type="submit" value="Search"/>
        </form>
         <h1 align='center'>Admin List</h1>
            <table border="3">
                <tr>               
                <th>Username</th>  
                <th>Edit</th>             
                <th>Delete</th>
                </tr>
                {
                    Admins.map((st)=>(
                    <tr> 
                        <td><Link to={`/admin/details/${st.username}`}>{st.username}</Link></td>
                        <td><a href={`/editAdmin/${st.username}`}>Edit</a></td>
                        <td><a href={`http://localhost:8000/api/admin/${st.username}`}>Delete</a></td>
                    </tr>))
                }
            </table>
        </div>
    )
}
export default ListAdmin;