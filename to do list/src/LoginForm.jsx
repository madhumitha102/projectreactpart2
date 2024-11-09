import React, { useState } from "react";
import './Login.css'


function LoginForm() {

    const [mail, setmail] = useState("")
    const [password, setpassword] = useState("")
    

    const handlelogin = (event) => {
        event.preventdefault()

        console.log('mail :', mail);
        console.log('password :', password);

    };


    const handleCancel = () => {
        console.log("Cancel button clicked");
      };

    return (
        <div className="d1">
            <h1>LOGIN PLEASE</h1>
            <form onSubmit={handlelogin}>
                <div className="d2">
                    <label>Email :</label>

                    <input type="email" placeholder="abc@gmail.com"
                        value={mail}
                        onChange={(e) => setmail(e.target.value)}
                        required />
                </div>

                <div className="d3">
                    <label >Password :</label>
                    <input type="password"
                        value={password}
                        onChange={(e) => setpassword(e.target.value)}
                        required />
                </div>
                <button type="submit">Login</button>
                <button onClick={handleCancel}>Cancel</button>

            </form>

        </div>
    )
}

export default LoginForm