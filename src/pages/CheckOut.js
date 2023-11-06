import React from 'react'
import { BiArrowBack } from 'react-icons/bi';
import { Link } from 'react-router-dom'

const CheckOut = () => {
    return (
        <>
            <div className='checkout-wrapper py-5 home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-7'>
                            <div className='checkout-left-data'>
                                <h3 className='website-name'>Dev corner</h3>
                                <nav style={{ "--bs-breadcrumb-divider": '>' }}
                                    aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <Link className='text-dark' to="cart">Cart</Link>
                                        </li>
                                        &nbsp;/
                                        <li className="breadcrumb-item active" aria-current="page">
                                            Information
                                        </li>
                                        <li className="breadcrumb-item active">
                                            &nbsp;/ Shipping
                                        </li>
                                        &nbsp;/
                                        <li className="breadcrumb-item active" aria-current="page">
                                            Payment
                                        </li>
                                    </ol>
                                </nav>
                                <h4 className='title'>Contact Information</h4>
                                <p className='user-details total'>
                                    ABCDEFG(abc123@gmail.com)
                                </p>
                                <h4 className='mb-3'>Shipping Address</h4>
                                <form action='' className='d-flex gap-15 flex-wrap justify-content-between'>
                                    <div className='w-100'>
                                        <select name='' className='form-control form-select' id=''>
                                            <option value='' selected disabled>
                                                Select Country
                                            </option>
                                        </select>
                                    </div>
                                    <div className='flex-grow-1'>
                                        <input type='text'
                                            placeholder='First name'
                                            className='form-control' />
                                    </div>
                                    <div className='flex-grow-1'>
                                        <input type='text'
                                            placeholder='Last name'
                                            className='form-control' />
                                    </div>
                                    <div className='w-100'>
                                        <input type='text'
                                            placeholder='Address'
                                            className='form-control' />
                                    </div>
                                    <div className='w-100'>
                                        <input type='text'
                                            placeholder='Aparment, Suite, etc'
                                            className='form-control' />
                                    </div>
                                    <div className='flex-grow-1'>
                                        <input type='text'
                                            placeholder='City' className='form-control' />
                                    </div>
                                    <div className='flex-grow-1'>
                                        <select name=''
                                            className='form-control form-select'
                                            id=''>
                                            <option value='' selected disabled>
                                                Select State
                                            </option>
                                        </select>
                                    </div>
                                    <div className='flex-grow-1'>
                                        <input type='text'
                                            placeholder='Zipcode'
                                            className='form-control' />
                                    </div>
                                    <div className='w-100'>
                                        <div className='d-flex justify-content-between align-content-center'>
                                            <Link to="/cart" className='text-dark'>
                                                <BiArrowBack className='me-2' /> Return to Cart
                                            </Link>
                                            <Link to="/cart" className='button'>Continue to Shipping</Link>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className='col-5'>
                            <div className='border-buttom py-4'>
                                <div className='d-flex gap-10 mb-2 align-items-center'>
                                    <div className='w-75 d-flex'>
                                        <div className='w-25 position-relative'>
                                            <span style={{top: "-10px", right: "2px"}} className='badge bg-secondary text-white rounded-circle p-2 position-absolute'> 1 </span>
                                            <img className='img-fluid' src='./images/watch.jpg' alt='product' />
                                        </div>
                                        <div>
                                            <h5 className='total-price'>ABCDEF</h5>
                                            <p className='total-price'>s / ABCDEF</p>
                                        </div>
                                    </div>
                                    <div className=' flex-grow-1'>
                                        <h5>$ 100.00</h5>
                                    </div>
                                </div>
                            </div>
                            <div className='border-buttom py-4'>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <p className='total'>Subtotal</p>
                                    <p className='total-price'>$ 1000</p>
                                </div>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <p className='mb-0'>Shipping</p>
                                    <p className='mb-0'>$ 1000</p>
                                </div>
                            </div>
                            <div className='d-flex justify-content-between align-content-center boder-bottom py-4'>
                                <h4 className='mb-0 total'>Total</h4>
                                <h5 className='mb-0 total-price'>$ 1000</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CheckOut