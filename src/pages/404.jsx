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
import useFade from "../hooks/useFade.jsx";

function NotFound() {
  // Render fade hook
  useFade();

  return (
    <>
      {/* Navigation with logo and menu */}
      <Navigation>
        <Logo
          img="/images/your-logo.svg"
          alt="Company Logo with a simple abstract icon"
          size="large"
        />
        <Menu />
      </Navigation>

      {/* Who We Are Section */}
      <Container color="white" title="404" titleSize="large">
        <FullImage
          title=""
          url="/test"
          img="/undraw/404.svg"
          alt="404 Error Image"
        />
      </Container>

      {/* Footer with logo and menu */}
      <Footer>
        <List title="Legal">
          <ListItem href="/terms" text="Terms of Service" />
          <ListItem href="/privacy" text="Privacy Policy" />
        </List>
        <List title="Social">
          <ListItem href="#" text="Linkedin" />
          <ListItem href="#" text="X (Twitter)" />
        </List>
        <List title="Company">
          <ListItem href="#AboutUs" text="About Us" />
          <ListItem
            href="mailto:yourcompany@yourdomain.co.uk"
            text="Contact Us"
          />
        </List>
      </Footer>
    </>
  );
}
export default NotFound;
