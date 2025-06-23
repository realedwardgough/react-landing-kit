function Text(props) {
    let header = '';
    if (!!props.title) {
        header = (
            <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
              {props.title}
            </h3>
        );
    }
    return (
        <div className="flex flex-wrap">
          <div className="p-6 fade-section transition-all duration-1200 ease-in-out opacity-100 translate-y-0">
            {header}
            <p className="text-gray-600 mb-8">{props.children}</p>
          </div>
        </div>
    )
}
export default Text;