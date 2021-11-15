import React, { useState } from "react";
import logo from "assets/images/logo.png";
import propTypes from "prop-types";
import Vsearch from "assets/icons/Vsearch.png";
import Button from "elements/Button";
import Modal from "elements/Modal";
import { Link, NavLink } from "react-router-dom";
 

export default function Header(props) {
  const className = [props.className];
  if (props.isShowSearchNone) className.push("d-none");
  const [isCollapse, setIsCollapse] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const handleCollapse = () => {
    setIsCollapse(!isCollapse);
  };

  // const openModal = () => {
  //   setShowModal(showModal);
  // }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light bg-transparent">
        <div className="container">
          <Link className="navbar-brand text-primary" to="/">
            <img src={logo} alt="logo cekkos" width="36" height="36" />
            <span className="ms-2">Cek Kos</span>
          </Link>
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={handleCollapse}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`${
              isCollapse ? "collapse" : ""
            } navbar-collapse justify-content-end`}
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item nav-space">
                <form class={`d-flex form-wrapper mt-1 ${className.join("")}`}>
                  <input
                    class="form-control me-2 border-0"
                    type="search"
                    placeholder="Nama Kota/Lokasi"
                    aria-label="Search"
                  />
                  <Button className="search-button">
                    <img src={Vsearch} className="mb-2" alt="icon search" />
                  </Button>
                </form>
              </li>
              <li className="nav-item nav-space">
                <NavLink
                  className="nav-link text-dark"
                  aria-current="page"
                  to="SemuaKos"
                >
                  Semua Kos
                </NavLink>
              </li>
              <li className="nav-item nav-space">
                <NavLink className="nav-link text-dark" to="AboutUs">
                  Tentang Kami
                </NavLink>
              </li>
              <li className="nav-item nav-space">
                <NavLink className="nav-link text-dark" to="PemilikKos">
                  Menjadi Pemilik Kos
                </NavLink>
              </li>
              <li className="nav-item">
                <Button
                  className="btn mt-1 text-white"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  type="button"
                  width="75"
                  height="30"
                  isSmall
                  isPrimary
                  onClick={() => {setShowModal(true)}}
                >
                  Masuk
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {showModal === true ? <Modal modalTitle="Modal Title" /> : ""}
    </>
  );
}

Header.propTypes={
  isShowSearchNone: propTypes.bool,
}
