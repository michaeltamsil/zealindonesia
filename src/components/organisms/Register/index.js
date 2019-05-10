import React from 'react';
import {Button, Col, Form, FormGroup, Input, Label, Row} from 'reactstrap';
export default () => {
    return (
        <Form>
            <Row>

                <Col sm="6">
                    <FormGroup row>
                        <Label for="name" sm={4}>Name</Label>
                        <Col sm={8}>
                            <Input type="text" name="name" id="name"/>
                        </Col>
                    </FormGroup>
                </Col>
                <Col sm="6">
                    <FormGroup row>
                        <Label for="email" sm={4}>Email</Label>
                        <Col sm={8}>
                            <Input type="email" name="email" id="email"/>
                        </Col>
                    </FormGroup>
                </Col>
                <Col className="text-center">
                    <Button color="primary" size="md">Subscribe</Button>
                </Col>
            </Row>
        </Form>
    )
}