import { plugin } from 'mongoose'
import { useState } from 'react'
function App() {
  const [name,setName] = useState("")
  const[email,setEmail]=useState("")
  const[number,setNumber]=useState("")
  
  function consthandlesubmit (e){
    ()=>{
    e.setState("handle error");
  }
}
function formvalidation(){
    if(!name||!email||!number)
    {
        console.log("Need to enter them");
    }
    else if((name||email||mobileno||!formname||!formemail||!formmobilenumber))
    {
        console.log("The field is entered");
    }
    else
    {
        e.handlesubmitted(consthandleerror)
        {
            console.log("error please check form");
        }
    }
}
function otpgeneration()
{
if(!name||!email||!number)
{
    console.log("The field is required");
}
else if(email)
{
    console.log("mail has been enter");
}
else{
    console.log("error");
}
}
};
  <head> 
  <div>
    <h1> FormValidation </h1>
    <form>
        functionvalidation{
            <input>
            =email</input>
    // e.consthandlesubmit 
        }
        functionenter{
            <input>=name</input>
        }
      <input type =text> placeholder='enter the name'</input>
      <input type= text>placeholder='enter your email'</input>

    </form>
  </div>
   </head>
export default App
