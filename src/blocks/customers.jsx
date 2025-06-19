function Customers() {
  return (
    <section className="bg-white py-12 fade-section transition-all duration-1200 ease-in-out opacity-100 translate-y-0">
      <div className="container mx-auto flex flex-wrap items-center justify-between pb-12">
        <h2 className="w-full my-2 text-xl font-black leading-tight text-center text-gray-800 lg:mt-8">
          Our Customers
        </h2>
        <div className="w-full mb-4">
          <div className="w-64 h-1 py-0 mx-auto my-0 rounded-t opacity-25 gradient"></div>
        </div>

        <div className="flex flex-1 flex-wrap max-w-4xl mx-auto items-center justify-evenly text-xl text-gray-500 font-bold opacity-75">
          <span className="w-1/2 p-4 md:w-auto flex items-center">
            <img src="/SmokeyJoez.svg" alt="Logo" className="h-10 w-10 mr-4 fill-current opacity-75" />
            Smokey Joez
          </span>

          <span className="w-1/2 p-4 md:w-auto flex items-center">
            <img src="/DBS.svg" alt="Logo" className="h-10 w-10 mr-4 fill-current opacity-75" />
            Digital Blue Solutions
          </span>
        </div>
      </div>
    </section>
  );
}

export default Customers;
