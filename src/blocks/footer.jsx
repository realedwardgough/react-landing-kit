function Footer() {
  return (
    <footer className="bg-white ">
      <div className="container mx-auto mt-8 px-8">
        <div className="w-full flex flex-col md:flex-row py-6">
          <div className="flex-1 mb-6">
            <a
              className="text-orange-600 no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
              href="#"
            >
              <img src="/monstera-long.svg" alt="Logo" className=" w-[80%]" />
            </a>
          </div>

      
          <div className="flex-1">
            <p className="uppercase font-extrabold text-gray-500 md:mb-6">
              Legal
            </p>
            <ul className="list-reset mb-6">
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="/terms"
                  className="font-light no-underline hover:underline text-gray-800 hover:text-orange-500"
                >
                  Terms
                </a>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="/privacy"
                  className="font-light no-underline hover:underline text-gray-800 hover:text-orange-500"
                >
                  Privacy
                </a>
              </li>
            </ul>
          </div>
          
          <div className="flex-1">
            <p className="uppercase font-extrabold text-gray-500 md:mb-6">
              Social
            </p>
            <ul className="list-reset mb-6">
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="https://www.linkedin.com/in/realedwardgough/"
                  className="font-light no-underline hover:underline text-gray-800 hover:text-orange-500"
                >
                  Linkedin
                </a>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="https://x.com/realedwardgough"
                  className="font-light no-underline hover:underline text-gray-800 hover:text-orange-500"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>
          
          <div className="flex-1">
            <p className="uppercase font-extrabold text-gray-500 md:mb-6">
              Company
            </p>
            <ul className="list-reset mb-6">
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="#AboutUs"
                  className="font-light no-underline hover:underline text-gray-800 hover:text-orange-500"
                >
                  About Us
                </a>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="mailto:enquire@monstera-creative.co.uk"
                  className="font-light no-underline hover:underline text-gray-800 hover:text-orange-500"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
