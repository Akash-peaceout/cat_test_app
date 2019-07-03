import React from "react";
import { Link } from "react-router-dom";
import "./layout.css";

class sectionsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 300
    };
  }

  componentDidMount() {
    this.myInterval = setInterval(() => {
      if (this.state.count > 0) {
        this.setState(prevState => ({ count: prevState.count - 1 }));
      } else {
        clearInterval(this.myInterval);
        alert("Time ran out");
      }
    }, 1000);
  }

  render() {
    const { count } = this.state;
    return (
      <div className="wrapper">
        <div class="container">
          <div className="sections">
            <h2 className="jumbotron">
              <img
                src="http://extranetevolution.com/files/2014/09/Trimble-logo-300x82.jpg"
                class="brand_logo rounded-float-left"
                alt="trimble-logo"
                style={{
                  position: "absolute",
                  width: "700px",
                  height: "100px",
                  zIndex: "-2",
                  opacity: "0.5",
                  filter: "alpha(opacity=50)"
                }}
              />
              Select the section you would like to start{"  "}
              <i class="far fa-hand-point-down" style={{ fontSize: "36px" }} />
            </h2>
            <h3>
              Timer: {parseInt(count / 60, 10)} : {parseInt(count % 60, 10)}
            </h3>
            <form id="section" class="">
              <div class="radio shadow p-1 mb-1">
                <label>
                  <input type="radio" name="optradio" class="p-1" />
                  <span class="p-1">Data Structures</span>
                </label>
              </div>
              <div class="radio shadow p-1 mb-1">
                <label>
                  <input type="radio" name="optradio" class="p-1" />
                  <span class="p-1">Automata</span>
                </label>
              </div>
              <div class="radio disabled shadow p-1 mb-1">
                <label>
                  <input type="radio" name="optradio" />
                  <span class="p-1">Algorithms</span>
                </label>
              </div>
              <div class="radio disabled shadow p-1 mb-1">
                <label>
                  <input type="radio" name="optradio" />
                  <span class="p-1"> Java Programming </span>
                </label>
              </div>
            </form>
          </div>
          <div class="container">
            <div class="row align-items-end">
              <div class="col-sm align-self-end">
                <p class="text-left font-italic">
                  Go back and read instructions again
                </p>

                <Link
                  to="instructions"
                  type="submit"
                  class="btn btn-info align-self-center p-2"
                >
                  <i
                    class="fas fa-arrow-alt-circle-left p-2 "
                    style={{ fontSize: "22px", color: "BLACK" }}
                  />
                  Previous
                </Link>
              </div>
              <div class="col-sm align-self-end text-right">
                <p class="font-italic">
                  Continue to take test with selected section
                </p>

                <Link to="test" type="submit" class="btn btn-primary p-2">
                  Start Test
                  <i
                    class="fas fa-sign-in-alt p-2"
                    style={{ fontSize: "24px", color: "BLACK" }}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default sectionsPage;
