import { useState } from "react";

function Form(){
    const [name,setName]=useState("");
    const [email, setEmail]=useState("");

    const submitFormHandler=(event)=>{
        event.preventDefault();
        console.log("Name: "+name+" Email: "+email);
    }

    return(
        <div>
            <form>
                <label> Name </label>
                <input type="text" 
                name="name"   
                onChange={(event) => setName(event.target.value)}
                /> 
                <br/>

                <label> Email </label>
                <input type="email" 
                name="email"
                onChange={(event)=>setEmail(event.target.value)}
                /> 
                <br/>


                <button onClick={submitFormHandler} type="submit"> Submit </button>
            </form>
        </div>
    );

}

export default Form;