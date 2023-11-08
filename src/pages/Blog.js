import React from "react";
import Meta from "../components/Meta";
import BreadColumd from "../components/BreadColumd";
import Blogcard from "../components/Blogcard";
import Container from "../components/Container";
const Blog = () => {
    return <>
        <Meta title={"Blog"} />
        <BreadColumd title="Blog" />
        <Container class1="blog-wrapper home-wrapper-2 py-5">
                <div className="row">
                    <div className="col-3">
                        <div className="filter-card mb-3">
                            <h3 className="filter-title">Shop Buy Categories</h3>
                            <div>
                                <ul className="ps-0">
                                    <li>Watch</li>
                                    <li>TV</li>
                                    <li>Camera</li>
                                    <li>Laptop</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-9">
                        <div className="row">
                            <div className="col-6 mb-3">
                                <Blogcard />
                            </div>
                            <div className="col-6 mb-3">
                                <Blogcard />
                            </div>
                            <div className="col-6 mb-3">
                                <Blogcard />
                            </div>
                            <div className="col-6 mb-3">
                                <Blogcard />
                            </div>
                        </div>
                    </div>
                </div>
        </Container>
    </>
}
export default Blog;