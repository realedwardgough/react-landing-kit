function FullImage(props) {
    return (
        <div className="bg-white px-6 py-10 mx-auto flex justify-center w-[50%]">
            <div className="flex flex-col items-center w-full mx-auto content-end fade-section transition-all duration-1200 ease-in-out opacity-100 translate-y-0">
                <img src={props.img} className="w-full mx-auto" alt={props.alt} />
            </div>
        </div>
    )
}
export default FullImage;