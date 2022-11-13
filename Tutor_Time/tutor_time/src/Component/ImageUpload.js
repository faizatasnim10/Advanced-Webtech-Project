import {useState,useEffect} from 'react';
import axiosConfig from './axiosConfig';
import {useNavigate} from 'react-router-dom';
import TopMenu from "../Menu/TopMenu";

function ImageUpload()
{
    const[image, setImage] = useState('')
    const[msg, setmsg] = useState('')
    const navigate= useNavigate();
    useEffect(()=>{
    console.log(localStorage.getItem("_authToken"))
    if(!localStorage.getItem("_authToken")){
    navigate("/adminlogin");
}
    },[]);
    const handleChange = (e)=>{
    console.log(e.target.files)
    setImage(e.target.files[0])
}
    const handleApi = () =>
{
    const formData = new FormData()
    formData.append('pro_pic',image)
    axiosConfig.post("/upload",formData).then((rsp) => {
    setmsg (rsp.data.msg)
    })
}  
    return(
    <div align='center'>
         <TopMenu/> 
    {msg}
    <h1>File Upload</h1><br/><br/>
    <input type="file"   onChange={handleChange}/><br/><br/>
    <button onClick = {handleApi}>Submit</button>
    </div>
    )
}
export default ImageUpload
