import React from 'react'
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <>
            {/* Footer Start */}
            <div
                className="container-fluid bg-dark footer py-5 wow fadeIn"
                data-wow-delay="0.1s"
            >
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-lg-3 col-md-6">
                            <h5 className="text-uppercase text-light mb-4">Our Office</h5>
                            <p className="mb-2">
                                <i className="fa fa-map-marker-alt text-primary me-3" />
                                 Street, Tuol Tumpung 
                            </p>
                            <p className="mb-2">
                                <i className="fa fa-phone-alt text-primary me-3" />
                                +012 345 67890
                            </p>
                            <p className="mb-2">
                                <i className="fa fa-envelope text-primary me-3" />
                                Belteiuniversity@example.com
                            </p>
                            <div className="d-flex pt-3">
                                <a className="btn btn-square btn-light me-2" href="#">
                                    <i className="fab fa-twitter" />
                                </a>
                                <a className="btn btn-square btn-light me-2" href="#">
                                    <i className="fab fa-facebook-f" />
                                </a>
                                <a className="btn btn-square btn-light me-2" href="#">
                                    <i className="fab fa-youtube" />
                                </a>
                                <a className="btn btn-square btn-light me-2" href="#">
                                    <i className="fab fa-linkedin-in" />
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <h5 className="text-uppercase text-light mb-4">Quick Links</h5>
                            <Link className="btn btn-link" to="/about">About Us</Link>
                            <Link className="btn btn-link" to="/contact">Contact Us</Link>
                            <Link className="btn btn-link" to="/service">Our Services</Link>
                            <Link className="btn btn-link" to="#">Terms & Condition</Link>
                            <Link className="btn btn-link" to="#">Support</Link>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <h5 className="text-uppercase text-light mb-4">Business Hours</h5>
                            <p className="text-uppercase mb-0">Monday - Friday</p>
                            <p>09:00 am - 07:00 pm</p>
                            <p className="text-uppercase mb-0">Saturday</p>
                            <p>09:00 am - 12:00 pm</p>
                            <p className="text-uppercase mb-0">Sunday</p>
                            <p>Closed</p>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <h5 className="text-uppercase text-light mb-4">Gallery</h5>
                            <div className="row g-1">
                                <div className="col-4">
                                    <img className="img-fluid" src={process.env.PUBLIC_URL + "/img/service-1.jpg"} alt="Gallery 1" />
                                </div>
                                <div className="col-4">
                                    <img className="img-fluid" src={process.env.PUBLIC_URL + "/img/service-2.jpg"} alt="Gallery 2" />
                                </div>
                                <div className="col-4">
                                    <img className="img-fluid" src={process.env.PUBLIC_URL + "/img/service-3.jpg"} alt="Gallery 3" />
                                </div>
                                <div className="col-4">
                                    <img className="img-fluid" src={process.env.PUBLIC_URL + "/img/service-4.jpg"} alt="Gallery 4" />
                                </div>
                                <div className="col-4">
                                    <img className="img-fluid" src={process.env.PUBLIC_URL + "/img/service-5.jpg"} alt="Gallery 5" />
                                </div>
                                <div className="col-4">
                                    <img className="img-fluid" src={process.env.PUBLIC_URL + "/img/service-6.jpg"} alt="Gallery 6" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer End */}

            {/* Copyright Start */}
            <div className="container-fluid text-body copyright py-4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            ©{" "}
                            <a className="fw-semi-bold" href="#">
                                CHOEM CHERTH
                            </a>
                            , All Rights Reserved.
                        </div>
                        <div className="col-md-6 text-center text-md-end">
                            Designed By{" CHERTH "}
                            <a className="fw-semi-bold" href="https://htmlcodex.com" target="_blank" rel="noreferrer">
                                HTML Codex
                            </a>{" "}
                            Distributed by{" "}
                            <a href="https://themewagon.com" target="_blank" rel="noreferrer">
                                ThemeWagon
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Copyright End */}
        </>
    )
}
