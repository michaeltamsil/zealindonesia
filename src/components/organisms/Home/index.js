import React, { Component } from 'react';
import { Button, Col, Row } from 'reactstrap';
import homePhoto from './../../../../static/home-photos.jpg'
export default class Home extends Component {
    render() {

        const style = {
            backgroundImage: `url(${homePhoto})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            minHeight:"300px"
        }

        return (
            <div id="home">
                <Row>
                    <Col sm="8">
                        <h1 className="roboto" style={{
                            fontSize: '5em'
                        }}>
                            LIGHT-UP YOUR SKILL WITH ZEAL
                        </h1>
                        <br/>
                        <h2 className="text-primary">
                            Full Lifetime Support, Full Spectrum Support and Digital Report
                        </h2>
                    </Col>
                    <Col sm="4">
                        <div style={style}/>
                    </Col>
                </Row>
            </div>

        )
    }
}