import { useState } from "react";

// Importing the elements - navigation, logo, and menu
import Navigation from "../components/Navigation.jsx";
import Logo from "../components/Logo.jsx";
import Menu from "../components/Menu.jsx";

// Importing the elements - footer, list, and list item
import Footer from "../components/Footer.jsx";
import List from "../components/List.jsx";
import ListItem from "../components/ListItem.jsx";

// Importing the elements - container, image with text, and portfolio item
import Container from "../components/Container.jsx";
import ImageWithText from "../components/ImageWithText.jsx";
import Image from "../components/Image.jsx";

// Importing the elements - showcase, showcase item, hero, and CTA
import Showcase from "../components/Showcase.jsx";
import ShowcaseItem from "../components/ShowcaseItem.jsx";
import Hero from "../components/Hero.jsx";
import CTA from "../components/CTA.jsx";

// Importing the hooks - fade
import useFade from "../hooks/useFade.jsx";

function Home() {
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

      {/* Hero Section */}
      <Hero />

      {/* Our Clients Section */}
      <Container color="white" title="Our Clients" id="Clients">
        <Showcase>
          <ShowcaseItem
            title="Client One"
            img="/images/DBS.svg"
            alt="Client One Logo"
          />
          <ShowcaseItem
            title="Client Two"
            img="/images/DBS.svg"
            alt="Client Two Logo"
          />
        </Showcase>
      </Container>

      {/* Services Section */}
      <Container color="grey" title="Services" titleSize="large" id="Services">
        <ImageWithText
          title="Custom Web Solutions, Designed for You"
          img="/undraw/wireframe.svg"
          alt="Web Development Illustration"
          direction="right"
        >
          Whether you need a simple portfolio or a full-featured business
          platform, we collaborate with you to create a website tailored to your
          vision and goals.
          <br />
          <br />
          We prioritize attention to detail and transparency throughout the
          process. Expect clear quotes and a modern, performant website built
          with current technologies.
          <br />
          <br />
          From initial design to final deployment, we handle everything so you
          can focus on your business.
        </ImageWithText>
        <ImageWithText
          title="Your Business. Your Platform. One Simple Solution."
          img="/undraw/financialdata.svg"
          alt="Business Platform Illustration"
          direction="left"
        >
          Our upcoming all-in-one digital platform helps you launch, manage, and
          grow your online presence with ease.
          <br />
          <br />
          Build landing pages, open online stores, showcase your portfolio, or
          publish content — all from a single, user-friendly dashboard.
          <br />
          <br />
          Designed with flexibility for creators, entrepreneurs, and small
          business owners, providing scalable tools to grow your business.
        </ImageWithText>
      </Container>

      {/* Portfolio Section */}
      <Container color="white" title="Portfolio" id="Portfolio">
        <Image
          title="Client One Project"
          url="#"
          img="/images/portfolio-image-1.png"
          alt="Client One Project Screenshot"
        />
        <Image
          title="Client Two Project"
          url="#"
          img="/images/portfolio-image-1.png"
          alt="Client Two Project Screenshot"
        />
      </Container>

      {/* Call To Action Section */}
      <CTA
        title="Get in Touch"
        label="Contact Us"
        url="mailto:yourcompany@yourdomain.co.uk"
      >
        Leave your contact details and basic project requirements, and we'll
        respond within 24 hours.
      </CTA>

      {/* Media & Publishing Section */}
      <Container
        color="grey"
        title="Media & Publishing"
        titleSize="large"
        id="MediaPublishing"
      >
        <ImageWithText
          title="Supporting Emerging Creators"
          img="/undraw/books.svg"
          alt="Media Publishing Illustration"
          direction="right"
        >
          We assist authors and content creators in bringing their projects to
          life, handling everything from editing and design to distribution
          across major platforms.
          <br />
          <br />
          Our approach is flexible and transparent, tailored to meet the unique
          needs of every creator.
        </ImageWithText>
        <ImageWithText
          title="Design Services That Amplify Your Brand"
          img="/undraw/design.svg"
          alt="Creative Design Illustration"
          direction="left"
        >
          Offering a full suite of design services for digital and print,
          including marketing materials, advertisements, and brand collateral.
          <br />
          <br />
          Whether you have a concept or just an idea, we bring it to life with
          thoughtful, on-brand designs crafted to meet your objectives.
        </ImageWithText>
      </Container>

      {/* Resources Section */}
      <Container color="white" title="Resources">
        <ImageWithText
          title="Featured Project"
          img="/images/portfolio-image-1.png"
          alt="Featured Project Illustration"
          direction="left"
        >
          Discover one of our highlighted projects showcasing creativity,
          innovation, and dedication to quality.
          <br />
          <br />
          Stay tuned for upcoming releases and portfolio additions.
        </ImageWithText>
      </Container>

      {/* About Us Section */}
      <Container color="grey" title="About Us" titleSize="large" id="AboutUs">
        <ImageWithText
          title="A Passionate Team with a Personal Touch"
          img="/undraw/developer.svg"
          alt="Teamwork Illustration"
          direction="right"
        >
          We are a small, independent digital studio committed to delivering
          personalized service and exceptional results.
          <br />
          <br />
          Combining technical expertise with creative storytelling, we help
          businesses and individuals bring their ideas to life.
          <br />
          <br />
          Whether you’re a startup, a creative professional, or an established
          company, we treat every project with care and dedication.
          <br />
          <br />
          <span>Small by design. Big on ideas.</span>
        </ImageWithText>
        <ImageWithText
          title="Quality, Creativity & Craftsmanship"
          img="/undraw/programmer.svg"
          alt="Creativity Illustration"
          direction="left"
        >
          Our goal is to build solutions that stand the test of time.
          <br />
          <br />
          Every project is crafted with attention to detail — no cookie-cutter
          solutions.
          <br />
          <br />
          We take pride in custom work that reflects your unique vision and
          needs.
          <br />
          <br />
          <span>Made to measure. Built to last.</span>
        </ImageWithText>
      </Container>

      {/* Footer with legal and contact links */}
      <Footer>
        <List title="Legal">
          <ListItem href="/terms" text="Terms of Service" />
          <ListItem href="/privacy" text="Privacy Policy" />
        </List>
        <List title="Social">
          <ListItem href="#" text="LinkedIn" />
          <ListItem href="#" text="Twitter" />
        </List>
        <List title="Company">
          <ListItem href="#AboutUs" text="About Us" />
          <ListItem
            href="mailto:enquire@monstera-creative.co.uk"
            text="Contact Us"
          />
        </List>
      </Footer>
    </>
  );
}

export default Home;
