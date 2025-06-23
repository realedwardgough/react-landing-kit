function Container(props) {

    // Default color class
    let Class = props.color === "grey" ? "bg-gray-100 py-8" : "bg-white py-8";
    let TitleSize = props.titleSize === "large" ? "text-5xl" : "text-xl";
    return (
        <section className={Class} id={props.id}>
            <div className="container max-w-5xl mx-auto m-8">
                <h2 className={`w-full my-2 ${TitleSize} font-black leading-tight text-center text-gray-800 fade-section transition-all duration-1200 ease-in-out opacity-100 translate-y-0`}>
                    {props.title}
                </h2>
                <div className="w-full mb-4">
                <div className="w-64 h-1 py-0 mx-auto my-0 rounded-t opacity-25 gradient"></div>
                </div>
                {props.children}
            </div>
        </section>
    )
}
export default Container;