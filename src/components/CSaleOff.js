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
        <li className="px-4 py-2">
            <div className="font-semibold">
                <div>{name}</div>
                <div className="text-gray-400">{author}</div>
            </div>
        </li>
    )
}