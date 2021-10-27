export default function CFooterList(props) {
    const { title, items } = props
    return (
        <ul className="list-none p-0 m-0">
            <li className="text-lg font-semibold">{title}</li>
            {items.map((item, idx) => (
                <li key={idx}>
                    {item}
                </li>
            ))}
        </ul>
    )
}