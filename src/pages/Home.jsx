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
import Fade from "../hooks/fade.jsx";

function Home() {
  
  // Render fade hook
  Fade();

  return (
    <>
      {/* Navigation with logo and menu */}
      <Navigation>
        <Logo img="/monstera-long.svg" alt="Monstera Creative Logo with the three coloured bars behind the text." size="large"/>
        <Menu />
      </Navigation>

      {/* Hero Section */}
      <Hero />

      {/* Our Customers Section */}
      <Container color="white" title="Our Customers" id="Customers">
        <Showcase>
          <ShowcaseItem title="Smokey Joez" img="/SmokeyJoez.svg" alt="Smokey Joez's Logo"/>
          <ShowcaseItem title="Digital Blue Solutions" img="/DBS.svg" alt="Digital Blue Solution's Logo"/>
        </Showcase>
      </Container>

      {/* Development & Software Section */}
      <Container color="grey" title="Development & Software" titleSize="large" id="DevelopmentAndSoftware">
        <ImageWithText title="Bespoke Web Solutions, Built Around You" img="/undraw/wireframe.svg" alt="Wireframe Image" direction="right">
          Whether you need a sleek one-page portfolio or a fully-featured business platform, we’ll work with you directly to design and develop a website that fits your vision and goals.
          <br /><br />
          At Monstera, we believe every project deserves attention to detail and a tailored approach. You’ll receive a clear quote, full transparency throughout the process, and a modern, performant website built using the latest technologies.
          <br /><br />
          From design to deployment — we handle it all, so you can focus on running your business.
        </ImageWithText>
        <ImageWithText title="Your Business. Your Website. One Powerful Platform." img="/undraw/financialdata.svg" alt="Financial Data Image" direction="left">
          The Monstera Creative Suite is our upcoming all-in-one web platform designed to help you launch, manage, and grow your online business — with zero technical hassle.
          <br /><br />
          Build landing pages, launch an online store, showcase your work, or publish content — all from a single dashboard. No code, no complexity — just powerful tools made simple.
          <br /><br />
          We’re building this suite with flexibility in mind, so whether you're a creator, entrepreneur, or small business owner, you’ll have the tools to scale at your fingertips.
        </ImageWithText>
      </Container>
  
      {/* Our Work Section */}
      <Container color="white" title="Our Work" id="LatestWork">
        <Image title="Smokey Joez" url="https://smokeyjoez.co.uk" img="/projects/smokeyjoez.png" alt="Smokey Joez Website Screenshot" />
        <Image title="Edward Gough" url="https://edwardgough.co.uk" img="/projects/edwardgough.png" alt="Edward Gough Website Screenshot" />
      </Container>

      {/* Call To Action Section */}
      <CTA title="Enquire Today" label="Enquire" url="mailto:enquire@monstera-creative.co.uk">
        Leave your details and basic requirements and we will get back to you
        within 24 hours.
      </CTA>

      {/* Media & Publishing Section */}
      <Container color="grey" title="Media & Publishing" titleSize="large" id="MediaAndPublishing">
        <ImageWithText title="Helping New Voices Be Heard" img="/undraw/books.svg" alt="Books Image" direction="right">
          At Monstera Creative, we work with emerging authors to help turn manuscripts into professionally published books — without the overwhelm.
          <br /><br />
          Whether you’ve written a novel, a collection of short stories, or something in between, we’ll guide you through the full publishing process. From formatting and cover design to ISBN registration and metadata, we’ll help get your book listed on major platforms like Amazon, Google Books, Kobo, and more — in eBook, paperback, and hardcover formats.
          <br /><br />
          Our approach is flexible, collaborative, and transparent — because every author’s journey is unique, and your story deserves the best possible launch.
        </ImageWithText>
        <ImageWithText title="Designs That Speak for Your Brand" img="/undraw/design.svg" alt="Design Image" direction="left">
          We offer a full range of media design services to help businesses communicate with clarity and style — both online and in print.
          <br /><br />
          Need a striking leaflet, a bold digital advert, or a polished PDF for your next pitch? We’ve got you covered. Whether you're starting with a sketch or just an idea, we’ll bring it to life with thoughtful, on-brand design tailored to your goals.
          <br /><br />
          From business cards to banners, brochures to social media content — if you need it, and we can design it, we will.
        </ImageWithText>
      </Container>

      {/* Our Library Section */}
      <Container color="white" title="Our Library">
        <ImageWithText title="Stone Cold Trigger" img="/books/stonecoldtrigger.png" alt="Developer Image" direction="left">
          The first of many novels in the Thomas Stone Thriller series, "Stone Cold Trigger" introduces readers to a world of suspense and intrigue. Follow the journey of Thomas Stone as he navigates through a web of deception and danger, uncovering secrets that could change everything.
          This gripping thriller is a must-read for fans of action-packed narratives and complex characters.
          <br />
          <br />
          Stone Cold Trigger will be published later this year, and is available soon for pre-order on Amazon and other major retailers.
          <span className="mt-6 text-lg font-medium text-blue-400">by Edward Gough</span>
          <span className="text-gray-600 dark:text-gray-400">Founder of Monstera & Author</span>
        </ImageWithText>
      </Container>
      
      {/* Who We Are Section */}
      <Container color="grey" title="Who We Are" titleSize="large" id="AboutUs">
        <ImageWithText title="One Developer. One Creative Vision." img="/undraw/developer.svg" alt="Developer Image" direction="right">
          Monstera Creative is an independent digital studio built around a simple belief: great work comes from a personal touch.
          <br /><br />
          Led by Edward Gough — a senior web developer, author, and creative professional — Monstera blends technical skill with storytelling to craft websites, media, and publishing solutions that help clients stand out.
          <br /><br />
          Whether you're a small business, an aspiring author, or a growing brand, we take your ideas seriously — and bring them to life with care, clarity, and purpose.
          <br /><br />
          <span>Small by design. Big on ideas.</span>
        </ImageWithText>
        <ImageWithText title="Code, Content & Creativity — That’s the Core" img="/undraw/programmer.svg" alt="Programmer Image" direction="left">
          At Monstera Creative, the goal isn’t to follow trends. It’s to build things that last. Every project is approached with the same level of dedication — whether it’s a custom-built site, a self-published book, or a handcrafted design asset.
          <br /><br />
          With a background in full-stack development and a passion for writing and visual storytelling, Edward brings a unique perspective to each project. This isn't just a job — it's a craft.
          <br /><br />
          <span>We don’t do off-the-shelf. We do made-to-measure.</span>
        </ImageWithText>
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
export default Home;