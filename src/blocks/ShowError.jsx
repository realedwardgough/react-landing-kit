function ShowError() {
  return (
    <section className="bg-gray-100 py-8" id="MediaAndPublishing">
      <div className="container max-w-5xl mx-auto m-8">
        <h2 className="w-full my-2 text-5xl font-black leading-tight text-center text-gray-800 fade-section transition-all duration-1200 ease-in-out opacity-100 translate-y-0">
          404
        </h2>
        <div className="w-full mb-4">
          <div className="w-64 h-1 py-0 mx-auto my-0 rounded-t opacity-25 gradient"></div>
        </div> 

        <div className="flex flex-wrap">
          <div className="w-full p-6 fade-section transition-all duration-1200 ease-in-out opacity-100 translate-y-0 items-center flex justify-center">
            <p className="text-gray-600 mb-8">
               The page you are looking for does not exist.
            </p>
          </div>
        </div>
        </div>
    </section>
  );
}

export default ShowError;