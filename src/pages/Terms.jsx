import { useState } from "react";

// Importing the blocks
import Navigation from "../blocks/navigation.jsx";
import TermsOfService from "../blocks/terms.jsx";
import Footer from "../blocks/footer.jsx";

// Importing the hooks
import Fade from "../hooks/fade.jsx";

function Terms() {
  Fade();

  return (
    <>
      <Navigation />
      <TermsOfService />
      <Footer />
    </>
  );
}

export default Terms;
