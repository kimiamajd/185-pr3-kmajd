import React, {useState} from 'react';
import '../FormTab.css';

function FormTab() {

    const [email, setEmail] = useState('');
    const err = document.getElementById("err");
    const no_err = document.getElementById("no_err");

    function submitEmail(event){
        event.preventDefault();
        var isValid = validateEmail(email);
        if (isValid){
            no_err.style.display = "block";
            err.style.display = "none";
            console.log("valid");
        }
        else {
            err.style.display = "block";
            no_err.style.display = "none";
            console.log("invalid");
        }
        setEmail('');
        return;
    }

    function validateEmail(email){
        var lastThree = email.substr(email.length - 4);
        if (email.includes("@") && (lastThree === ".com" || lastThree === ".edu")){
            return true;
        }
        else{
            return false;
        }
    }


    function handleChange(event){
        setEmail(event.target.value);
    }
    return (
        <div className = 'formBox'>
            <h3>Add yourself to our email list!</h3>
            <form onSubmit = {(e) => submitEmail(e)}>
                <label>
                    Enter your email: 
                    <input type = 'text' id = 'email' name = 'email' value = {email} onChange = {handleChange}></input>
                    
                </label>
                
                <div id = "no_err" class = "no_err"> Email successfully recorded</div>
                <div id = "err" class = "err">Invalid email address</div>
                
                <div>
                <input type = "submit" value = "Submit"/>
                </div>
            </form>
        </div>
    )
}

export default FormTab;