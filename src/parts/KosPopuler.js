import React from 'react';
import Aright from "assets/icons/ArrowRight.svg";
import Goto from "elements/Goto";
import BigTitle from "elements/BigTitle";
import Card from "elements/Card";

export default function KosPopuler() {
    return (
      <section className="card-section">
        <div className="container">
          <div className="row ">
            <div className="col-sm-12 col-md-6">
              <BigTitle title="Kos Populer" />
            </div>
            <div className="col-sm-12 col-md-6 goto">
              <Goto link="Lihat Semua" img={Aright} />
            </div>
          </div>
          <div className="row card-row ">
            <div className="col-md-6 col-sm-6 col-lg-3">
              <Card
                labelName="Putra"
                placeSize="10x3 M"
                cardTitle="Kos Hino Kana"
              />
            </div>
            <div className="col-md-6 col-sm-6 col-lg-3">
              <Card
                labelName="Putri"
                placeSize="10x3 M"
                cardTitle="Kos Hino Kana"
              />
            </div>
            <div className="col-md-6 col-sm-6 col-lg-3">
              <Card
                labelName="Putra"
                placeSize="10x3 M"
                cardTitle="Kos Hino Kana"
              />
            </div>
            <div className="col-md-6 col-sm-6 col-lg-3">
              <Card
                labelName="Putra"
                placeSize="10x3 M"
                cardTitle="Kos Hino Kana"
              />
            </div>
          </div>
        </div>
      </section>
    );
}
