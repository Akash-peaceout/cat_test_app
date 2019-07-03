import React from "react";
import { Link } from "react-router-dom";
import "./layout.css";
class instructionsPage extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <div class="jumbotron text-center">
          <h1>Instructions Page</h1>
          <p>
            Please read instructions carefully, then proceed to start the exam.
          </p>
        </div>
        <div class="container">
          <h2>Instructions</h2>
          <p>
            ----All the necessary instructions about qn's and navigation ----
          </p>
          <p>
            After reading the instructions please click next to select section
            to start the test
          </p>

          <Link to="sections" type="submit" class="btn btn-primary">
            Next
          </Link>
        </div>
      </div>
    );
  }
}

export default instructionsPage;
