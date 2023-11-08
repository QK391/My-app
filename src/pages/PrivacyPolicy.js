import React from 'react';
import Meta from '../components/Meta';
import BreadColumd from '../components/BreadColumd';
import Container from '../components/Container';

const PrivacyPolicy = () => {
    return (
        <>
            <Meta title={"Privacy Policy"} />
            <BreadColumd title="Privacy Policy" />
            <Container className="policy-wrapper home-wrapper-2 py-5">
                <div className="row">
                    <div className="col-12">
                        <div className="policy">

                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default PrivacyPolicy