function Navigation(props) {
  return (
    <nav
      id="header"
      className="w-full z-30 top-0 text-white py-1 lg:py-6 bg-white pb-7 mb-20"
    >
      <div className="w-full container mx-auto flex flex-col flex-wrap items-center justify-between mt-0 px-2 py-2 lg:py-6 gap-3.5">
        {props.children}
      </div>
    </nav>
  );
}
export default Navigation;
