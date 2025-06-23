function Button (props) {
    return (
        <a className="gradient2 px-8 py-4 mx-auto mt-4 font-extrabold text-gray-800 rounded shadow opacity-75 lg:mx-0 hover:underline lg:mt-0 cursor-pointer" href={props.href}>
          {props.label}
        </a>
    )
}
export default Button;