import { useState } from "react";
import "./App.css";

import Navigation from "./components/navigation.jsx";
import Hero from "./components/hero.jsx";
import Customers from "./components/customers.jsx";
import Section from "./components/section.jsx";
import Cards from "./components/cards.jsx";
import Pricing from "./components/pricing.jsx";
import CallToAction from "./components/calltoaction.jsx";
import Footer from "./components/footer.jsx";

function App() {
  return (
    <>
      <Navigation />
      <Hero />
      <Customers />
      <Section />
      <Cards />
      <Pricing />
      <CallToAction />
      <Footer />
    </>
  );
}

export default App;
