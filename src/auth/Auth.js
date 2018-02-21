import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './auth.css'
import Signup from './Signup';
import Login from './Login';

const Auth = (props) => {
    return (
        <Container className="auth-container justify-content-center" >
            <Row>
                <Col></Col>
                <Col lg="5">
                <Row className="signup-container justify-content-center">
                    <Signup setToken={props.setToken}/>
                </Row>
                <Row className="login-container justify-content-center" >
                    <Login setToken={props.setToken}/>
                </Row>
                </Col>
                <Col></Col>
            </Row>
        </Container>
    )
}

export default Auth;