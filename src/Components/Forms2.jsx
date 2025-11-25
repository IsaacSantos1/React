import { useState } from "react";
import form_image from "../Assets/form_image.png";
import form_image2 from "../Assets/form_image2.png";
import google from "../Assets/google.png";
import styles from "./Forms.module.css";

function Form2(){
    const [password,setPassword]=useState("");
    const [email, setEmail]=useState("");

    const submitFormHandler = (event) => {
        event.preventDefault();


        if(!email.includes("@") && !(password.length > 6)) {
            console.log("email: Invalid Email");
            console.log("password: Invalid Password Length - Must be > 6 Characters");
        } else if (!email.includes("@")) {
            console.log("email: Invalid Email");
            console.log("password: " + password);
        } else if (!(password.length > 6)) {
            console.log("email: " + email);
            console.log("password: Invalid Password Length - Must be > 6 Characters");
        } else {
            console.log("email: " + email);
            console.log("password: " + password);
        }
    }

    return(

        <div className={styles.body}>
<div className={styles.pics}>
<img src={form_image} alt="form_image" />
</div>
<div className={styles.form_container}>
<form>
                <img src={form_image2} className={styles.logo} alt="form_image" />

                <h1> Login to your Account</h1>
                <h2> See what is going on with your business</h2>

                <button className={styles.goog}> 
                    <img src={google} alt="google_logo" />
                    Continue with Google 

                </button>
                <br/>
                <p>---------------or Sign in with Email---------------</p>
                
                <div className={styles.em}>
                <label> Email </label>
                <input type="email" 
                email="email"   
                onChange={(event)=>setEmail(event.target.value)}
                /> 
                <br/>

                <label> password </label>
                <input type="text" 
                password="password"
                onChange={(event)=>setPassword(event.target.value)}
                /> 
                <br/>


                <button onClick={submitFormHandler} type="submit" className={styles.log}> Login </button>
<p className={styles.acc}>Not Registered Yet? Create an account</p>
                </div>
              
            </form>
</div>
        </div>
    );

}

export default Form2;