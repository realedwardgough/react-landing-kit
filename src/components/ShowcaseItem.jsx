function ShowcaseItem(props) {
    return (
        <span className="w-1/2 p-4 md:w-auto flex items-center">
            <img src={props.img} alt={props.alt} className="h-10 w-10 mr-4 fill-current opacity-75" />
            {props.title}
        </span>
    )
}
export default ShowcaseItem;