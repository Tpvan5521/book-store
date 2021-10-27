import useStyles from "./styles/footer.style"

export default function CLoading() {
    const classes = useStyles()
    return (
        <>
            <div className={`w-full ${classes.footer}`}>
                <div className="container m-auto">
                    <div className="my-8 flex justify-between">
                        <ul className="list-none p-0 m-0">
                            <li className="text-lg font-semibold">List name</li>
                            <li>Item</li>
                            <li>Item</li>
                            <li>Item</li>
                        </ul>
                        <ul className="list-none p-0 m-0">
                            <li className="text-lg font-semibold">List name</li>
                            <li>Item</li>
                            <li>Item</li>
                            <li>Item</li>
                        </ul>
                        <ul className="list-none p-0 m-0">
                            <li className="text-lg font-semibold">List name</li>
                            <li>Item</li>
                            <li>Item</li>
                            <li>Item</li>
                        </ul>
                        <ul className="list-none p-0 m-0">
                            <li className="text-lg font-semibold">List name</li>
                            <li>Item</li>
                            <li>Item</li>
                            <li>Item</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={`w-full bg-gray-800 text-white`}>
                <div className="container m-auto">
                    <div className="my-4 flex items-center justify-center">
                        © tpv 2021
                    </div>
                </div>
            </div>
        </>
    )
}