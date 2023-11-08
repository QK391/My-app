import React from "react";
import Meta from "../components/Meta";
import BreadColumd from "../components/BreadColumd";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Container from "../components/Container";

const Singleblog = () => {
    return (
        <>
            <Meta title={"Dynamic Blog Name"} />
            <BreadColumd title="Dynamic Blog Name" />
            <Container class1="blog-wrapper home-wrapper-2 py-5">
                    <div className="row">
                        <div className="col-12">
                            <div className="single-blog-card">
                                <Link to="/blogs" className="d-flex align-items-center gap-10">
                                    <FaArrowLeftLong/>Go Back to Blogs
                                    </Link>
                                <h3 className="title">
                                    A Beautiful Sunday Morning Renaissance
                                </h3>
                                <img src="images/main-banner.jpg" className="img-fluid w-100 my-4" alt="blog"/>
                                <p>
                                Instead, it will copy all the configuration files and the transitive dependencies
                                (webpack, Babel, ESLint, etc) right into your project so you have full control over them.
                                All of the commands except eject will still work, but they will point to the copied scripts so you can tweak them.
                                At this point you're on your own.
                                </p>
                            </div>
                        </div>
                    </div>
            </Container>
        </>
    )
}
export default Singleblog;