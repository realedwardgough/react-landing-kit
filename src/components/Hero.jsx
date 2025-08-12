import Button from "./Button.jsx";
function Hero() {
  return (
    <div className="container mx-auto h-screen">
      <div className="text-center px-3 lg:px-0 fade-section transition-all duration-1200 ease-in-out opacity-100 translate-y-0">
        <h1 className="my-4 text-2xl md:text-3xl lg:text-5xl font-black leading-tight">
          Whether you're here for <span className="highlight-one">code</span>,{" "}
          <span className="highlight-two">content</span>, or{" "}
          <span className="highlight-three">creativity</span> — you're in good
          hands.
        </h1>
        <p className="leading-normal text-gray-800 text-base md:text-xl lg:text-2xl mb-8">
          At <b>your company</b>, we specialise in freelance web development
          that blends technical expertise with creative insight.
        </p>
        <Button label="Learn More" href="#DevelopmentAndSoftware" />
        <a
          href="#LatestWork"
          className="inline-block mx-auto lg:mx-0 hover:underline bg-transparent text-gray-600 font-extrabold my-2 md:my-6 py-2 lg:py-4 px-8"
        >
          See Our Work
        </a>
      </div>
      <div className="flex items-center w-full mx-auto content-end fade-section transition-all duration-1200 ease-in-out opacity-100 translate-y-0">
        <div className="browser-mockup flex flex-1 m-6 md:px-0 md:m-12 bg-white w-1/2 rounded shadow-xl items-center h-[60vh]">
          <img
            src="/undraw/construction.svg"
            className="w-full sm:h-64 mx-auto"
            alt="Contruction Image"
          />
        </div>
      </div>
    </div>
  );
}
export default Hero;
