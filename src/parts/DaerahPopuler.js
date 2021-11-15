import React from 'react';
import monas from "assets/icons/card/places/monas.png";
import aceh from "assets/icons/card/places/aceh.png";
import BigTitle from "elements/BigTitle";
import CardOverlay from "elements/CardOverlay/CardOverlay";

export default function DaerahPopuler() {
    return (
      <section className="popular">
        <div className="container">
          <div className="row">
            <div className="col">
              <BigTitle title="Daerah Populer" />
            </div>
          </div>
          <div className="row row-cardOverlay">
            <div className="col">
              <CardOverlay isBig img={monas} city="Jakarta" />
            </div>
            <div className="col d-flex align-content-between flex-wrap">
              <div className="row">
                <div className="col">
                  <CardOverlay isSmall img={aceh} city="Surabaya" />
                </div>
                <div className="col">
                  <CardOverlay isSmall img={aceh} city="Bali" />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <CardOverlay isSmall img={aceh} city="Aceh" />
                </div>
                <div className="col">
                  <CardOverlay isSmall img={aceh} city="Lampung" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}
