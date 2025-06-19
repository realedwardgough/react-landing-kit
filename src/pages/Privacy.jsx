import { useState } from "react";

// Importing the blocks
import Navigation from "../blocks/navigation.jsx";
import PrivacyPolicy from "../blocks/privacy.jsx";
import Footer from "../blocks/footer.jsx";

// Importing the hooks
import Fade from "../hooks/fade.jsx";

function Privacy() {
  Fade();

  return (
    <>
      <Navigation />
      <PrivacyPolicy />
      <Footer />
    </>
  );
}

export default Privacy;
