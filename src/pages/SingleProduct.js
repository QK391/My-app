import React, { useState } from 'react'
import Meta from '../components/Meta';
import BreadColumd from '../components/BreadColumd';
import ProductCard from '../components/ProductCard';
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from 'react-image-zoom';
import Color from '../components/Color';
import { TbGitCompare } from 'react-icons/tb';
import { AiOutlineHeart } from 'react-icons/ai';
import Container from '../components/Container';

const SingleProduct = () => {

    const props = { width: 400, height: 550, zoomWidth: 600, img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MT5J3ref_VW_34FR+watch-49-titanium-ultra2_VW_34FR+watch-face-49-alpine-ultra2_VW_34FR?wid=5120&hei=3280&bgc=fafafa&trim=1&fmt=p-jpg&qlt=80&.v=V2tka2lyS0VIV2tOTnZwUHdjcUhBaEZPYUtzeTRQVVJ5RG0wcnpadi96L1VYSXRUN1VQK3Nhb1hTK1VFYms2a0IzMDBvaSthcUJDc2lUMklaVFdPN2M3VlVnN2o1MzlNNzJ6V2lBNm12Z3VmY0EzcE04TzlWK1ZjdzFEemN3Y0N3SHBtSkFCVG00emNCNnZZdmx1anRJNGlHOFl6S0RBZW5kOVRmcVQwcUxWS1VLU1NaeUN4Y0oyZ1lKUEFiV3dqekx6L21RZ2F1Tm5ZWmdlMjhIN2tFUT09" };
    const [orderedProduct] = useState(true);
    const copyToClipboard = (text) => {
        console.log('text', text)
        var textField = document.createElement('textarea')
        textField.innerText = text
        document.body.appendChild(textField)
        textField.select()
        document.execCommand('copy')
        textField.remove()
    }
    return (
        <>
            <Meta title={"Product Name"} />
            <BreadColumd title="Product Name" />
            <Container class1='main-product-wrapper py-5 home-wrapper-2'>
                    <div className='row'>
                        <div className='col-6'>
                            <div className='main-product-image'>
                                <div>
                                    <ReactImageZoom {...props} />
                                </div>
                            </div>
                            <div className='other-product-images d-flex flex-wrap gap-15'>
                                <div>
                                    <img className='img-fluid' src='https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MT5J3ref_VW_34FR+watch-49-titanium-ultra2_VW_34FR+watch-face-49-alpine-ultra2_VW_34FR?wid=5120&hei=3280&bgc=fafafa&trim=1&fmt=p-jpg&qlt=80&.v=V2tka2lyS0VIV2tOTnZwUHdjcUhBaEZPYUtzeTRQVVJ5RG0wcnpadi96L1VYSXRUN1VQK3Nhb1hTK1VFYms2a0IzMDBvaSthcUJDc2lUMklaVFdPN2M3VlVnN2o1MzlNNzJ6V2lBNm12Z3VmY0EzcE04TzlWK1ZjdzFEemN3Y0N3SHBtSkFCVG00emNCNnZZdmx1anRJNGlHOFl6S0RBZW5kOVRmcVQwcUxWS1VLU1NaeUN4Y0oyZ1lKUEFiV3dqekx6L21RZ2F1Tm5ZWmdlMjhIN2tFUT09' alt='' />
                                </div>
                                <div>
                                    <img className='img-fluid' src='https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MT5J3ref_VW_34FR+watch-49-titanium-ultra2_VW_34FR+watch-face-49-alpine-ultra2_VW_34FR?wid=5120&hei=3280&bgc=fafafa&trim=1&fmt=p-jpg&qlt=80&.v=V2tka2lyS0VIV2tOTnZwUHdjcUhBaEZPYUtzeTRQVVJ5RG0wcnpadi96L1VYSXRUN1VQK3Nhb1hTK1VFYms2a0IzMDBvaSthcUJDc2lUMklaVFdPN2M3VlVnN2o1MzlNNzJ6V2lBNm12Z3VmY0EzcE04TzlWK1ZjdzFEemN3Y0N3SHBtSkFCVG00emNCNnZZdmx1anRJNGlHOFl6S0RBZW5kOVRmcVQwcUxWS1VLU1NaeUN4Y0oyZ1lKUEFiV3dqekx6L21RZ2F1Tm5ZWmdlMjhIN2tFUT09' alt='' />
                                </div>
                                <div>
                                    <img className='img-fluid' src='https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MT5J3ref_VW_34FR+watch-49-titanium-ultra2_VW_34FR+watch-face-49-alpine-ultra2_VW_34FR?wid=5120&hei=3280&bgc=fafafa&trim=1&fmt=p-jpg&qlt=80&.v=V2tka2lyS0VIV2tOTnZwUHdjcUhBaEZPYUtzeTRQVVJ5RG0wcnpadi96L1VYSXRUN1VQK3Nhb1hTK1VFYms2a0IzMDBvaSthcUJDc2lUMklaVFdPN2M3VlVnN2o1MzlNNzJ6V2lBNm12Z3VmY0EzcE04TzlWK1ZjdzFEemN3Y0N3SHBtSkFCVG00emNCNnZZdmx1anRJNGlHOFl6S0RBZW5kOVRmcVQwcUxWS1VLU1NaeUN4Y0oyZ1lKUEFiV3dqekx6L21RZ2F1Tm5ZWmdlMjhIN2tFUT09' alt='' />
                                </div>
                                <div>
                                    <img className='img-fluid' src='https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MT5J3ref_VW_34FR+watch-49-titanium-ultra2_VW_34FR+watch-face-49-alpine-ultra2_VW_34FR?wid=5120&hei=3280&bgc=fafafa&trim=1&fmt=p-jpg&qlt=80&.v=V2tka2lyS0VIV2tOTnZwUHdjcUhBaEZPYUtzeTRQVVJ5RG0wcnpadi96L1VYSXRUN1VQK3Nhb1hTK1VFYms2a0IzMDBvaSthcUJDc2lUMklaVFdPN2M3VlVnN2o1MzlNNzJ6V2lBNm12Z3VmY0EzcE04TzlWK1ZjdzFEemN3Y0N3SHBtSkFCVG00emNCNnZZdmx1anRJNGlHOFl6S0RBZW5kOVRmcVQwcUxWS1VLU1NaeUN4Y0oyZ1lKUEFiV3dqekx6L21RZ2F1Tm5ZWmdlMjhIN2tFUT09' alt='' />
                                </div>
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className='main-product-details'>
                                <div className='boder-bottom'>
                                    <h3 className='title'>
                                        Apple Watch Ultra 2 49mm (4G) dây cao su | Chính hãng Apple Việt Nam
                                    </h3>
                                </div>
                                <div className='border-bottom py-3'>
                                    <p className='price'>
                                        $ 100
                                    </p>
                                    <div className='d-flex align-items-center gap-10'>
                                        <ReactStars count={5} size={20} value="3" activeColor="#ffd700" />
                                        <p className='mb-0 review t-review'>( 2 Reviews )</p>
                                    </div>
                                    <a className='review-btn' href='#review'>Write a Review</a>
                                </div>
                                <div className='border-bottom py-3'>
                                    <div className='d-flex gap-10 align-items-center my-2'>
                                        <h3 className='product-heading'>Type: </h3>
                                        <p className='product-data'>Watch </p>
                                    </div>
                                    <div className='d-flex gap-10 align-items-center my-2'>
                                        <h3 className='product-heading'>Brand: </h3>
                                        <p className='product-data'>Havells </p>
                                    </div>
                                    <div className='d-flex gap-10 align-items-center my-2'>
                                        <h3 className='product-heading'>Categories: </h3>
                                        <p className='product-data'>Watch </p>
                                    </div>
                                    <div className='d-flex gap-10 align-items-center my-2'>
                                        <h3 className='product-heading'>Tags: </h3>
                                        <p className='product-data'>Watch </p>
                                    </div>
                                    <div className='d-flex gap-10 align-items-center my-2'>
                                        <h3 className='product-heading'>Availablity: </h3>
                                        <p className='product-data'>In Stock </p>
                                    </div>
                                    <div className='d-flex gap-10 flex-column mt-2 mb-3'>
                                        <h3 className='product-heading'>Size </h3>
                                        <div className='d-flex flex-wrap gap-15'>
                                            <span className='badge border border-1 bg-white text-dark border-secondary'>S</span>
                                            <span className='badge border border-1 bg-white text-dark border-secondary'>M</span>
                                            <span className='badge border border-1 bg-white text-dark border-secondary'>L</span>
                                            <span className='badge border border-1 bg-white text-dark border-secondary'>XL</span>
                                        </div>
                                    </div>
                                    <div className='d-flex gap-10 flex-column mt-2 mb-3'>
                                        <h3 className='product-heading'>Color </h3>
                                        <Color />
                                    </div>
                                    <div className='d-flex gap-15 align-items-center flex-row mt-2 mb-3'>
                                        <h3 className='product-heading d-flex gap-10 align-items-center'>Quantity </h3>
                                        <div className=''>
                                            <input type='number' className='form-control' name='' min={1} max={10} style={{ width: "70px" }} id='' />
                                        </div>
                                        <div className='d-flex align-items-center gap-30 ms-5'>
                                            <button className="button border-0" type="submit">Add To Cart</button>
                                            <button className="button signup border-0">Buy It Now</button>
                                        </div>
                                    </div>
                                    <div className='d-flex align-items-center gap-15'>
                                        <div>
                                            <a href=' '>
                                                <TbGitCompare className='fs-5 me-2' />Add to Component
                                            </a>
                                        </div>
                                        <div>
                                            <a href=' '>
                                                <AiOutlineHeart className='fs-5 me-2' /> Add to Wishlist
                                            </a>
                                        </div>
                                        <div></div>

                                    </div>
                                    <div className='d-flex gap-10 flex-column my-3'>
                                        <h3 className='product-heading'>Shipping & Return </h3>
                                        <p className='product-data'>Free shipping and returns available on all orders ! <br />
                                            we ship and US domestic orders within <b>5 - 10 business days !</b>
                                        </p>
                                    </div>
                                    <div className='d-flex gap-10 align-items-center my-3'>
                                        <h3 className='product-heading'>Product Link:</h3>
                                        <a
                                            href=' '
                                            onClick={() => {
                                                copyToClipboard(
                                                    "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MT5J3ref_VW_34FR+watch-49-titanium-ultra2_VW_34FR+watch-face-49-alpine-ultra2_VW_34FR?wid=5120&hei=3280&bgc=fafafa&trim=1&fmt=p-jpg&qlt=80&.v=V2tka2lyS0VIV2tOTnZwUHdjcUhBaEZPYUtzeTRQVVJ5RG0wcnpadi96L1VYSXRUN1VQK3Nhb1hTK1VFYms2a0IzMDBvaSthcUJDc2lUMklaVFdPN2M3VlVnN2o1MzlNNzJ6V2lBNm12Z3VmY0EzcE04TzlWK1ZjdzFEemN3Y0N3SHBtSkFCVG00emNCNnZZdmx1anRJNGlHOFl6S0RBZW5kOVRmcVQwcUxWS1VLU1NaeUN4Y0oyZ1lKUEFiV3dqekx6L21RZ2F1Tm5ZWmdlMjhIN2tFUT09"
                                                );
                                            }}>
                                                Copy Product Link
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </Container>
            <Container class1='description-wrapper py-5 home-wrapper-2'>
                    <div className='row'>
                        <div className='col-12'>
                            <h4>Description</h4>
                            <div className='bg-white p-3'>
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
            <Container class1='review-wrapper home-wrapper-2'>
                    <div className='row'>
                        <div className='col-12'>
                            <h4 id='review'>Reviews</h4>
                            <div className='review-inner-wrapper'>
                                <div className='review-head d-flex justify-content-between align-items-end'>
                                    <div>
                                        <h4 className='mb-2'>Custumer Reviews</h4>
                                        <div className='d-flex align-items-center gap-10'>
                                            <ReactStars count={5} size={20} value="3" activeColor="#ffd700" />
                                            <p className='mb-0'>Based on 2 Reviews</p>
                                        </div>
                                    </div>
                                    {orderedProduct && (
                                        <div>
                                            <a className='text-dark text-decoration-underline' href=' '>Wire a Review</a>
                                        </div>
                                    )}
                                </div>
                                <div className='review-form py-4'>
                                    <h4>Wire a Review</h4>
                                    <form action="" className="d-flex flex-column gap-15">
                                        <div>
                                            <ReactStars count={5} size={20} value="3" activeColor="#ffd700" />
                                        </div>
                                        <div>
                                            <textarea className="w-100 form-control" name="" id="" cols="30" rows="5" placeholder="Comment" />
                                        </div>

                                        <div className='d-flex justify-content-end'>
                                            <button className="button border-0">Submit Review</button>
                                        </div>
                                    </form>
                                </div>
                                <div className='reviews mt-4'>
                                    <div className='review'>
                                        <div className='d-flex gap-10 align-items-center'>
                                            <h6 className='mb-0'>Navdeep</h6>
                                            <ReactStars count={5} size={20} value="3" activeColor="#ffd700" />
                                        </div>
                                        <p className='mt-3'>
                                            Instead, it will copy all the configuration files and the transitive dependencies
                                            (webpack, Babel, ESLint, etc) right into your project so you have full control over them.
                                            All of the commands except eject will still work, but they will point to the copied scripts so you can tweak them.
                                            At this point you're on your own.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </Container>
            <Container class1="popular-wrapper py-5 home-wrapper-2">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="section-heading">Our Popular Products</h3>
                        </div>
                    </div>
                    <div className="row">
                        <ProductCard />
                    </div>
            </Container>
        </>
    )
}
export default SingleProduct