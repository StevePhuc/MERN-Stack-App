import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";
const styles = {
  color: "brown"
};
class Signin extends Component {
  state = {
    email: "",
    password: ""
  };
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.props.loginUser(this.state, this.props.history);
    // axios
    //   .post("/api/v1.0/users/signin", this.state)
    //   .then(response => {
    //     const token = response.data.token;
    //     localStorage.setItem("jwtToken", token);
    //     this.props.history.push("/students");
    //   })
    //   .catch(error => console.log(error));
  };
  render() {
    const { errors } = this.props;
    console.log(this.props);

    return (
      <form onSubmit={this.handleSubmit}>
        <div class="form-group">
          <label for="email">Email</label>
          <input
            type="email"
            name="email"
            class="form-control"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <p>{errors.email}</p>
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input
            type="password"
            name="password"
            class="form-control"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <p>{errors.password}</p>
        </div>
        <button class="btn btn-primary" type="submit">
          Sign In
        </button>{" "}
        <NavLink to="/signup" class="btn btn-primary">
          Sign Up{" "}
        </NavLink>
      </form>
    );
  }
}

export default Signin;
