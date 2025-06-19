function LatestWork() {
  return (
    <section className="w-full mx-auto text-center pr-2 pl-2 pt-6 pb-12 flex flex-col items-center justify-center bg-white" id="LatestWork">
    
    <div className="bg-white">
        <h2 className="w-full my-2 text-xl font-black leading-tight text-center text-gray-800 lg:mt-8 fade-section transition-all duration-1200 ease-in-out opacity-100 translate-y-0">
          Our Work
        </h2>
        <div className="w-full mb-4">
          <div className="w-64 h-1 py-0 mx-auto my-0 rounded-t opacity-25 gradient"></div>
        </div>
    </div>

    <div className="bg-white px-6 py-10 mx-auto flex justify-center">
      <div className="flex flex-col items-center w-full mx-auto content-end fade-section transition-all duration-1200 ease-in-out opacity-100 translate-y-0">
        <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3"><a href="https://smokeyjoez.co.uk">SmokeyJoez.co.uk</a></h3>
        <div className="browser-mockup flex flex-1 m-6 md:px-0 md:m-12 bg-white rounded shadow-xl items-center h-fit w-[80%]">
          <img src="/projects/smokeyjoez.png" className="w-full sm:h-64 mx-auto" alt="Wireframe Image" />
        </div>
      </div>
    </div>

    <div className="bg-white px-6 py-10 mx-auto flex justify-center">
      <div className="flex flex-col items-center w-full mx-auto content-end fade-section transition-all duration-1200 ease-in-out opacity-100 translate-y-0">
        <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3"><a href="https://edwardgough.co.uk">EdwardGough.co.uk</a></h3>
        <div className="browser-mockup flex flex-1 m-6 md:px-0 md:m-12 bg-white rounded shadow-xl items-center h-fit w-[80%]">
          <img src="/projects/edwardgough.png" className="w-full sm:h-64 mx-auto" alt="Wireframe Image" />
        </div>
      </div>
    </div>
</section>
  );
}

export default LatestWork;
