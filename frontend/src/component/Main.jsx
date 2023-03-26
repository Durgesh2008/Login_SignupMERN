import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import Navbar from './NavBar/Navbar';
import Video from './video component/Video';

const Main = () => {
const check=localStorage.getItem('token');
const [data,setdata]=useState([]);
const featchdata=async()=>{
  const response=await fetch('http://localhost:5000/api/data/getdata',{
         method:"GET",
         headers:{
             "Content-Type":"application/json"
         },
         
       })
       const tempdata=await response.json();
       
       setdata(tempdata);

}

useEffect(() => {
  featchdata();

},[]);
  return (
   !check?(<div>
   <p className="message">404 page <Link to="/login">home</Link></p>
 </div>): <div>
    <Navbar/>
    <Video/>
    </div>
  )
}

export default Main
