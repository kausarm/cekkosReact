import Footer from 'parts/Footer'
import Header from 'parts/Header'
import BigTitle from "elements/BigTitle";
import React from 'react'

export default function AboutUs() {
    return (
      <>
        <Header isShowSearchNone />
        <section className="about">
          <div className="container justify-content-center">
            <div className="row flex-column">
              <div className="col text-center">
                <BigTitle title="Tentang Cek Kos" />
              </div>
              <div className="col">
                <p className="text-center">
                  Produk untuk mempermudah mecari kos di daerah Aceh dengan
                  ketepatan lokasi
                  <br />
                  dan penjelasan fasilitas yang terperinci lalu dilengkapi
                  dengan foto serta detail dari
                  <br />
                  setiap kos.
                </p>
              </div>
            </div>
            <div className="row img-about" />
            <div className="row flex-column">
              <div className="col text-center">
                <BigTitle title="Apa Yang Kami Upayakan" />
              </div>
              <div className="col">
                <p className="text-center">
                  Kami ingin membuat produk yang memudahkan semua orang dalam
                  mencari
                  <br />
                  tempat tinggal.
                </p>
              </div>
            </div>
            <div className="row features-wrapper">
              <div className="container d-flex align-content-center">
                <div className="col-12 col-md-6 justify-content-center d-flex flex-column">
                  <h3 className="fetures-title">
                    Keakuratan lokasi yang lebih baik
                  </h3>
                  <p>
                    Kami berupaya untuk meningkatkan keakuratan
                    <br />
                    lokasi kos untuk memudahkan penyewa dan
                    <br />
                    pemilik kos bertemu.
                  </p>
                </div>
                <div className="col-6 col-md-6">
                  <h3 className="fetures-title text-nowrap">
                    Mempermudah pemilik kos
                  </h3>
                  <p>
                    Fitur yang kami sediakan untuk mempermudah
                    <br />
                    pemilik kos dalam hal mengatur kos yang sudah
                    <br />
                    di pasang pada website kami.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </>
    );
}
