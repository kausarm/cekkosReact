import React, { useState } from "react";
import Header from "parts/Header";
import Hero from "parts/Hero";
import Features from "parts/Features";
import KosPopuler from "parts/KosPopuler";
import DaerahPopuler from "parts/DaerahPopuler";
import JoinKosOwner from "parts/JoinKosOwner";
import Footer from "parts/Footer";
import Modal from "elements/Modal";
import Button from "elements/Button";


export default function LandingPage() {

  return (
    <>
      <Header isShowSearchNone />
      <Hero />
      <Features />
      <KosPopuler />
      <DaerahPopuler />
      <JoinKosOwner />
      <Footer />
    </>
  );
}
