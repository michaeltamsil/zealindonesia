import React from "react"
import {Col, Row} from "reactstrap"

import Header from './../components/organisms/Header';
import Home from './../components/organisms/Home';
import Register from './../components/organisms/Register';

export default() => (
    <div>
        <Header/>
        <Home/>
        <Row className="mt-4">
            <Col sm={{size: 8, offset: 2}}>
                <Register/>
            </Col>
        </Row>
    </div>
)