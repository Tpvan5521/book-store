import useStyles from "./styles/header.style"

export default function CHeader() {
    const classes = useStyles()
    return (
        <div className="w-full flex items-center justify-center shadow">
            <div className="container flex items-center justify-between">
                <ul className="list-none p-0 m-0 flex items-center justify-between">
                    <li className="float-left p-4 text-yellow-500 text-2xl font-semibold">BookStore</li>
                    {/* <li className="float-left p-4">Home</li> */}
                    <li className="float-left p-2">
                        <input className={`${classes.inputSearch} rounded-lg p-2 bg-gray-100 border-transparent focus:outline-none focus:border-transparent`} type="text" placeholder="Search" />
                    </li>
                </ul>
                <div>User</div>
            </div>
        </div>
    )
}