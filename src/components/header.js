import React from "react";
import { ReactDOM } from "react-dom";

function Header() {
  return (
    <div>
      <nav className="sticky-top navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src="https://s3-recruiting.cdn.greenhouse.io/external_greenhouse_job_boards/logos/400/674/900/original/Cars_and_Bids.png?1628196280"
              alt=""
              width="180"
              height="80"
            />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item dropdown navitem1">
                <a
                  class="nav-link ligh link "
                  href="#"
                  data-bs-toggle="dropdown"
                >
                  {" "}
                  Auctions{" "}
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="nav-link ligh link dropdown-item " href="#">
                      {" "}
                      Live Auctions
                    </a>
                  </li>
                  <li>
                    <a class="nav-link ligh link dropdown-item" href="#">
                      {" "}
                      Past Results{" "}
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item highlight navitem2">
                <a className="nav-link high link" href="#">
                  Sell a Car
                </a>
              </li>
              <li className="nav-item navitem3">
                <a className="nav-link ligh link" href="#">
                  What’s Cars & Bids?
                </a>
              </li>
              <li className="nav-item navitem4">
                <a className="nav-link ligh link" href="#">
                  Daily Email
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="&#xf002;     Search for
                cars (ex. BMW, Audi, Ford)"
                aria-label="Search"
              />
            </form>
            <button className="btn btn-outline-success" type="Search">
              Sign Up
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Header;
