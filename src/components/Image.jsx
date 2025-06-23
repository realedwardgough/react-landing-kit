function Image(props) {
    return (
        <div className="bg-white px-6 py-10 mx-auto flex justify-center">
            <div className="flex flex-col items-center w-full mx-auto content-end fade-section transition-all duration-1200 ease-in-out opacity-100 translate-y-0">
                <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3"><a href={props.url}>{props.title}</a></h3>
                <div className="browser-mockup flex flex-1 m-6 md:px-0 md:m-12 bg-white rounded shadow-xl items-center h-fit w-[80%]">
                <img src={props.img} className="w-full mx-auto" alt={props.alt} />
                </div>
            </div>
        </div>
    )
}
export default Image;