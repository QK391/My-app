import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import Blogcard from "../components/Blogcard";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";
const Home = () => {
    return <>
        <section className="home-wrapper-1 py-5">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-6">
                        <div className="main-banner position-relative">
                            <img src="images/main-banner-1.jpg" alt="main banner"
                                className="img-fluid rounded-3"
                            />
                            <div className="main-banner-content position-absolute">
                                <h4>suppercharged for pro</h4>
                                <h5>iPad S13+ Pro</h5>
                                <p>From $999.00 or $41.62mo</p>
                                <Link className="button">BUY NOW</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
                            <div className="small-banner position-relative">
                                <img src="images/catbanner-01.jpg" alt="main banner"
                                    className="img-fluid rounded-3"
                                />
                                <div className="small-banner-content position-absolute">
                                    <h4>best sale</h4>
                                    <h5>Laptops Max</h5>
                                    <p>From $1699.00 or $64.62mo</p>
                                </div>
                            </div>
                            <div className="small-banner position-relative">
                                <img src="images/catbanner-02.jpg" alt="main banner"
                                    className="img-fluid rounded-3"
                                />
                                <div className="small-banner-content position-absolute">
                                    <h4>15% off</h4>
                                    <h5>Smash Watch 7</h5>
                                    <p>Shop the lates band <br /> style and color</p>
                                </div>
                            </div>
                            <div className="small-banner position-relative">
                                <img src="images/catbanner-03.jpg" alt="main banner"
                                    className="img-fluid rounded-3"
                                />
                                <div className="small-banner-content position-absolute">
                                    <h4>New Arrival</h4>
                                    <h5>Buy IPad Air</h5>
                                    <p>From $599 or $49.91mo. for 12 mo</p>
                                </div>
                            </div>
                            <div className="small-banner position-relative">
                                <img src="images/catbanner-04.jpg" alt="main banner"
                                    className="img-fluid rounded-3"
                                />
                                <div className="small-banner-content position-absolute">
                                    <h4>free engraving</h4>
                                    <h5>AirPods Max</h5>
                                    <p>High-fedility playback & <br /> ultra-alow distortion</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="home-wrapper-2 py-5">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                        <div className="services d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center gap-15">
                                <img src="images/service.png" alt="services" />
                                <div>
                                    <h6>Free Shipping</h6>
                                    <p className="mb-0">From all oder over $100</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center gap-15">
                                <img src="images/service-02.png" alt="" />
                                <div>
                                    <h6>Daily Surprice Offers</h6>
                                    <p className="mb-0">Save up to 25% off</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center gap-15">
                                <img src="images/service-03.png" alt="" />
                                <div>
                                    <h6>Support 24/7</h6>
                                    <p className="mb-0">Shop with an expert</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center gap-15">
                                <img src="images/service-04.png" alt="" />
                                <div>
                                    <h6>Affodable Prices</h6>
                                    <p className="mb-0">Get factory direct price</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center gap-15">
                                <img src="images/service-05.png" alt="" />
                                <div>
                                    <h6>Secure Payments</h6>
                                    <p className="mb-0">100% Protected Payments</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="home-wrapper-2 py-5">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                        <div className="categories d-flex justify-content-between flex-wrap align-items-center">
                            <div className="d-flex gap align-items-center">
                                <div>
                                    <h6>Music & Gaming</h6>
                                    <p>10 Items</p>
                                </div>
                                <img src="images/speaker.jpg" alt="camera" />
                            </div>
                            <div className="d-flex gap align-items-center">
                                <div>
                                    <h6>Cameras</h6>
                                    <p>10 Items</p>
                                </div>
                                <img src="images/camera.jpg" alt="camera" />
                            </div>
                            <div className="d-flex gap align-items-center">
                                <div>
                                    <h6>Smart TV</h6>
                                    <p>10 Items</p>
                                </div>
                                <img src="images/tv.jpg" alt="camera" />
                            </div>
                            <div className="d-flex gap align-items-center">
                                <div>
                                    <h6>Smart Watches</h6>
                                    <p>10 Items</p>
                                </div>
                                <img src="images/headphone.jpg" alt="camera" />
                            </div>

                            <div className="d-flex gap align-items-center">
                                <div>
                                    <h6>Music & Gaming</h6>
                                    <p>10 Items</p>
                                </div>
                                <img src="images/acc.jpg" alt="camera" />
                            </div>
                            <div className="d-flex gap align-items-center">
                                <div>
                                    <h6>Cameras</h6>
                                    <p>10 Items</p>
                                </div>
                                <img src="images/camera.jpg" alt="camera" />
                            </div>
                            <div className="d-flex gap align-items-center">
                                <div>
                                    <h6>Smart TV</h6>
                                    <p>10 Items</p>
                                </div>
                                <img src="images/tv.jpg" alt="camera" />
                            </div>
                            <div className="d-flex gap align-items-center">
                                <div>
                                    <h6>Smart Watches</h6>
                                    <p>10 Items</p>
                                </div>
                                <img src="images/headphone.jpg" alt="camera" />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="feaured-wrapper home-wrapper-2 py-5">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                        <h3 className="section-heading">Featured Collection</h3>
                    </div>
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </div>
        </section>
        <section className="famous-wrapper home-wrapper-2 py-5">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-3">
                        <div className="famous-card position-relative">
                            <img className="img-fluid" src="images/AW-Ultra-2.jpeg" alt="famous" />
                            <div className="famous-content position-absolute">
                                <h6>Smart Watch Series 7</h6>
                                <p>From $399or $16.62/mo. for 24 no</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="famous-card position-relative">
                            <div className="famous-content position-absolute">
                                <h6>Macbook pro</h6>
                                <p>M1 Pro 14 inch</p>
                            </div>
                            <img className="img-fluid" src="images/mac-book.jpg" alt="famous" />
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="famous-card position-relative">
                            <div className="famous-content position-absolute">
                                <h6>Mac Mini</h6>
                                <p>Mac Mini M2 2023</p>
                            </div>
                            <img className="img-fluid" src="images/mac-mini.jpg" alt="famous" />
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="famous-card position-relative">
                            <div className="famous-content position-absolute">
                                <h6>Apple AirPods</h6>
                                <p>AirPods Pro 2023</p>
                            </div>
                            <img className="img-fluid" src="images/AirPods.jpg" alt="famous" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="special-wrapper home-wrapper-2 py-5">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                        <h3 className="section-heading">Special Products</h3>
                    </div>
                </div>
                <div className="row">
                    <SpecialProduct />
                    <SpecialProduct />
                    <SpecialProduct />
                </div>
            </div>
        </section>
        <section className="popular-wrapper home-wrapper-2 py-5">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                        <h3 className="section-heading">Our Popular Products</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-2">
                        <div className="card"></div>
                    </div>
                    <div className="col-2">
                        <div className="card"></div>
                    </div>
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </div>
        </section>
        <section className="marque-wrapper home-wrapper-2 py-5">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                        <div className="marquee-inner-wrapper card-wrapper">
                            <Marquee className="d-flex">
                                <div className="mx-4 w-25">
                                    <img src="images/brand-01.png" alt="brand" />
                                </div>
                                <div className="mx-4 w-25">
                                    <img src="images/brand-02.png" alt="brand" />
                                </div>
                                <div className="mx-4 w-25">
                                    <img src="images/brand-03.png" alt="brand" />
                                </div>
                                <div className="mx-4 w-25">
                                    <img src="images/brand-04.png" alt="brand" />
                                </div>
                                <div className="mx-4 w-25">
                                    <img src="images/brand-05.png" alt="brand" />
                                </div>
                                <div className="mx-4 w-25">
                                    <img src="images/brand-06.png" alt="brand" />
                                </div>
                                <div className="mx-4 w-25">
                                    <img src="images/brand-07.png" alt="brand" />
                                </div>
                                <div className="mx-4 w-25">
                                    <img src="images/brand-08.png" alt="brand" />
                                </div>
                            </Marquee>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="blog-wrapper home-wrapper-2 py-5">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                        <h3 className="section-heading">Out Latest Blogs</h3>
                    </div>
                    <Blogcard />
                    <Blogcard />
                    <Blogcard />
                    <Blogcard />
                </div>
            </div>
        </section>
    </>
}
export default Home;