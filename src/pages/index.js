import React from "react"
import {Col, Row} from "reactstrap"

import Header from './../components/organisms/Header';
import Home from './../components/organisms/Home';
import Register from './../components/organisms/Register';

export default() => (
    <div>       
        <Header/>
        <div className="border-bottom border-dark mt-4 mb-4 pt-4 pb-4">
            <Home/>
        </div>
        <div className="border-bottom border-dark mt-4 mb-4 pb-4">
            <Row className="mt-4">
                <Col sm={{size: 8, offset: 2}}>
                    <Register/>
                </Col>
            </Row>
        </div>
    </div>
)