import React from 'react';

export default function GetYears() {
    return (
      <footer className="date-footer d-flex align-items-center pt-3">
        <div className="container d-flex justify-content-center">
          <div className="row">
            <div className="col">
              <p>© {new Date().getFullYear()} Cek Kos, All rights reserved</p>
            </div>
          </div>
        </div>
      </footer>
    );
}
