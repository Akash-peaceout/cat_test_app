import React from "react";
import { Link } from "react-router-dom";
import "./loginPage.css";
//import { url } from "inspector";

const emailRegex = RegExp(
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);

const formValid = formErrors => {
  let valid = true;
  Object.values(formErrors).forEach(err => {
    err.length > 0 && (valid = false);
  });
  return valid;
};

let imgUrl =
  "C:\\Users\\akashv\\Project\\adaptive_test_app\\public\\office.jpg";
let styles = {
  root: {
    backgroundImage: "url(" + imgUrl + ")",
    backgroundSize: "cover",
    overflow: "hidden"
  }
};

class loginPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: null,
      password: null,
      formErrors: {
        userName: "",
        password: ""
      }
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = event => {
    event.preventDefault();
    if (formValid(this.state.formErrors)) {
      console.log(
        `Submitting : user name:${this.state.userName} Password: ${
          this.state.password
        }`
      );
    } else {
      alert("form invalid-some error message");
    }
  };

  handleChange = event => {
    const { name, value } = event.target;
    const formErrors = this.state.formErrors;
    switch (name) {
      case "userName":
        formErrors.userName =
          emailRegex.test(value) && value.length > 0 ? "" : "Invalid mail ID";
        break;
      case "password":
        formErrors.password = value.length > 6 ? "" : "Invalid password";
        break;
      default:
        break;
    }
    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  render() {
    const { formErrors } = this.state;
    return (
      <div
        id="hero"
        className="wrapper"
        class="container h-100"
        style={{ backgroundImage: "url(" + imgUrl + ")" }}
      >
        <div class="brand_logo_container">
          <img
            src="http://extranetevolution.com/files/2014/09/Trimble-logo-300x82.jpg"
            class="brand_logo"
            className="mx-auto d-block"
            alt="trimble-logo"
            style={{ width: "300px", height: "100px" }}
          />
        </div>

        <div class="d-flex justify-content-center h-100">
          <div class="shadow p-3 mb-5 bg-white rounded card">
            <div
              class="card-header text-center"
              style={{ backgroundColor: "#3061b0", color: "WHITE" }}
            >
              <h2>Test Taker Login</h2>
            </div>
            <div className="form-wrapper">
              <p class="text-muted">
                Please enter the details received through e-mail
              </p>
              <form
                onSubmit={this.handleSubmit}
                class="needs-validation"
                noValidate
              >
                <div className="userName" class="form-group">
                  <label htmlFor="userName" class="text-primary">
                    User Name
                  </label>
                  <input
                    type="email"
                    className="shadow p-2 mb-3 bg-white rounded form-control"
                    placeholder="User Name"
                    noValidate
                    name="userName"
                    required
                    onChange={this.handleChange}
                  />
                  <div class="valid-feedback">valid</div>
                  <div class="invalid-feedback">Please fillout this field</div>
                </div>
                {formErrors.userName.length > 0 && (
                  <div className="alert alert-warning alert-dismissable">
                    <button
                      type="button"
                      className="close"
                      data-dismiss="alert"
                    >
                      &times;
                    </button>
                    <strong>{formErrors.userName}</strong>
                  </div>
                )}
                <div className="password" class="form-group">
                  <label htmlFor="password" class="text-primary">
                    Password
                  </label>
                  <input
                    type="password"
                    className="shadow p-2 mb-3 bg-white rounded form-control"
                    placeholder="*******"
                    noValidate
                    name="password"
                    onChange={this.handleChange}
                    aria-describedby="passwordHelpBlock"
                  />
                  <small id="passwordHelpBlock" class="form-text text-muted">
                    Enter the password you received through mail.
                  </small>
                  <div class="valid-feedback">valid</div>
                  <div class="invalid-feedback">Please fillout this field</div>
                </div>
                <div className="Login">
                  <Link to="instructions" type="submit" class="btn btn-primary">
                    Submit
                  </Link>
                  <a class="nav-link " href="#">
                    Forgot password ?
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
        <footer
          class="page-footer font-small unique-color-dark pt-4 "
          // style={{ backgroundColor: "BLACK", color: "WHITE" }}
        >
          <div class="container-fluid ">
            <ul class="list-unstyled list-inline text-center py-2">
              <li class="list-inline-item">
                <h5 class="mb-3">In case of queries contact </h5>
              </li>
              <li class="list-inline-item">
                <a
                  href="https://www.trimble.com/FSM/Contact_Support.aspx"
                  class="btn btn-info btn-rounded"
                  style={{ color: "WHITE" }}
                >
                  Trimble-Contact
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    );
  }
}

export default loginPage;
