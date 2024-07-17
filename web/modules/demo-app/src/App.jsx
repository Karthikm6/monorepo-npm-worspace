import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Header from 'header/Header';
import Footer from 'footer/Footer';
import Banner from 'banner/Banner';
import Cards from 'cards/Cards';

const App = () => (
  <div className="container">
    <Header />
    <Banner />
    <Cards />
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
