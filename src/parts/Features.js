import React from 'react';
import MiniCard from 'elements/MiniCard';
import Imaps from "assets/icons/Imaps.svg";
import Igembok from "assets/icons/Igembok.svg";
import Iheart from "assets/icons/Iheart.svg";
import Ipemilik from "assets/icons/Ipemilik.svg";

export default function Features() {
    return (
      <section className="benefit">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-6 col-lg-3">
              <MiniCard
                img={Imaps}
                title="TEMUKAN TEMPAT KOS YANG TEPAT"
                text="Pilih kos sesuai dengan selera dan tempat terdekat dengan kampus atau tempat kerjamu."
              />
            </div>
            <div className="col-md-6 col-6 col-lg-3">
              <MiniCard
                img={Ipemilik}
                title="PEMILIK KOS TERPERCAYA DAN RAMAH"
                text="Kami pastikan kamu bertemu dengan pemilik kos yang terpercaya dan ramah."
              />
            </div>
            <div className="col-md-6 col-6 col-lg-3 sm-adjust">
              <MiniCard
                img={Igembok}
                title="100% TRANSAKSI AMAN DAN NYAMAN"
                text="Kami pastikan kamu bertemu dengan pemilik kos yang terpercaya dan ramah."
              />
            </div>
            <div className="col-md-6 col-6 col-lg-3 sm-adjust">
              <MiniCard
                img={Iheart}
                title="DAPATKAN PENGALAMAN DI TEMPAT BARU"
                text="Nikmati harimu ditempat baru dengan berbagai pengalaman yang akan kamu dapat."
              />
            </div>
          </div>
        </div>
      </section>
    );
}
