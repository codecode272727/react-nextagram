import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter, NavLink } from 'reactstrap';
import axios from 'axios'

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            username: '',
            password: '',
            email: ''

        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));

    }

    handleSubmit = event => {
        event.preventDefault()

        if (this.state.email && this.state.password && this.state.username) {
            axios({
                method: 'POST',
                url: 'https://insta.nextacademy.com/api/v1/users/',
                data: {
                    username: this.state.username,
                    email: this.state.email,
                    password: this.state.password
                }
            })
                .then(response => {
                    console.log(response)
                })
                .catch(error => {
                    console.log(error.response)
                    alert(error.response.data.message[0])
                })
            alert('You have successfully registered. Please proceed to login. ')

        }
        else {
            alert('Please complete your details. ')
        }

        this.toggle()



    }

    handleInput = event => {
        this.setState({
            [event.target.name]: event.target.value,



        })

    }

    handleLogout = (event) => {
        event.preventDefault()
        localStorage.removeItem("jwt")
        this.forceUpdate()
    }




    render() {

        return (
            <div>
                
                    <div>
                        <NavLink><Button size='sm' color="danger" onClick={this.toggle}>Sign Up</Button></NavLink>

                        <Modal isOpen={this.state.modal} modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 1300 }}
                            toggle={this.toggle} className={this.props.className}>
                            <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                            <ModalBody>

                                <Form onSubmit={this.handleSubmit}>
                                    <Row form>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label for="exampleEmail">Email</Label>
                                                <Input value={this.state.email} onChange={this.handleInput} type="email" name="email" id="exampleEmail" />
                                            </FormGroup>
                                        </Col>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label for="examplePassword">Password</Label>
                                                <Input value={this.state.password} onChange={this.handleInput} type="password" name="password" id="examplePassword" />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <FormGroup>
                                        <Label
                                            value for="exampleAddress">Username</Label>
                                        <Input value={this.state.username} onChange={this.handleInput} type="text" name="username" id="exampleAddress" placeholder="" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="exampleAddress2">Address</Label>
                                        <Input type="text" name="address2" id="exampleAddress2" placeholder="" />
                                    </FormGroup>
                                    <Row form>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label for="exampleCity">City</Label>
                                                <Input type="text" name="city" id="exampleCity" />
                                            </FormGroup>
                                        </Col>
                                        <Col md={4}>
                                            <FormGroup>
                                                <Label for="exampleState">State</Label>
                                                <Input type="text" name="state" id="exampleState" />
                                            </FormGroup>
                                        </Col>
                                        <Col md={2}>
                                            <FormGroup>
                                                <Label for="exampleZip">Zip</Label>
                                                <Input type="text" name="zip" id="exampleZip" />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <FormGroup check>
                                        <Input type="checkbox" name="check" id="exampleCheck" />
                                        <Label for="exampleCheck" check>I have READ all the terms and conditions.</Label>
                                    </FormGroup>

                                    {this.state.email || this.state.password || this.state.username ?
                                        <Button color="primary" >Sign Up</Button> : ""}
                                    <Button color="secondary" onClick={this.toggle}>Cancel</Button>


                                </Form>
                            </ModalBody>

                        </Modal>
                    </div>
                 

                

            </div>
        );
    }
}

export default SignUp;