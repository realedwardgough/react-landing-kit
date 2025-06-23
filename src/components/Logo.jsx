function Logo(props) {
    const sizingClass = props.size === "large" ? "w-max" : "w-[80%]";
    return (
        <div className="pl-4 flex items-center">
          <a className="text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="/">
            <img src={props.img} alt={props.alt} className={sizingClass} />
          </a>
        </div>
    )
}
export default Logo;