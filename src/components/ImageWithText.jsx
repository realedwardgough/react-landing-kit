function ImageWithText(props) {

    // ImageWithText component to display an image alongside text content
    let imageElement = (
      <div className="w-full sm:w-1/2 p-6 fade-section transition-all duration-1200 ease-in-out opacity-100 translate-y-0">
        <img src={props.img} className="w-full mx-auto" alt={props.alt} />
      </div>
    );

    // Check if the direction prop is provided, default to 'right' if not
    if (props.direction == null) {
      props.direction = 'right'; // Default direction if not specified
    }

    // Adjust the image element based on the direction prop
    return(
        <div className="flex flex-wrap">
          {props.direction === 'left' ? imageElement : ''}
          <div className="w-5/6 sm:w-1/2 p-6 fade-section transition-all duration-1200 ease-in-out opacity-100 translate-y-0">
            <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
              {props.title}
            </h3>
            <p className="text-gray-600 mb-8">{props.children}</p>
          </div>
          {props.direction === 'right' ? imageElement : ''}
        </div>
    )
}
export default ImageWithText;