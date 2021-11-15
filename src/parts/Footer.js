import React from 'react'
import logo from "assets/images/logo.png";
import gplay from "assets/icons/gplay.png";
import fb from "assets/icons/fb.png";
import ig from "assets/icons/ig.png";
import GetYears from 'elements/GetYears/GetYears';

export default function Footer() {
    return (
    <>
      <footer className="d-flex align-items-center">
        <div className="container d-flex justify-content-between">
          <div className="row">
            <div className="col">
              <div className="col">
                <a className="navbar-brand text-primary" href="#">
                  <img src={logo} alt="logo cekkos" width="36" height="36" />
                  <span className="ms-2">Cek Kos</span>
                </a>
              </div>
              <div className="col mt-3">
                <p className="text-nowrap">
                  Tempat terbaik untuk mencari dan memesan kos dengan aman dan
                  <br />
                  nyaman. Tempat terbaik juga untuk memasang iklan kos anda.
                </p>
              </div>
              <div className="col">
                <a className="navbar-brand text-primary" href="#">
                  <img src={gplay} alt="link unduh aplikasi cekkos" />
                </a>
              </div>
            </div>
          </div>
          {/* 2 */}
          <div className="row">
            <div className="col">
              <div className="col mb-3">
                <h4>Tentang</h4>
              </div>
              <div className="col">
                <ul className="list-unstyled">
                  <li>
                    <a href="#">Tentang Kami</a>
                  </li>
                  <li>
                    <a href="#">Kontak</a>
                  </li>
                  <li>
                    <a href="#">Menjadi Pemilik Kos</a>
                  </li>
                  <li>
                    <a href="#">Pusat Bantuan</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* 3 */}
          <div className="row">
            <div className="col">
              <div className="col mb-3">
                <h4 className="text-nowrap">Ketentuan dan Kebijakan</h4>
              </div>
              <div className="col">
                <ul className="list-unstyled">
                  <li>
                    <a href="#">Ketentuan Privasi</a>
                  </li>
                  <li>
                    <a href="#">Ketentuan Umum</a>
                  </li>
                  <li>
                    <a href="#">Pembatalan Booking</a>
                  </li>
                  <li>
                    <a href="#">Pengembalian Uang</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* 4 */}
          <div className="row">
            <div className="col">
              <div className="col">
                <div className="col mb-3">
                  <h4 className="text-nowrap">Sosial Media</h4>
                </div>
              </div>
              <div className="col">
                <a className="navbar-brand text-primary" href="#">
                  <img src={fb} alt="Facebook cekkos" width="24" height="24" />
                </a>
                <a className="navbar-brand text-primary" href="#">
                  <img src={ig} alt="Instagram cekkos" width="24" height="24" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <GetYears/>
    </>
    );
}
