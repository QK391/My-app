/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import Meta from "../components/Meta";
import BreadColumd from "../components/BreadColumd";
import { AiOutlineHome, AiOutlineInfoCircle, AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
const Contact = () => {
    return (
        <>
            <Meta title={"Contact"} />
            <BreadColumd title="Contact" />
            <div className="contact-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29793.98045312624!2d105.81636411751941!3d21.022778419212855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab9bd9861ca1%3A0xe7887f7b72ca17a9!2zSMOgIE7hu5lpLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1698293397858!5m2!1svi!2s"
                                width="600"
                                height="550"
                                className="border:0 w-100"
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>
                        <div className="col-12 mt-5">
                            <div className="contact-inner-wrapper d-flex justify-content-center">
                                <div>
                                    <h3 className="contact-title mb-4">Contact Us</h3>
                                    <form action="" className="d-flex flex-column gap-15">
                                        <div>
                                            <input type="text" className="form-control" placeholder="Name" />
                                        </div>
                                        <div>
                                            <input type="text" className="form-control" placeholder="Email *" />
                                        </div>
                                        <div>
                                            <input type="text" className="form-control" placeholder="Phone number" />
                                        </div>
                                        <div>
                                            <textarea className="w-100 form-control" name="" id="" cols="30" rows="5" placeholder="Comment" />
                                        </div>

                                        <div>
                                            <button className="button border-0">Submit</button>
                                        </div>
                                    </form>
                                </div>
                                <div>
                                    <h3 className="contact-title mb-4">Get In Touch With Us</h3>
                                    <li className="d-flex">
                                        <AiOutlineHome className="fs-5 mx-3" />
                                        <address>30 Ly Thuong Kiet, Hoan Kiem, Ha Noi</address>
                                    </li>
                                    <li className="mb-2 d-flex">
                                        <BiPhoneCall className="fs-5 mx-3" />
                                        <a href="tel: 0399932989">0399932989</a>
                                    </li>
                                    <li className="mb-2 d-flex">
                                        <AiOutlineMail className="fs-5 mx-3" />
                                        <a href="mailto:abc5678@gmail.com">abc5678@gmail.com</a>
                                    </li>
                                    <li className="mb-2 d-flex">
                                        <AiOutlineInfoCircle className="fs-5 mx-3" />
                                        <p>Monday - Friday 10AM - 8PM</p>
                                    </li>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Contact;