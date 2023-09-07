import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Loginform.css';

// import { useHistory } from 'react-router-dom';


const Loginform = () => {

  const [email, setEmail] = useState('');
  // const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [path, setPath] = useState('');
  const [error, setError] = useState(null);
  // const [valid, setValid] = useState(null);
  // let history = useHistory();
  
  const navigate = useNavigate();

  // function isvalidEmail(email) {
  //   // setEmail(e.target.value);
  //   return /\S+@\S+\.\S+/.test(email);
  // };

  function handleSubmit() {
    // e.preventDefault();

    axios.post('http://localhost:2200/login', {
      email: email,
      // username: username,
      password: password
    })
      .then(function (response) {
        console.log(response.data);

        if(response.data.status === "success")
        {
          // setPath(true)
          localStorage.setItem("token",response.data.token);
          navigate("/home");
        }

        // else{
        //   set(response.data.status);
        // }
        if(response.data.status === "Check Your email")
        {
          setError(response.data.status);
        }
        if(response.data.status === "Check Your Password")
        {
          setError(response.data.status);
        }
      })
      .catch(function (errorSZ) {
        console.log(error);
      })
  }

  return (
    <>
    
      {/* <div className='bgcolform'>
      <div className='center'>
        <table>
          <tr>
            <td className='p-3 text-center'>
             <button className='btnform1 mb-3'><span className=''>Farm Land</span></button><br />
             <img height={40} src="/assets/images/asset4.webp"></img>
            </td>
          </tr>
          <tr>
            <td className='p-2'>
              <label className='me-1'>Email :-</label>
              <input type="email" id='email' placeholder='Enter Email Id' value={email} onChange={(e) => setEmail(e.target.value)} />
            </td>
          </tr>
          <tr>
            <td className='p-2'>
              <label className='me-1'>Password :-</label>
              <input type="password" id='password' placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)} />
            </td>
          </tr>
          <tr>
            <td colSpan={2} className='p-2 text-center'>
              <button className='form-logo btnform' type='submit' onClick={handleSubmit}>Login</button>
            </td>
          </tr>
        </table>
      </div>
    </div> */}
    <div class=" body page">
  <div class="container1">
    <div class="left">
      <div class="login">Login</div>
      <div class="eula">By logging in you agree to the ridiculously long terms that you didn't bother to read</div>
    </div>
    <div class="right">
      <svg viewBox="0 0 320 300">
        <defs>
          
        </defs>
        <path d="m 40,120.00016 239.99984,-3.2e-4 c 0,0 24.99263,0.79932 25.00016,35.00016 0.008,34.20084 -25.00016,35 -25.00016,35 h -239.99984 c 0,-0.0205 -25,4.01348 -25,38.5 0,34.48652 25,38.5 25,38.5 h 215 c 0,0 20,-0.99604 20,-25 0,-24.00396 -20,-25 -20,-25 h -190 c 0,0 -20,1.71033 -20,25 0,24.00396 20,25 20,25 h 168.57143" />
      </svg>
      <div class="form">
        <label for="email">Email</label>
        <input type="email" id='email' placeholder='Enter Email Id' value={email} onChange={(e) => setEmail(e.target.value)} />
        <label for="password">Password</label>
        <input type="password" id='password' placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <div>
        <label >Login</label>
        <input type="submit" id="submit" value="login" onClick={handleSubmit}/>
        </div>
      </div>
    </div>
  </div>
</div>


    </>
  )
}

export default Loginform

