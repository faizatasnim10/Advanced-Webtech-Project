import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom'; 
import TopMenu from "../Menu/TopMenu";
    const Home=()=>{

        const navigate= useNavigate();
        useEffect(()=>
            {
                console.log(localStorage.getItem("_authToken"))
                if(!localStorage.getItem("_authToken")){        
                    navigate("/adminlogin");
                }
                 
            },[]);
    
        const handleClick=()=>{
            localStorage.clear()
            navigate("/adminlogin");
        }
    return (  
        <div alaign='center'>
             <TopMenu/> 
            <h1>Welcome Admin</h1>
            <button onClick={handleClick}>Logout</button>
        </div>
    )
}
export default Home;