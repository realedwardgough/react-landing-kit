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

// Importing the hooks
import useFade from "../hooks/useFade.jsx";

function Terms() {
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

      {/* Terms of Service content script */}
      <Container color="grey" title="Terms of Service" titleSize="large">
        <Text>
          Welcome to [Your Company Name]. By accessing or using this website,
          you agree to the following terms and conditions:
        </Text>
        <Text title="1. Use of This Website">
          This website is intended to showcase the services and work of [Your
          Company Name]. You may browse the site for personal and informational
          purposes only.
        </Text>
        <Text title="2. Intellectual Property">
          All content on this site, including text, images, and code samples, is
          the property of [Your Company Name] unless otherwise stated. You may
          not copy, reproduce, or use any content without permission.
        </Text>
        <Text title="3. Links to Third-Party Sites">
          This website may include links to third-party websites or services for
          portfolio or informational purposes. [Your Company Name] is not
          responsible for the content or practices of those sites.
        </Text>
        <Text title="4. No Guarantees">
          While all effort is made to ensure accuracy and professionalism, the
          website is provided “as is” without warranties of any kind, express or
          implied. Availability and content may change at any time.
        </Text>
        <Text title="5. Contact & Communication">
          Any inquiries submitted via email or contact methods listed are
          handled confidentially. Communication does not establish a client
          relationship until confirmed in writing.
        </Text>
        <Text title="6. Governing Law">
          These terms are governed by the laws applicable to your location. Any
          disputes will be subject to the jurisdiction of the relevant courts.
        </Text>
        <Text title="7. Changes to Terms">
          We reserve the right to update these terms at any time. Continued use
          of the website after changes indicates your acceptance of the revised
          terms.
          <br />
          <br />
          If you have questions regarding these terms, contact us at{" "}
          <a href="mailto:info@yourcompany.co.uk" className="font-bold">
            info@yourcompany.co.uk
          </a>
          .
        </Text>
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

export default Terms;
