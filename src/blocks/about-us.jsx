function AboutUs() {
  return (
    <section className="bg-gray-100 py-8" id="AboutUs">
      <div className="container max-w-5xl mx-auto m-8">
        <h2 className="w-full my-2 text-5xl font-black leading-tight text-center text-gray-800 fade-section transition-all duration-1200 ease-in-out opacity-100 translate-y-0">
          Who We Are
        </h2>
        <div className="w-full mb-4">
          <div className="w-64 h-1 py-0 mx-auto my-0 rounded-t opacity-25 gradient"></div>
        </div>

        <div className="flex flex-wrap">
          <div className="w-5/6 sm:w-1/2 p-6 fade-section transition-all duration-1200 ease-in-out opacity-100 translate-y-0">
            <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
              One Developer. One Creative Vision.
            </h3>
            <p className="text-gray-600 mb-8">
              Monstera Creative is an independent digital studio built around a simple belief: great work comes from a personal touch.
              <br /><br />
              Led by Edward Gough — a senior web developer, author, and creative professional — Monstera blends technical skill with storytelling to craft websites, media, and publishing solutions that help clients stand out.
              <br /><br />
              Whether you're a small business, an aspiring author, or a growing brand, we take your ideas seriously — and bring them to life with care, clarity, and purpose.
              <br /><br />
            <span>Small by design. Big on ideas.</span>
            </p>
          </div>
          <div className="w-full sm:w-1/2 p-6 fade-section transition-all duration-1200 ease-in-out opacity-100 translate-y-0">
            <img src="/undraw/developer.svg" className="w-full sm:h-64 mx-auto" alt="Wireframe Image" />
          </div>
        </div>

        <div className="flex flex-wrap flex-col-reverse sm:flex-row">
          <div className="w-full sm:w-1/2 p-6 mt-6 fade-section transition-all duration-1200 ease-in-out opacity-100 translate-y-0">
            <img src="/undraw/programmer.svg" className="w-full sm:h-64 mx-auto" alt="Wireframe Image" />
          </div>
          <div className="w-full sm:w-1/2 p-6 mt-6 fade-section transition-all duration-1200 ease-in-out opacity-100 translate-y-0">
            <div className="align-middle">
              <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                Code, Content & Creativity — That’s the Core
              </h3>
              <p className="text-gray-600 mb-8">
                At Monstera Creative, the goal isn’t to follow trends. It’s to build things that last. Every project is approached with the same level of dedication — whether it’s a custom-built site, a self-published book, or a handcrafted design asset.
                <br /><br />
                With a background in full-stack development and a passion for writing and visual storytelling, Edward brings a unique perspective to each project. This isn't just a job — it's a craft.
                <br /><br />
                <span>We don’t do off-the-shelf. We do made-to-measure.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
