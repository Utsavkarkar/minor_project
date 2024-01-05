import React from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

export default function Home() {
    return (
        <>
            {/* <!-- banner section start --> */}
            <section class="section_1">
                <div class="banner">

                    <div id="main_banner" class="owl-carousel owl-theme">
                        <div class="item">
                            <img src="images/banner3.webp" alt="" />
                        </div>
                        <div class="item">
                            <img src="images/banner1.webp" alt="" />
                        </div>
                    </div>
                    {/* <Splide options={{ rewind: true }} aria-label="React Splide Example">
                        <SplideSlide>
                            <img src="images/banner3.webp" alt="Image 1" />
                        </SplideSlide>
                        <SplideSlide>
                            <img src="images/banner1.webp" alt="Image 2" />
                        </SplideSlide>
                    </Splide> */}
                </div>
            </section>
            {/* <!-- banner section end --> */}

            {/* <!-- Second section start --> */}

            <section class="section_2">

                <div class="spacer"></div>
                <div class="container all_titles">
                    <p class="mb-md-5 all_titles">NEW LAUNCHES</p>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 col-12 mb-lg-0 mb-4  sec_2_img ">
                            <img src="images/section_2_img1.jpg" alt="" />
                        </div>
                        <div class="col-lg-6 col-12 mb-lg-0 mb-3  sec_2_img ">
                            <img src="images/section_2_img_2.jpg" alt="" />
                        </div>
                    </div>
                </div>
                <div class="spacer"></div>
            </section>
            {/* <!-- Second section end --> */}


            {/* <!-- Third section start --> */}


            {/* <!-- Third section end --> */}

            {/* <!-- forth Section start --> */}

            <div class="container all_titles">
                <p class="mb-md-5 all_titles">Our Watch Collection</p>
            </div>
            <div class="container-fluid">
                <div class="row my-4">
                    <div class="col-lg-3 col-md-6 col-6 mb-md-5 img_sec_4">
                        <img src="images/sec_1.webp" class="card-img-top" alt="..." />
                        <h5 class="card-title d-flex justify-content-center">TIMEGRAPHER</h5>
                        <a href="#" class="btn btn-primary d-flex justify-content-center">Buy Now</a>
                    </div>
                    <div class="col-lg-3 col-md-6 col-6 mb-md-5 img_sec_4">
                        <img src="images/sec_2.webp" class="card-img-top" alt="..." />
                        <h5 class="card-title d-flex justify-content-center">ICONIC</h5>
                        <a href="#" class="btn btn-primary d-flex justify-content-center">Buy Now</a>
                    </div>
                    <div class="col-lg-3 col-md-6 col-6 mb-md-5 img_sec_4">
                        <img src="images/sec_3.webp" class="card-img-top" alt="..." />
                        <h5 class="card-title d-flex justify-content-center">IMPERIAL</h5>
                        <a href="#" class="btn btn-primary d-flex justify-content-center">Buy Now</a>
                    </div>
                    <div class="col-lg-3 col-md-6 col-6 mb-md-5 img_sec_4">
                        <img src="images/sec_4.webp" class="card-img-top" alt="..." />
                        <h5 class="card-title d-flex justify-content-center">HAWK</h5>
                        <a href="#" class="btn btn-primary d-flex justify-content-center">Buy Now</a>
                    </div>
                </div>

                <div class="row my-4">
                    <div class="col-lg-3 col-md-6 col-6 mb-md-5 img_sec_4">
                        <img src="images/sec_5.webp" class="card-img-top" alt="..." />
                        <h5 class="card-title d-flex justify-content-center">EVOKE</h5>
                        <a href="#" class="btn btn-primary d-flex justify-content-center">Buy Now</a>
                    </div>
                    <div class="col-lg-3 col-md-6 col-6 mb-md-5 img_sec_4">
                        <img src="images/sec_6.webp" class="card-img-top" alt="..." />
                        <h5 class="card-title d-flex justify-content-center">SPORTS</h5>
                        <a href="#" class="btn btn-primary d-flex justify-content-center">Buy Now</a>
                    </div>
                    <div class="col-lg-3 col-md-6 col-6 mb-md-5 img_sec_4">
                        <img src="images/sec_7.webp" class="card-img-top" alt="..." />
                        <h5 class="card-title d-flex justify-content-center">RIG ONE 'O ONE</h5>
                        <a href="#" class="btn btn-primary d-flex justify-content-center">Buy Now</a>
                    </div>
                    <div class="col-lg-3 col-md-6 col-6 mb-md-5 img_sec_4">
                        <img src="images/sec_8.webp" class="card-img-top" alt="..." />
                        <h5 class="card-title d-flex justify-content-center">VELOCITY</h5>
                        <a href="#" class="btn btn-primary d-flex justify-content-center">Buy Now</a>
                    </div>
                </div>
            </div>
            <div class="spacer"></div>

            {/* <!-- forth Section end --> */}

            {/* <!-- fifth section start --> */}

            <section class="fifth_section">
                <div class="spacer"></div>
                <div class="container ">
                    <div class="row">
                        <div class="col-2"></div>
                        <div class="col-lg-8 col-12 fifth_main">
                            <div class="row">
                                <div class="col-12 all_titles">
                                    <p class="mt-lg-5 mt-3 ">About Enigma Watches Store</p>
                                    <hr />
                                </div>
                            </div>
                            <div class="row mt-lg-3 mb-lg-4 mb-3">
                                <div class="col-4 class_for_rightborder">
                                    <h2 class="d-flex justify-content-center">20+</h2>
                                    <p class="d-flex justify-content-center text-center ">Years Of <br /> Legacy</p>
                                </div>
                                <div class="col-4 class_for_rightborder">
                                    <h2 class="d-flex justify-content-center">55+</h2>
                                    <p class="d-flex justify-content-center text-center">Boutiques & authorised<br />Service
                                        Centres</p>
                                </div>
                                <div class="col-4 ">
                                    <h2 class="d-flex justify-content-center">45+</h2>
                                    <p class="d-flex justify-content-center text-center">Curated House<br />of Brands</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col mb-lg-4 mb-2 d-flex justify-content-center">
                                    <a href="#" class="text-info">Know More About Us</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-2"></div>
                    </div>
                </div>
                <div class="spacer"></div>
            </section>

            {/* <!-- fifth section end --> */}

            {/* <!-- sixth section start --> */}

            <section>
                <div class="spacer"></div>
                <div class="container sec_sli">
                    <div id="sec_slider" class="owl-carousel owl-theme">
                        <div class="item">
                            <a href="#" class="text-decoration-none">
                                <img src="images/slider_img_1.webp" alt="" />
                                <p class="text-center mt-lg-3 mt-2">WOMENS</p>
                            </a>
                        </div>
                        <div class="item">
                            <a href="#" class="text-decoration-none">
                                <img src="images/slider_img_2.webp" alt="" />
                                <p class="text-center mt-lg-3 mt-2">MENS</p>
                            </a>
                        </div>
                        <div class="item">
                            <a href="#" class="text-decoration-none">
                                <img src="images/slider_img_3.webp" alt="" />
                                <p class="text-center mt-lg-3 mt-2">SMART WATCHES</p>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="spacer"></div>
            </section>

            {/* <!-- sixth section end --> */}

            {/* <!-- seventh section start --> */}

            <section class="seventh_sec">
                <div class="container all_titles mb-4">
                    <p>Right Way To Find The Right Gift</p>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <img src="images/new_section_add.webp" alt="" width="100%" style={{ borderRadius: "20px" }} />
                        </div>
                    </div>
                </div>
            </section>
            <div class="spacer"></div>

            {/* <!-- seventh section end --> */}
        </>
    );
}