function List(props) {
    return (
        <div className="flex-1">
            <p className="uppercase font-extrabold text-gray-500 md:mb-6">
                {props.title}
            </p>
            <ul className="list-reset mb-6">
                {props.children}
            </ul>
        </div>
    )
}
export default List;