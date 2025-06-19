function LatestPublishing() {
  return (
    <section className="w-full mx-auto text-center pr-2 pl-2 pt-6 pb-12 flex flex-col items-center justify-center bg-white">
    
    <div className="bg-white">
        <h2 className="w-full my-2 text-xl font-black leading-tight text-center text-gray-800 lg:mt-8 fade-section transition-all duration-1200 ease-in-out opacity-100 translate-y-0">
          Our Library
        </h2>
        <div className="w-full mb-4">
          <div className="w-64 h-1 py-0 mx-auto my-0 rounded-t opacity-25 gradient"></div>
        </div>
    </div>

    <div className="bg-white px-6 py-10 mx-auto flex justify-center">

        <div className="lg:-mx-6 lg:flex lg:items-center">
            <img className="lg:mx-6 w-auto rounded-lg max-h-150 fade-section transition-all duration-1200 ease-in-out opacity-100 translate-y-0" src="/books/stonecoldtrigger.png" alt="" />

            <div className="mt-8 lg:w-1/2 lg:px-6 lg:mt-0 fade-section transition-all duration-1200 ease-in-out opacity-100 translate-y-0">
                <h1 className="text-2xl font-semibold text-gray-700 lg:text-3xl lg:w-96">
                    Stone Cold Trigger
                </h1>

                <p className="max-w-lg mt-6 text-gray-500">
                    The first of many novels in the Thomas Stone Thriller series, "Stone Cold Trigger" introduces readers to a world of suspense and intrigue. Follow the journey of Thomas Stone as he navigates through a web of deception and danger, uncovering secrets that could change everything.
                    This gripping thriller is a must-read for fans of action-packed narratives and complex characters.

                    <br />
                    <br />

                    Stone Cold Trigger will be published later this year, and is available soon for pre-order on Amazon and other major retailers.
                </p>

                <h3 className="mt-6 text-lg font-medium text-blue-400">by Edward Gough</h3>
                <p className="text-gray-600 dark:text-gray-400">Founder of Monstera & Author</p>
            </div>
        </div>
    </div>
</section>
  );
}

export default LatestPublishing;
