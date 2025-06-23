function ListItem(props) {
    return (
        <li className="mt-2 inline-block mr-2 md:block md:mr-0">
            <a href={props.href} className="font-light no-underline hover:underline text-gray-800 hover:text-orange-500">
                {props.text}
            </a>
        </li>
    )
}
export default ListItem;