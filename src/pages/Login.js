import React from "react";
import Meta from "../components/Meta";
import BreadColumd from "../components/BreadColumd";
import { Link } from "react-router-dom";
import { useFormik } from 'formik';
import * as yup from 'yup';
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
import { useDispatch } from "react-redux";
import { loginUser } from "../features/user/userSlide";

const loginSchema = yup.object({
    email: yup.string().email("Email Should be valid")
        .required("Email Address is Required"),
    password: yup.string().required("Password is Required"),
});

const Login = () => {
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: loginSchema,
        onSubmit: (values) => {
            dispatch(loginUser(values))
        },
    });
    return (
        <>
            <Meta title={"Login"} />
            <BreadColumd title="Login" />
            <Container className="login-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-12">
                        <div className="auth-card">
                            <h3 className="text-center mb-3">Login</h3>
                            <form action="" onSubmit={formik.handleSubmit} className="d-flex flex-column gap-15">
                                <CustomInput type="email"
                                    name="email"
                                    placeholder="Email"
                                    onChange={formik.handleChange("email")}
                                    onBlur={formik.handleBlur("email")}
                                    value={formik.values.email}
                                />
                                <div className="error">
                                    {formik.touched.email && formik.errors.email}
                                </div>

                                <CustomInput type="password"
                                    name="password"
                                    placeholder="Password"
                                    onChange={formik.handleChange("password")}
                                    onBlur={formik.handleBlur("password")}
                                    value={formik.values.email}
                                />
                                <div className="error">
                                    {formik.touched.password && formik.errors.password}
                                </div>
                                <div>
                                    <Link className="forgot-password" to="/forgot-password">Forgot Password ?</Link>
                                    <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                                        <button className="button border-0" type="submit">Login</button>
                                        <Link className="button signup" to="/signup">SignUp</Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}
export default Login;