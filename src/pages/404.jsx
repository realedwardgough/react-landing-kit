import { useState } from "react";

// Importing the blocks
import Navigation from "../blocks/navigation.jsx";
import ShowError from "../blocks/ShowError.jsx";
import Footer from "../blocks/footer.jsx";

// Importing the hooks
import Fade from "../hooks/fade.jsx";

function NotFound() {
  Fade();

  return (
    <>
      <Navigation />
      <ShowError />
      <Footer />
    </>
  );
}

export default NotFound;
