import React from 'react'
import Imap from "assets/icons/mapIcons.svg";
import Goto from "elements/Goto";
import BigTitle from "elements/BigTitle";
import Button from 'elements/Button';
import Card from "elements/Card";
import Gap from "elements/Gap";

export default function Products() {
    return (
      <section className="allProduct">
        <div className="container">
          <div className="row ">
            <div className="col-sm-12 col-md-6">
              <BigTitle title="Semua Kos" />
            </div>
            <div className="col-sm-12 col-md-6 goto">
              <Goto link="Lihat Semua" img={Imap} />
            </div>
          </div>
          <div className="row filtering">
            <div className="col">
              <Button className="btn filterItem btn-sm btn-secondary">
                Tipe kos
              </Button>
              <Button className="btn filterItem btn-sm btn-secondary">
                Harga
              </Button>
              <Button className="btn filterItem btn-sm btn-secondary">
                Jangka Waktu
              </Button>
              <Button className="btn filterItem btn-sm btn-secondary">
                Lainnya
              </Button>
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
            <Gap height="32px" />
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
          <div className="row pagination">
            <nav aria-label="...">
              <ul className="pagination">
                <li className="page-item disabled">
                  <a className="page-link">Previous</a>
                </li>
                <li className="page-item active" aria-current="page">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item ">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    Next
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
    );
}
