function Showcase(props) {
    return (
        <div className="flex flex-1 flex-wrap max-w-4xl mx-auto items-center justify-evenly text-xl text-gray-500 font-bold opacity-75">
          {props.children}
        </div>
    )
}
export default Showcase;