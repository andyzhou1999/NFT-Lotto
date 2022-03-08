import logo from "./logo.svg";
import "./App.css";
import React from "react";
import ReactDOM from "react-dom";

//Home page navbar
class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  renderNavigation(props) {
    return <Navigation {...props}></Navigation>;
  }

  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            NFT Lotto
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Lootboxes
                </a>
                <ul
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                  id="dropdown-lootbox"
                >
                  <li>
                    <a class="dropdown-item" href="#">
                      Featured
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Classic
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      All-In
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Features
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Pricing
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

//navbar entries
class Navigation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <a class="navItem" href={this.props.url}>
        {this.props.text}
      </a>
    );
  }
}

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
    </div>
  );
}

export default App;
