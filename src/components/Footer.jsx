function Footer(props) {
  return (
    <footer className="bg-white ">
      <div className="container mx-auto mt-8 px-8">
        <div className="flex items-center">
          <a
            className="text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
            href="/"
          >
            <img
              alt="Monstera Creative Logo with the three coloured bars behind the text."
              className="w-[80%]"
              src="/images/your-logo.svg"
            />
          </a>
        </div>
        <div className="w-full flex flex-col md:flex-row py-6">
          {props.children}
        </div>
      </div>
    </footer>
  );
}
export default Footer;
