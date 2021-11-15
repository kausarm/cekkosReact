import AboutUs from 'pages/AboutUs';
import LandingPage from 'pages/LandingPage'
import PemilikKos from 'pages/PemilikKos';
import SemuaKos from "pages/SemuaKos";
import React from 'react'
import { Route, Switch } from 'react-router-dom'


export default function index() {
    return (
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/AboutUs" component={AboutUs} />
        <Route path="/PemilikKos" component={PemilikKos} />
        <Route path="/SemuaKos" component={SemuaKos} />
      </Switch>
    );
}
