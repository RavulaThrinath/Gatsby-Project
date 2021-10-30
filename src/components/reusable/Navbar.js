import React, { Component } from "react"
import { Link } from "gatsby"
import logo from '../../images/logo.png'
import { FaCartArrowDown } from "react-icons/fa"

export default class navbar extends Component {
  state = {
    navbarState: false,
    navbarClass: "collapse navbar-collapse",
    menus: [
      {
        id: 1,
        text: "Home",
        Url: "/about",
      },
      {
        id: 2,
        text: "About",
        Url: "/about",
      },
      {
        id: 3,
        text: "Contact",
        Url: "/contact",
      },
    ],
  }
  myToggler = () => {
    this.state.navbarState
      ? this.setState({
          navbarState: false,
          navbarClass: "collapse navbar-collapse",
        })
      : this.setState({
          navbarState: false,
          navbarClass: "collapse navbar-collapse show",
        })
  }
  render() {
    return (
      <nav className="navbar navbar-expand-sm  text-white">
        <Link to="/" className="navbar-brand ml-5">
          <img src={logo} alt="suppose" width="70px" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={this.myToggler}
        >
          <span className="text-white">Menu</span>
        </button>
        <div className={this.state.navbarClass}>
          <ul className="navbar-nav ml-auto mr-5">
            {this.state.menus.map(menu => {
              return (
                <li key={menu.id} className="nav-item">
                  <Link to={menu.Url} className="nav-link text-white">
                    {menu.text}
                  </Link>
                </li>
              )
            })}

            <li className="nav-item">
              <Link to="/" className="nav-link text-white">
                <FaCartArrowDown className="cart-icon" />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
