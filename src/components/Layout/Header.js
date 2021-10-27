import { createUseStyles } from 'react-jss'
import { BsChatDots, BsSearch } from 'react-icons/bs'
import { AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai'

const useStyles = createUseStyles({
    inputSearch: {
        borderWidth: 1,
        padding: '7px 16px'
    },
    icon: {
        fontSize: '1.5rem'
    },
})

export default function CHeader() {
    const classes = useStyles()
    return (
        <div className="w-full fixed z-10 flex items-center justify-center bg-white shadow">
            <div className="container flex items-center">
                <ul className="list-none p-0 m-0 flex flex-1 mr-8">
                    <li className="float-left p-4 text-2xl font-semibold">BookStore</li>
                    <li className="float-left p-2 flex items-center justify-center flex-1">
                        <input
                            className={`${classes.inputSearch} flex-1 rounded-l-full border-gray-700 focus:outline-none`}
                            type="text"
                            placeholder="Search"
                        />
                        <button className={`rounded-r-full bg-gray-700 text-white h-10 w-10 flex items-center justify-center`}><BsSearch /></button>
                    </li>
                </ul>
                <ul className="list-none p-0 m-0 flex items-center justify-end p-2">
                    <li className={`text-xl float-left p-2`}><BsChatDots /></li>
                    <li className={`text-2xl float-left p-2`}><AiOutlineShoppingCart /></li>
                    <li className={`text-2xl float-left p-2`}><AiOutlineUser /></li>
                </ul>
            </div>
        </div>
    )
}