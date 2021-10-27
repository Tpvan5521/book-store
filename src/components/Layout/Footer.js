import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
    footer: {
        background: "#ddb892"
    }
})

export default function Footer() {
    const classes = useStyles()
    return (
        <>
            <div className={`w-full ${classes.footer}`}>
                <div className="container m-auto p-4">
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
            <div className={`w-full bg-gray-800 text-white p-4`}>
                <div className="container m-auto">
                    <div className="my-2 flex items-center justify-center">
                        © tpv 2021
                    </div>
                </div>
            </div>
        </>
    )
}