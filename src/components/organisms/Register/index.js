import React from 'react';
import {Button, Col, Form, FormGroup, Input, Label, Row} from 'reactstrap';
export default () => {
    return (
        <Form id="register" action="https://formspree.io/zealclub1@gmail.com" method="post">
            <Row>
                <Col sm={12} className="text-center mb-3">
                    <span className="h1 roboto">REGISTER</span>
                </Col>
                <Col sm={{size: 10, offset: 1 }} md={{size: 8, offset: 2}}>
                    <FormGroup row>
                        <Label for="name" sm={4}>Name</Label>
                        <Col sm={8}>
                            <Input type="text" name="name" id="name"/>
                        </Col>
                    </FormGroup>
                </Col>
                <Col sm={{size: 10, offset: 1 }} md={{size: 8, offset: 2}}>
                    <FormGroup row>
                        <Label for="email" sm={4}>Email</Label>
                        <Col sm={8}>
                            <Input type="email" name="email" id="email"/>
                        </Col>
                    </FormGroup>
                </Col>
                <Col sm={{size: 10, offset: 1 }} md={{size: 8, offset: 2}}>
                    <Row>
                        <Col sm={{size: 8, offset: 4}}>
                            <Button color="primary" size="md" type="submit" block>Subscribe</Button>                        
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Form>
    )
}