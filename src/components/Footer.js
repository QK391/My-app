import React from "react";
import { Link } from "react-router-dom";
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram, BsFacebook } from "react-icons/bs";
const Footer = () => {
    return <>
        <footer className="py-4">
            <div className="container-xxl">
                <div className="row align-items-center">
                    <div className="col-5">
                        <div className="footer-top-data d-flex gap-30 align-items-center">
                            <img src="images/newsletter.png" alt="newsletter" />
                            <h2 className="mb-0 text-white">Sign Up For Newsletter</h2>
                        </div>
                    </div>
                    <div className="col-7">
                        <div className="input-group">
                            <input type="text"
                                className="form-control py-1"
                                placeholder="Your Email Address"
                                aria-label="Your Email Address"
                                aria-describedby="basic-addon2" />
                            <span
                                className="input-group-text p-2"
                                id="basic-addon2">
                                Subscribe
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <footer className="py-4">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-4">
                        <h4 className="text-white mb-4">Contact Us</h4>
                        <div className="text-white fs-6">
                            <address>Address : 135 Kim Ma, Ba Dinh, Ha Noi
                                <br /> Pincode: 100000
                            </address>
                            <a href="tel: 0399932989" className="mt-4 d-block mb-1 text-white">0399932989</a>
                            <a href="mailto:abc5678@gmail.com" className="mt-4 d-block mb-0 text-white">abc5678@gmail.com</a>
                            <div className="social-icons d-flex align-items-center gap-30 mt-4">
                                <a className="text-white" href=" #">
                                    <BsLinkedin className="fs-5" />
                                </a>
                                <a className="text-white" href=" #">
                                    <BsInstagram className="fs-5" />
                                </a>
                                <a className="text-white" href=" #">
                                    <BsYoutube className="fs-5" />
                                </a>
                                <a className="text-white" href=" #">
                                    <BsFacebook className="fs-5" />
                                </a>
                                <a className="text-white" href=" #">
                                    <BsGithub className="fs-5" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <h4 className="text-white mb-4">Infomation</h4>
                        <div className="footer-links d-flex flex-column">
                            <Link to="/privacy-policy" className="text-white py-2 mb-1">Porivacy Policy</Link>
                            <Link to="/refund-policy" className="text-white py-2 mb-1">Refund Policy</Link>
                            <Link to="/shipping-policy" className="text-white py-2 mb-1">Shipping Policy</Link>
                            <Link to="/term-and-conditions" className="text-white py-2 mb-1">Terms & Conditions</Link>
                            <Link to="" className="text-white py-2 mb-1">Blogs</Link>
                        </div>
                    </div>
                    <div className="col-3">
                        <h4 className="text-white mb-4">Account</h4>
                        <div className="footer-links d-flex flex-column">
                            <Link className="text-white py-2 mb-1">About Us</Link>
                            <Link className="text-white py-2 mb-1">Faq</Link>
                            <Link className="text-white py-2 mb-1">Contact</Link>
                        </div>
                    </div>
                    <div className="col-2">
                        <h4 className="text-white mb-4">Quick Links</h4>
                        <div className="footer-links d-flex flex-column">
                            <Link className="text-white py-2 mb-1">Laptops</Link>
                            <Link className="text-white py-2 mb-1">Headphones</Link>
                            <Link className="text-white py-2 mb-1">Tablets</Link>
                            <Link className="text-white py-2 mb-1">Watch</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <footer className="py-4">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12 mb-0 text-white">
                        <p className="text-center">&copy;{new Date().getFullYear()}; Powered by Developer Corner</p>
                    </div>
                </div>
            </div>
        </footer>
    </>
}
export default Footer;