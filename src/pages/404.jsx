import { useState } from "react";

// Importing the elements - navigation, logo, and menu
import Navigation from "../components/Navigation.jsx";
import Logo from "../components/Logo.jsx";
import Menu from "../components/Menu.jsx";

// Importing the elements - footer, list, and list item
import Footer from "../components/Footer.jsx";
import List from "../components/List.jsx";
import ListItem from "../components/ListItem.jsx";

// Importing the elements - container, and text
import Container from "../components/Container.jsx";
import FullImage from "../components/FullImage.jsx";

// Importing the hooks
import Fade from "../hooks/fade.jsx";

function NotFound() {
  
  // Render fade hook
  Fade();

  return (
    <>
      {/* Navigation with logo and menu */}
      <Navigation>
        <Logo img="/monstera-long.svg" alt="Monstera Creative Logo with the three coloured bars behind the text." size="large"/>
        <Menu />
      </Navigation>


      {/* Who We Are Section */}
      <Container color="white" title="404" titleSize="large">
        <FullImage title="" url="/test" img="/undraw/404.svg" alt="404 Error Image" />
      </Container>


      {/* Footer with logo and menu */}
      <Footer>
        <List title="Legal">
          <ListItem href="/terms" text="Terms of Service" />
          <ListItem href="/privacy" text="Privacy Policy" />
        </List>
        <List title="Social">
          <ListItem href="https://www.linkedin.com/in/realedwardgough/" text="Linkedin" />
          <ListItem href="https://x.com/realedwardgough" text="X (Twitter)" />
        </List>
        <List title="Company">
          <ListItem href="#AboutUs" text="About Us" />
          <ListItem href="mailto:enquire@monstera-creative.co.uk" text="Contact Us" />
        </List>
      </Footer>
    </>
  );
}
export default NotFound;
