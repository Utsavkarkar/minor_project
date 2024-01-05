import React from "react";
import {Link} from "react-router-dom";

export default function ForgottenPass() {
    return (
        <>
            <div class="spacer"></div>

            <section class="forgotten_pass_form">
                <div class="container">
                    <div class="row">
                        <div class="col-4"></div>
                        <div class="col-lg-4 col-12">
                            <form action="" method="post">
                                <div class="row">
                                    <div class="col-12">
                                        <p class="form_title d-flex justify-content-center mt-4 fs-2">RESET PASSWORD</p>
                                    </div>

                                    <div class="col-12 pb-2 pt-4">
                                        <label for="" class="frm_label">New PassWord:</label>
                                    </div>
                                    <div class="col-12">
                                        <input type="text" class="frm_input" placeholder="Enter Your New PassWord Here..." width="100%" style={{borderRadius: "10px"}} />
                                    </div>

                                    <div class="col-12 pb-2 pt-4">
                                        <label for="" class="frm_label">Confirm PassWord:</label>
                                    </div>
                                    <div class="col-12">
                                        <input type="text" class="frm_input" placeholder="Enter Confirm PassWord Here..." width="100%" style={{borderRadius: "10px"}} />
                                    </div>

                                    <div class="col-12 pb-2 pt-5" >
                                        <input type="submit" value="Change Password" class="btn btn-outline-success mb-4 frm_input" style={{borderRadius: "30px"}} />
                                    </div>
                                    <hr />
                                    <div class="col-12 pb-2 pt-3 d-flex justify-content-center">
                                        Already Have An Account?<Link to="/login">Login</Link>
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