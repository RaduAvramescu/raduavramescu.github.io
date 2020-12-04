import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

import styles from "./NavBar.module.css";

export default class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      prevScrollPos: window.pageYOffset,
      isVisible: true,
      isCollapsed: true,
    };
  }

  handleScrollToTop = () => {
    scroll.scrollToTop();
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const { prevScrollPos } = this.state;
    const curScrollPos = window.pageYOffset;
    const isVisible = prevScrollPos > curScrollPos;
    this.setState({
      prevScrollPos: curScrollPos,
      isVisible,
    });

    if (!isVisible && !this.state.isCollapsed) this.handleCollapse();
  };

  handleCollapse = () =>
    this.setState({ isCollapsed: !this.state.isCollapsed });

  render() {
    return (
      <header
        id="header"
        className={`fixed-top ${
          !this.state.isVisible ? `${styles["header-hide"]}` : ``
        }`}
      >
        <nav
          className={`navbar navbar-expand-lg navbar-dark ${styles["navbar-dark"]} bg-dark`}
        >
          <Link
            className={`navbar-brand ${styles["navbar-brand"]} font-weight-bold`}
            href="/#"
            onClick={this.handleScrollToTop}
          >
            RADU AVRAMESCU
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded={!this.state.isCollapsed ? true : false}
            aria-label="Toggle navigation"
            onClick={this.handleCollapse}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className={`${
              this.state.isCollapsed ? `collapse ${styles["collapse"]}` : ""
            } navbar-collapse ${styles["navbar-collapse"]}`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link
                  className={`nav-link ${styles["nav-link"]} px-0 mx-3`}
                  onClick={this.handleScrollToTop}
                >
                  HOME
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${styles["nav-link"]} px-0 mx-3`}
                  to="projects"
                  smooth
                  onClick={this.handleCollapse}
                >
                  PROJECTS
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${styles["nav-link"]} px-0 mx-3`}
                  to="about"
                  smooth
                  onClick={this.handleCollapse}
                >
                  ABOUT
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${styles["nav-link"]} px-0 mx-3`}
                  to="contact"
                  smooth
                  onClick={this.handleCollapse}
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}
