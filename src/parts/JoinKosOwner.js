import React from 'react';
import Button from "elements/Button";
import BigTitle from "elements/BigTitle";

export default function Footer() {
    return (
      <section className="joinKosOwner d-flex align-items-center">
        <div className="container">
          <div className="row pt-4 align-items-center">
            <div className="col d-flex flex-column align-self-center justify-content-center">
              <BigTitle title="Gabung Menjadi Pemilik Kos" color="text-white" />
              <p className="text-white">
                Anda memiliki tempat untuk disewakan? langsung
                <br />
                saja gabung menjadi pemilik kos dan pasang iklan
                <br />
                kos anda.
              </p>
            </div>
            <div className="col d-flex justify-content-center">
              <Button
                isPrimary
                isLarge
                className="text-white"
                href=""
                style={{ borderRadius: "8px" }}
              >
                Gabung Sekarang
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
}
