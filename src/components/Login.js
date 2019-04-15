import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios'



class Login extends React.Component {
    state = {
        email: '',
        password: ''
    }

    login = (event) => {
        event.preventDefault();
    }

    handleSubmit = event => {
        event.preventDefault()

        this.state.email || this.state.password ?
            alert("You have successfully login!") :
            alert("Please enter your details")
        axios({
            method: 'POST',
            url: 'https://insta.nextacademy.com/api/v1/login',
            data: {
                email: this.state.email,
                password: this.state.password
            }
        })
            .then(response => {
                console.log(response.data)
                localStorage.setItem('jwt', response.data.auth_token)
                this.forceUpdate()
            })
            .catch(error => {
                console.log(error.response)

            })


    }

    handleLogout = (event) => {
        event.preventDefault()
        localStorage.removeItem("jwt")
        this.forceUpdate()
    }

    handleInput = event => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    render() {
        return (
            <>
                {!localStorage.jwt ?
                    <Form onClick={this.handleSubmit} onClick={this.login} inline>
                        <FormGroup >
                            <Label for="exampleEmail" hidden >Email</Label>
                            <Input value={this.state.email} onChange={this.handleInput} style={{ height: 30 }} type="email" name="email" id="exampleEmail" placeholder="Email" />
                        </FormGroup>
                        {' '}
                        <FormGroup >
                            <Label for="examplePassword" hidden>Password</Label>
                            <Input value={this.state.password} onChange={this.handleInput} style={{ height: 30 }} type="password" name="password" id="examplePassword" placeholder="Password" />
                        </FormGroup>
                        {' '}

                        <Button size='sm' onClick={this.handleSubmit}>Login</Button>

                    </Form>



                    :

                    <Button size='sm' onClick={this.handleLogout}>Logout</Button>
                }
            </>
        );
    }
}


export default Login;