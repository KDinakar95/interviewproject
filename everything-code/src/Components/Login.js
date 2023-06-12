import React, { useState,useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Login() {
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


    if (password.length < 6) {
      steps += 6 - password.length;
    } else if (password.length > 20) {
      steps += password.length - 20;
    }

 
    const hasLowercase = /[a-z]/.test(password);
    const hasUppercase = /[A-Z]/.test(password);
    const hasDigit = /[0-9]/.test(password);

  
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
const submitHandler =async (e)=>{
  e.preventDefault();

  let data = await axios.post('http://localhost:5066/postuser',{password})
console.log(data)
apiCall()

}

const apiCall = ()=>{
  axios.get('http://localhost:5066/getdetails').then((response)=>{
    console.log(response)
    setPasswordinfo(response.data.found)

  })
}
useEffect(()=>{
  apiCall()

},[])
console.log(passwordinfo)

  return (
    <div>
        <Form onSubmit={submitHandler}>
     

     <Form.Group className="mb-3" controlId="formBasicPassword">
       <Form.Label>Password</Form.Label>
       <Form.Control type="password" onChange={handlePasswordChange} value={password} placeholder="Password" />
     </Form.Group>
     <Form.Group className="mb-3" controlId="formBasicCheckbox">
       <Form.Check type="checkbox" label="Check me out" />
     </Form.Group>
     <Button variant="primary" type="submit">
       Submit
     </Button>
   </Form>
   <h3>Minimum steps required: {steps}</h3>  

        
    
      <h3>Password Details</h3>
      {
        passwordinfo?.map((item)=>{
          return(
            <>
            <h4>{item.password}</h4>
            </>
          )
        })
    }
    </div>
  );
}

export default Login;
