import React from "react";
import Meta from "../components/Meta";
import BreadColumd from "../components/BreadColumd";
const WishList = () => {
    return (
        <>
            <Meta title={"WishList"} />
            <BreadColumd title="WishList" />
            <div className="wishlist-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-3">
                            <div className="wishlist-card position-relative">
                                <img src="images/cross.svg"
                                    alt="cross"
                                    className="position-absolute cross"
                                />
                                <div className="wishlist-card-image">
                                    <img src="images/watch.jpg" className="img-fluid w-100" alt="watch" />
                                </div>
                                <div className="py-3 px-3">
                                    <h5 className="title">Samsum Watch</h5>
                                    <h6 className="price">$ 100</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="wishlist-card position-relative">
                                <img src="images/cross.svg"
                                    alt="cross"
                                    className="position-absolute cross"
                                />
                                <div className="wishlist-card-image">
                                    <img src="images/watch.jpg" className="img-fluid w-100" alt="watch" />
                                </div>
                                <div className="py-3 px-3">
                                    <h5 className="title">Samsum Watch</h5>
                                    <h6 className="price">$ 100</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="wishlist-card position-relative">
                                <img src="images/cross.svg"
                                    alt="cross"
                                    className="position-absolute cross"
                                />
                                <div className="wishlist-card-image">
                                    <img src="images/watch.jpg" className="img-fluid w-100" alt="watch" />
                                </div>
                                <div className="py-3 px-3">
                                    <h5 className="title">Samsum Watch</h5>
                                    <h6 className="price">$ 100</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default WishList;