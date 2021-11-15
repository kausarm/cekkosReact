import React from 'react'
import searchIcon from "assets/icons/searchIcon.svg";
import Button from "elements/Button";

export default function Hero() {
    return (
      <section className="hero">
        <div className="container d-flex flex-column justify-content-center">
          <div className="row">
            <div className="col">
              <h1 className="text-white">
                Temukan Pengalaman Baru <br /> di Tempat Baru
              </h1>
            </div>
          </div>
          <div className="row search-wrapper">
            <form className="d-flex align-items-center justify-content-between">
              <div className="col-md-3">
                <label for="lokasi" class="form-label ms-2">
                  Lokasi
                </label>
                <input
                  type="text"
                  className="form-control border-0 text-decoration-underline"
                  placeholder="Masukkan Lokasi Kos"
                  id="lokasi"
                ></input>
              </div>
              <div className="col-md-3 vertical-line"></div>
              <div className="col-md-3">
                <label for="tipe" className="form-label ms-2">
                  Tipe
                </label>
                <select
                  className="form-select border-0 text-decoration-underline"
                  id="tipe"
                  aria-label="Example select with button addon"
                >
                  <option defaultValue>Masukkan Tipe Kos</option>
                  <option value="1">Putra</option>
                  <option value="2">Putri</option>
                </select>
              </div>
              <div className="col-md-3 ms-4">
                <Button className="btn mb-5 ms-5">
                  <img src={searchIcon} alt="searhIcon" />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
}
