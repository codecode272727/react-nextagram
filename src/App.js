import React, { Component } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import axios from 'axios'
import Loader from "./components/Loader"
import Homepage from "./pages/Homepage.js"
import Navbar from "./components/Navbar"
import { Route } from "react-router-dom"
import UserProfilePage from './pages/UserProfilePage'
import SignUp from "./components/SignUp"


class App extends Component {
  state = {
    users: [],


  }

  componentDidMount() {
    axios.get('https://insta.nextacademy.com/api/v1/users')
      .then(result => {
        console.log(result.data)
        this.setState({ users: result.data })
      })

  }

  render() {

    const { users } = this.state

    if (users.length == 0) {
      return <Loader />
    }

    return (
      <>
        <Navbar />
        <Route exact path="/" component={props => <Homepage {...props} users={users} />} />
        <Route path="/users/:id" component={props => <UserProfilePage {...props} users={users} />} />
        {/* <Route path="/signup" component={SignUp} /> */}
      </>

    );


  }
}

export default App;
