import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
    rectangle: {
        width: 0,
        height: 0,
        borderLeft: '1rem solid transparent',
        borderRight: '1rem solid transparent',
        borderBottom: '1rem solid white'
    }
})

export default function CSaleOff(props) {
    const {
        name,
        author,
        percentSale
    } = props
    const classes = useStyles()

    return (
        <li className="px-4 py-2 m-1 flex">
            <div className="font-semibold">
                <div>{name}</div>
                <div className="text-gray-400">{author}</div>
            </div>
            <div className="flex flex-1 items-center justify-center">
                <button className="mx-2 py-1 w-20 rounded-full bg-red-400 text-white font-semibold shadow text-sm">View</button>
            </div>
        </li>
    )
}