import React from "react";
import BreadColumd from "../components/BreadColumd";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
const Forgotpassword = () => {
    return (
        <>
            <Meta title={"Forgot Password"} />
            <BreadColumd title="Forgot Password" />
            <div className="login-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                        <div className="auth-card">
                            <h3 className="text-center mb-3">
                                Reset Your Password
                            </h3>
                            <p className="text-center mt-2 mb-3">
                                We will send you an email to reset your password
                            </p>
                            <form action="" className="d-flex flex-column gap-15">
                                <div>
                                    <input type="email"
                                        name="email"
                                        placeholder="Email"
                                        className="form-control"
                                    />
                                </div>
                                <div>
                                    {/* <Link className="forgot-password" to="/forgot-password">Forgot Password ?</Link> */}
                                    <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                                        <button className="button border-0">Submit</button>
                                        <Link className="button signup" to="/login">Cancel</Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}
export default Forgotpassword;