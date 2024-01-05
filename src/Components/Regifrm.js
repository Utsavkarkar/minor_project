import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Regifrm() {

    const [form, setForm] = useState({});

    const navigate = useNavigate();

    const handelForm = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:8000/register', {
            method: 'POST',
            body: JSON.stringify(form),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        
        if(response.status == 200){
            navigate("/login");
            document.getElementById('lg_form').style.display="none";
        }

    }


    return (
        <>
            <section className="Registration_form">
                <div className="container">
                    <div className="row ">
                        <div className="col-3"></div>
                        <div className="col-md-6 col-12">
                            <form onSubmit={handleSubmit} >
                                {/* <p>{JSON.stringify(form)}</p> */}
                                <div className="row">
                                    <div className="col-12">
                                        <p className="form_title d-flex justify-content-center mt-3 fs-2">REGISTER HERE</p>
                                    </div>
                                    <div className="col-12 pb-2">
                                        <label className="frm_label">First Name:</label>
                                    </div>
                                    <div className="col-12">
                                        <input type="text" className="frm_input" placeholder="Enter Your First Name Here..." name="fname" onChange={handelForm} width="100%" required />
                                    </div>
                                    <div className="col-12 pb-2 pt-4">
                                        <label className="frm_label">Last Name:</label>
                                    </div>
                                    <div className="col-12">
                                        <input type="text" className="frm_input" placeholder="Enter Your Last Name Here" name="lname" onChange={handelForm} width="100%" required />
                                    </div>
                                    <div className="col-12 pb-2 pt-4">
                                        <label className="frm_label">Email:</label>
                                    </div>
                                    <div className="col-12">
                                        <input type="email" className="frm_input" placeholder="Enter Your Email Here..." name="email" onChange={handelForm} width="100%" required />
                                    </div>
                                    <div className="col-12 pb-2 pt-4">
                                        <label className="frm_label">PassWord:</label>
                                    </div>
                                    <div className="col-12">
                                        <input type="password" className="frm_input" placeholder="Enter Your PassWord Here..." name="password" onChange={handelForm} width="100%" required />
                                    </div>

                                    <div className="col-6 pb-2 pt-4">
                                        <input type="submit" value="Sign Up" className="btn btn-outline-success frm_input" style={{ borderRadius: "30px" }} />
                                    </div>
                                    <div className="col-6 pb-2 pt-4">
                                        <input type="reset" value="Reset" className="btn btn-outline-primary frm_input" style={{ borderRadius: "30px" }} />
                                    </div>

                                    <div className="col-12 pb-2 pt-3 d-flex justify-content-center">
                                        Already Have An Account?<Link to="/login">Login</Link>
                                    </div>

                                </div>
                            </form>
                        </div>
                        <div className="col-3"></div>
                    </div>
                </div>
            </section>
            <div className="spacer"></div>
        </>
    );
}