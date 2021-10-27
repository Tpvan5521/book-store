import { createUseStyles } from 'react-jss'
import CFooterList from './footer/CFooterList'

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
                        <CFooterList title="Author" items={["Christophe", "John Doe", "Elizabeth Gilbert"]} />
                        <CFooterList title="Genre" items={["Business", "Science", "Philosophy", "Novel", "Comic"]} />
                        <CFooterList title="Contact Us" items={[""]} />
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