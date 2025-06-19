function MediaAndPublishing() {
  return (
    <section className="bg-gray-100 py-8" id="MediaAndPublishing">
      <div className="container max-w-5xl mx-auto m-8">
        <h2 className="w-full my-2 text-5xl font-black leading-tight text-center text-gray-800 fade-section transition-all duration-1200 ease-in-out opacity-100 translate-y-0">
          Media & Publishing
        </h2>
        <div className="w-full mb-4">
          <div className="w-64 h-1 py-0 mx-auto my-0 rounded-t opacity-25 gradient"></div>
        </div>

        <div className="flex flex-wrap">
          <div className="w-5/6 sm:w-1/2 p-6 fade-section transition-all duration-1200 ease-in-out opacity-100 translate-y-0">
            <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
              Helping New Voices Be Heard
            </h3>
            <p className="text-gray-600 mb-8">
              At Monstera Creative, we work with emerging authors to help turn manuscripts into professionally published books — without the overwhelm.
              <br /><br />
              Whether you’ve written a novel, a collection of short stories, or something in between, we’ll guide you through the full publishing process. From formatting and cover design to ISBN registration and metadata, we’ll help get your book listed on major platforms like Amazon, Google Books, Kobo, and more — in eBook, paperback, and hardcover formats.
              <br /><br />
              Our approach is flexible, collaborative, and transparent — because every author’s journey is unique, and your story deserves the best possible launch.
            </p>
          </div>
          <div className="w-full sm:w-1/2 p-6 fade-section transition-all duration-1200 ease-in-out opacity-100 translate-y-0">
            <img src="/undraw/books.svg" className="w-full sm:h-64 mx-auto" alt="Wireframe Image" />
          </div>
        </div>

        <div className="flex flex-wrap flex-col-reverse sm:flex-row">
          <div className="w-full sm:w-1/2 p-6 mt-6 fade-section transition-all duration-1200 ease-in-out opacity-100 translate-y-0">
            <img src="/undraw/design.svg" className="w-full sm:h-64 mx-auto" alt="Wireframe Image" />
          </div>
          <div className="w-full sm:w-1/2 p-6 mt-6 fade-section transition-all duration-1200 ease-in-out opacity-100 translate-y-0">
            <div className="align-middle">
              <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                Designs That Speak for Your Brand
              </h3>
              <p className="text-gray-600 mb-8">
                We offer a full range of media design services to help businesses communicate with clarity and style — both online and in print.
                <br /><br />
                Need a striking leaflet, a bold digital advert, or a polished PDF for your next pitch? We’ve got you covered. Whether you're starting with a sketch or just an idea, we’ll bring it to life with thoughtful, on-brand design tailored to your goals.
                <br /><br />
                From business cards to banners, brochures to social media content — if you need it, and we can design it, we will.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MediaAndPublishing;
