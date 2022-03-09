import logo from "./logo.svg";
import "./App.css";
import "./header.css";
import "./all.css";
import React from "react";
import ReactDOM from "react-dom";

//Home page navbar
class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignedIn: false,
    };
  }

  render() {
    return (
      <header>
        <div class="header-container">
          <div class="container-content">
            <div class="left-side align-middle">
              <b id="lrg">
                <a href="/">NFT Lotto</a>
              </b>
              <b>
                <a href="/lootbox">Lootboxes</a>
              </b>
              <b>
                <a href="/build-own-box">Build Your Own Box</a>
              </b>
              <b>
                <a href="/aboutus">About US</a>
              </b>
              <b>
                <a
                  id="logout"
                  href={this.state.isSignedIn ? "/signout" : "/signin"}
                >
                  {this.state.isSignedIn ? "Sign Out" : "Sign In"}
                </a>
              </b>
            </div>
            <div class="right-side align-middle"></div>
          </div>
        </div>
      </header>
    );
  }
}

function App() {
  return (
    <div class="App">
      <NavBar></NavBar>
    </div>
  );
}

export default App;
