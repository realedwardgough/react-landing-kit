import { useState } from "react";
import "./App.css";

// Importing the blocks
import Navigation from "./blocks/navigation.jsx";
import Hero from "./blocks/hero.jsx";
import Customers from "./blocks/customers.jsx";
import LatestPublishing from "./blocks/latest-publishing.jsx";
import DevelopmentAndSoftware from "./blocks/development-and-software.jsx";
import MediaAndPublishing from "./blocks/media-and-publishing.jsx";
import LatestWork from "./blocks/latest-work.jsx";
import AboutUs from "./blocks/about-us.jsx";
import Pricing from "./blocks/pricing.jsx";
import CallToAction from "./blocks/calltoaction.jsx";
import Footer from "./blocks/footer.jsx";

// Importing the hooks
import Fade from "./hooks/fade.jsx";

function App() {
  Fade();

  return (
    <>
      <Navigation />
      <Hero />
      <Customers />
      <DevelopmentAndSoftware />
      <LatestWork />
      <CallToAction />
      <MediaAndPublishing />
      <LatestPublishing />
      <AboutUs />
      <Footer />
    </>
  );
}

/**
 *       
      <Pricing />
      <CallToAction />
      <Footer />
 */

export default App;
