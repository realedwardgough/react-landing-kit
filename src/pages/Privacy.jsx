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
import Text from "../components/Text.jsx";

// Importing the hooks - fade
import Fade from "../hooks/fade.jsx";

function Privacy() {
  
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
      <Container color="grey" title="Privacy Policy" titleSize="large">
        <Text>
          This website is operated by Monstera Creative (Edward Gough). We respect your privacy and are committed to protecting any personal information you may provide.
        </Text>
        <Text title="1. Information We Collect">
          We do not collect any personal information directly through this website. There are no contact forms, login systems, or data entry fields.
        </Text>
        <Text title="2. Cookies & Analytics">
          This website does not use tracking cookies or analytics tools (e.g., Google Analytics). If this changes in the future, this policy will be updated accordingly.
        </Text>
        <Text title="3. Embedded Content">
          This site may contain links to third-party websites or services (e.g., portfolio items hosted elsewhere). These sites may collect data in accordance with their own privacy policies.
        </Text>
        <Text title="4. Contact">
          If you choose to contact me via email or other listed methods, the information you provide will only be used to respond to your query and will not be stored or shared without your consent.
        </Text>
        <Text title="5. Changes to This Policy">
          This privacy policy may be updated from time to time. The most current version will always be available on this page.
          <br /><br />
          If you have any questions, you can contact me at, contact us at <a href="mailto:info@monstera-creative.co.uk" className="font-bold">info@monstera-creative.co.uk</a>.
        </Text>
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
export default Privacy;