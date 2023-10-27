import React from "react";
import { Link } from "react-router-dom";
const Blogcard = () => {
    return (
        <div className="blog-card">
            <div className="card-image">
                <img className="img-fluid w-100" src="images/blog-1.jpg" alt="blog"/>
            </div>
            <div className="blog-content">
                <p className="date">1 Dec 2023</p>
                <h5 className="title">
                    A Beautiful sunday morning renaissance
                </h5>
                <p className="desc">
                    React Fast Marquee is a lightweight React component that harnesses the power of
                    CSS animations to create silky smooth marquees.
                </p>
                <Link to="/" className="button">Read More</Link>
            </div>
        </div>
    )
}
export default Blogcard;