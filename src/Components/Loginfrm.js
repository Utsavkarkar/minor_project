import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export default function Loginfrm() {
    
    const navigate = useNavigate();
    // const [form, setForm] = useState({});
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [loginStatus, setloginstatus] = useState('');

    // const handelForm = (e) => {
    //     setForm({
    //         ...form,
    //         [e.target.name]: e.target.value
    //     })
    //     console.log(e.target.name)

    // }


    const handleSubmit = async (e) => {
        e.preventDefault();

        // const obj = {
        //     email: email,
        //     password: password
        // }

        axios.post('http://localhost:8000/login', {
            email: email,
            password: password
        }).then((response)=>{

            console.log(response.data.status);

            if(response.data.status === "You Are Already Logged In..." || response.data.status === "You Are Logged In..."){ 
                navigate('/');
                console.log(response)
                localStorage.setItem('status',JSON.stringify(response.data.status));
            }else{
                navigate('/login');
                setloginstatus( "Please Enter Valid Email Or Password.")
            }
        })
            // .then(function (response) {
            //     // handle success
            //     console.log(response.status);
            // })
            // .catch(function (error) {
            //     // handle error
            //     console.log(error);
            // })
            // .finally(function () {
            //     // always executed
            // });


        // const response = await fetch('http://localhost:8000/login', {
        //     method: 'POST',
        //     body: obj,
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // })
        // console.log(response.status);
        // if(response.status === 200){

        //     navigate("/");

        // }else{
        //     navigate("/login");

        // }
    }
    return (
        <>
            <section class="Registration_form">
                <div class="container">
                    <div class="row">
                        <div class="col-4"></div>
                        <div class="col-lg-4 col-12">
                            <form onSubmit={handleSubmit}>
                                <div class="row">
                                    <div class="col-12">
                                        <p class="form_title d-flex justify-content-center mt-4 fs-2">LOGIN TO ENIGMA</p>
                                    </div>
                                    <h6 className="text-danger">{loginStatus}</h6>
                                    <div class="col-12 pb-2 pt-4">
                                        <label for="" class="frm_label">Email:</label>
                                    </div>
                                    <div class="col-12">
                                        <input type="email" name="email" onChange={(e) => { setemail(e.target.value) }} placeholder="Enter Your Email Here..." width="100%" class="frm_input" style={{ borderRadius: "10px" }} required />
                                    </div>
                                    <div class="col-12 pb-2 pt-4">
                                        <label for="" class="frm_label">PassWord:</label>
                                    </div>
                                    <div class="col-12">
                                        <input type="password" name="password" onChange={(e) => { setpassword(e.target.value) }} placeholder="Enter Your PassWord Here..." width="100%" class="frm_input" style={{ borderRadius: "10px" }} required />
                                    </div>
                                    <div class="col-12 pb-2 pt-5" >
                                        <input type="submit" value="Log In" class="btn btn-outline-success frm_input" style={{ borderRadius: "30px" }} />
                                    </div>
                                    <div class="col-12 pb-4 pt-4 d-flex justify-content-center">
                                        <Link to="/forgottenPass">Forgot Password?</Link>
                                    </div>
                                    <hr />
                                    <div class="col-12 pb-2 pt-3 d-flex justify-content-center">
                                        Don't Have An Account?<Link to="/regifrm">Sign Up</Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="col-4"></div>
                    </div>
                </div>
            </section>

            <div class="spacer"></div>
        </>
    );
}