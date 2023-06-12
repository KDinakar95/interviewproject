import React, { useState,useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Forms() {
  const [password, setPassword] = useState('');
  const [steps, setSteps] = useState(0);
  const[passwordinfo,setPasswordinfo] = useState([])
  

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
    setSteps(calculateSteps(value));
  };

  const calculateSteps = (password) => {
    let steps = 0;

    // Length check
    if (password.length < 6) {
      steps += 6 - password.length;
    } else if (password.length > 20) {
      steps += password.length - 20;
    }

    // Character composition check
    const hasLowercase = /[a-z]/.test(password);
    const hasUppercase = /[A-Z]/.test(password);
    const hasDigit = /[0-9]/.test(password);

    // if (!hasLowercase) {
    //   steps++;
    // }
    // if (!hasUppercase) {
    //   steps++;
    // }
    // if (!hasDigit) {
    //   steps++;
    // }

    // Repeating characters check
    for (let i = 0; i < password.length - 2; i++) {
      if (
        password.charAt(i) === password.charAt(i + 1) &&
        password.charAt(i + 1) === password.charAt(i + 2)
      ) {
        steps++;
        break;
      }
    }
console.log(steps)
    return steps;
  };
const submitHandler =(e)=>{
  e.preventDefault();

  let data = axios.post('http://localhost:5066/postuser',{password})
console.log(data)

}
useEffect(()=>{
  let resulted = axios.get('http://localhost:5066/getdetails').then((response)=>{
    console.log(response)
    setPasswordinfo(response.data.found)

  })

},[])
console.log(passwordinfo)

  return (
    <div>






    </div>
    // <div>
    //   {/* <input
    //     type="password"
    //     value={password}
    //     onChange={handlePasswordChange}
    //     placeholder="Enter password"
    //   />
    //   <div>Minimum steps required: {steps}</div>
    //   <button onClick={submitHandler}>Submit</button>
    //   <h3>Password Details</h3>
    //   // {
    //   //   passwordinfo.map((item)=>{
    //   //     return(
    //   //       <>
    //   //       <h4>{item.password}</h4>
    //   //       </>
    //   //     )
    //   //   })
    //   // }
    // </div>
  );
}

export default Form;
