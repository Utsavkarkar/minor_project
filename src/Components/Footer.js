import React from "react";

export default function Footer(){
    return (
        <footer className="footer_section">

        <div className="container">
            <div className="row">
                <div className="col-md-4 col-12 mt-3 mt-lg-5 fs-6">
                    <i className="fa-solid fa-boxes-packing d-flex justify-content-center"></i>
                    <p className="ms-3 d-flex justify-content-center footer_titles">Easy Returns</p>
                </div>
                <div className="col-md-4 col-12 mt-3 mt-lg-5 fs-6">
                    <i className="fa-solid fa-truck-fast d-flex justify-content-center"></i>
                    <p className="ms-3 d-flex justify-content-center footer_titles">Free Shipping</p>
                </div>
                <div className="col-md-4 col-12 mt-3 mt-lg-5 fs-6">
                    <i className="fa-solid fa-medal d-flex justify-content-center"></i>
                    <p className="ms-3 d-flex justify-content-center footer_titles">100% Authentic Products</p>
                </div>
                <hr />
            </div>
            <div className="row ">
                <div className="col-lg-4 col-md-6 mt-4">
                    <p className="d-flex justify-content-center mb-lg-3 fs-4 footer_titles">About Company</p>
                    <p className="d-flex justify-content-center footer_item">
                        <a href="aboutus.html">About Us</a>
                    </p>
                    <p className="d-flex justify-content-center footer_item">
                        <a href="#">Store Locator</a>
                    </p>
                    <p className="d-flex justify-content-center footer_item">
                        <a href="#">Blog</a>
                    </p>
                    <p className="d-flex justify-content-center footer_item">
                        <a href="#">FAQs</a>
                    </p>
                </div>
                <div className="col-lg-4 col-md-6 mt-4">

                    <p className="d-flex justify-content-center mb-lg-3 fs-4 footer_titles">Useful Links</p>
                    <p className="d-flex justify-content-center footer_item">
                        <a href="#">Track Your Order</a>
                    </p>
                    <p className="d-flex justify-content-center footer_item">
                        <a href="#">Warranty Registration</a>
                    </p>
                    <p className="d-flex justify-content-center footer_item">
                        <a href="#">Customer Care</a>
                    </p>
                    <p className="d-flex justify-content-center footer_item">
                        <a href="#">FeedBack</a>
                    </p>

                </div>
                <div className="col-lg-4 col-md-12 mt-4 mt-md-5 mt-lg-4">
                    <p className="d-flex justify-content-center mb-lg-3 fs-4 footer_titles">Social Media </p>
                    <div className="row social_icons">

                        <div className="col-3"></div>
                        <div className="col-6">
                            <div className="row mt-4">
                                <div className="col-3 icons">
                                    <a href="#">
                                        <i className="fa-brands fa-linkedin fs-3 "></i>
                                    </a>
                                </div>
                                <div className="col-3 icons">
                                    <a href="#">
                                        <i className="fa-brands fa-facebook fs-3 "></i>
                                    </a>
                                </div>
                                <div className="col-3 icons">
                                    <a href="#">
                                        <i className="fa-brands fa-twitter fs-3 "></i>
                                    </a>
                                </div>
                                <div className="col-3 icons">
                                    <a href="#">
                                        <i className="fa-brands fa-instagram fs-3 "></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-3"></div>

                    </div>
                </div>
            </div>
            <div className="spacer"></div>
        </div>
        <hr />
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <p className="d-flex justify-content-center" style={{color: "rgb(134, 134, 133)"}}>
                        &copy;&nbsp;2023,Enigma Watches
                    </p>
                </div>
            </div>
        </div>
    </footer>
    );
}