import React,{useState} from 'react'

function Practice() {

    const[password,setPassword] = useState('')
    const[message,setMessage] = useState('')

const handleChange = (e)=>{
    setPassword(e.target.value)
    console.log(password)

}
const formHandler = (e)=>{

const regExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?!.*(\w)\1{2})\w{6,}$/
if(password ===''){
    setMessage('Please Enter the Password')
}else if(regExp.test(password)){
    setMessage('Password is valid')
}else if(!regExp.test(password)){
    setMessage('Password is not valid')

}else{
    setMessage('')
}
}



  return (
    <div>
        <center>
        <form onSubmit={formHandler}>
            <label>Password</label><br/>
            <input type='password' onChange={handleChange} placeholder='Enter your password'/>
            <p>{message}</p>
            <button>Submit</button>
        </form>
        </center>
       
    </div>
  )
}

export default Practice