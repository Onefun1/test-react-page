import React from "react";

import logo from "../Header/images/logo.png";

import "./Header.css";

class Header extends React.Component {
  constructor() {
    super();
    this.state = { value: "Kyiv" };
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    const { value } = this.state;
    const { shopingList } = this.props;

    return (
      <header>
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="cityName">{value}</div>

        <nav>
          <ul className="navigation">
            <li>
              <select
                value={this.state.value}
                className="dropdown font__style"
                name="Cities"
                onChange={this.handleChange}
              >
                <option value="Kyiv">Kyiv</option>
                <option value="London">London</option>
                <option value="Paris">Paris</option>
              </select>
            </li>
            <li>
              <span className="link font__style">sign in</span>
            </li>

            <li>
              <span className="link font__style">login</span>
            </li>
            <li>
              {shopingList.length > 0 ? (
                <span slyle={{ color: "red" }} className="link font__style">
                  (
                  <i
                    style={{ color: "red" }}
                    className="fas fa-cart-arrow-down"
                  />
                  ){shopingList.length}
                </span>
              ) : (
                <span className="link font__style">
                  <i className="fas fa-cart-arrow-down" />
                </span>
              )}
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
