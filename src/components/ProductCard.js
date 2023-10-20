import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const ProductCard = () => {
    return (
        <div className="col-3">
            <Link className="product-card position-relative">
                <div className="wishlist-icon position-absolute">
                    <Link><img src="images/wish.svg" alt="wishlist"/></Link>
                </div>
                <div className="product-image">
                    <img src="images/watch.jpg" alt="product_image" />
                </div>
                <div className="product-details">
                    <h6 className="brand">Haves</h6>
                    <h5 className="product-title">
                        kids headphones bulk 10 pack multi colored for students
                    </h5>
                    <ReactStars count={5} size={20} value="3" activeColor="#ffd700"/>

                    <p className="price">$100.00</p>
                </div>
                <div className="action-bar position-absolute">
                    <div className="d-flex flex-column gap-15">
                        <Link>
                        <img src="images/prodcompare.svg" alt="prodcompare"/>
                        </Link>
                        <Link>
                        <img src="images/view.svg" alt="view"/>
                        </Link>
                        <Link>
                        <img src="images/add-cart.svg" alt="addcart"/>
                        </Link>
                    </div>
                </div>
            </Link>
        </div>
    )
}
export default ProductCard;