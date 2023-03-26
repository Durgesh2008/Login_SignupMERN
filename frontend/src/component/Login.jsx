import React,{useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components';


//styled
const Container = styled.div`
height: 100vh;
background-color: rgb(89 98 116);
font-family: "Roboto", sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
display: flex;
align-items: center;
justify-content: center;
header .header{
    background-color: #fff;
    height: 45px;
  }
  header a img{
    width: 134px;
  margin-top: 4px;
  }
  .login-page {
   
    width: 360px;
    padding: 8% 0 0;
    margin: auto;
  }
  .login-page .form .login{
    margin-top: -31px;
  margin-bottom: 26px;
  }
  .form {
    position: relative;
    z-index: 1;
    background: #FFFFFF;
    max-width: 360px;
    margin: 0 auto 100px;
    padding: 45px;
    text-align: center;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
  }
  .form input {
    font-family: "Roboto", sans-serif;
    outline: 0;
    background: #f2f2f2;
    width: 98%;
    border: 0;
    margin: 0 0 15px;
    padding: 15px;
    box-sizing: border-box;
    font-size: 14px;
  }
  .form button {
    font-family: "Roboto", sans-serif;
    text-transform: uppercase;
    outline: 0;
    background-color: #328f8a;
    background-image: linear-gradient(45deg,#328f8a,#08ac4b);
    width: 100%;
    border: 0;
    padding: 15px;
    color: #FFFFFF;
    font-size: 14px;
    -webkit-transition: all 0.3 ease;
    transition: all 0.3 ease;
    cursor: pointer;
  }
  .form .message {
    margin: 15px 0 0;
    color: #b3b3b3;
    font-size: 12px;
  }
  .form .message a {
    color: #4CAF50;
    text-decoration: none;
  }
  
  .container {
    position: relative;
    z-index: 1;
    max-width: 300px;
    margin: 0 auto;
  }
`

const Login = () => {

  const navigate=useNavigate();
    const [Value, setValue] = useState({
         password: "",  email: ''
    })
    const onchangef = (e) => {
        setValue({ ...Value, [e.target.name]: e.target.value })
    }

    const PostData=async(e)=>{
      e.preventDefault();
      const {password,email}=Value;
       const response=await fetch('http://localhost:5000/api/auth/login',{
         method:"POST",
         headers:{
             "Content-Type":"application/json"
         },
         body:JSON.stringify({
             email,password
         })
       })
     
       const data=await response.json();
  
       if(data.success===false){
         notify('Invalid user')
       }
       else{
        localStorage.setItem('token',data.authtoken)
        notify('login successfully')
        navigate('/main')
       }
       }
   
    const notify = (message) => {
        toast.error(message);
    }

    return (
        <>
            <Container>
                
                    <div className="login-page">
                       
                        <div className="form">
                            <div className="login">
                                <div className="login-header">
                                    <h3>Login</h3>
                                    <p>Please Login .</p>
                                </div>
                            </div>
                            <form method='POST' className="login-form">
                            
                                <input onChange={onchangef} type="email" name='email' placeholder="email" value={Value.email}/>
                                <input  onChange={onchangef} type="password" name='password' placeholder="password" value={Value.password} />

                                <button onClick={PostData} >Submit</button>
                                <p className="message">Is new user? <Link to="/">Register</Link></p>
                            </form>
                        </div>
                    </div>
                    <ToastContainer position="bottom-right"
                        autoClose={1700}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="colored" />

                       
                  </Container>
        </>
    )
}

export default Login
