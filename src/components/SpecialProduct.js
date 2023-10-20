import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const SpecialProduct = () => {
    return <div className="col-4">
        <div className="special-product-card">
            <div className="d-flex justify-content-between">
                <div>
                    <img src="images/watch.jpg" className="img-fluid" alt="" />
                </div>
                <div className="special-product-content">
                    <h5 className="brand">Havels</h5>
                    <h6 className="title">
                        Samsung Galaxy Note10+ Mobile Phone
                    </h6>
                    <ReactStars count={5} size={20} value="3" activeColor="#ffd700" />
                    <p className="price">
                        <span className="red-p">$100</span> &nbsp; <strike>$200</strike>
                    </p>
                    <div className="discount-till d-flex align-items-center gap-10">
                        <p className="mb-0">
                            <b>5</b> days
                        </p>
                        <div className="d-flex gap-10 align-items-center">
                            <span className="badge rouned-cirlce p-2 bg-warning">1</span>:
                            <span className="badge rouned-cirlce p-2 bg-warning">1</span>:
                            <span className="badge rouned-cirlce p-2 bg-warning">1</span>
                        </div>
                    </div>
                    <div className="prod-count my-3">
                        <p>Products: 5</p>
                        <div className="progress">
                            <div className="progress-bar"
                                role="progressbar"
                                aria-valuenow="25"
                                aria-valuemin="0"
                                aria-valuemax="100"
                                style={{ "width": "25%" }}>
                            </div>
                        </div> 
                    </div>
                    <Link className="button">Add to cart</Link>
                </div>
            </div>
        </div>
    </div>
}
export default SpecialProduct;