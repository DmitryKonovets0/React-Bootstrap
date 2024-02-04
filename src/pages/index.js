import React from "react";
import {Component} from "react";

import {Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



import './index.css'
const site = {
    backgroundColor: '#000',
    width: '100vw',
    height: '100vh',
    margin: '0 auto',
    paddingTop: '200px'

}, wrapper = {
    width: '50vw',
    height: '50vh',
    margin: '0 auto',
    backgroundColor: 'rgba(255,255,255,.1)'
}, btn = {
    marginLeft:'30px'
}
export default class Index extends Component {

    render() {
        return(
            <div style={site}>
                <div className="wrapper" style={wrapper}>
                    <Form>
                        <Form.Group className="p-3" controlId="formGroupEmail">
                            <Form.Label className='text-white'>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" className="text-white custom-placeholder bg-black"/>
                        </Form.Group>
                        <Form.Group className="p-3 text-white" controlId="formGroupPassword">
                            <Form.Label className='text-white'>Password</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                className="text-white custom-placeholder bg-black"/>
                        </Form.Group>
                    </Form>
                    <Button style={btn} variant="primary">Primary</Button>
                </div>
            </div>
        )
    }

}

export const Head = () =>
    <head>
        <title>ReactBootstrap</title>
        <link rel="icon" href="https://avatars.githubusercontent.com/u/6853419?s=200&v=4"/>
    </head>
