import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
    bgGradientOrange: {
        backgroundImage: 'linear-gradient(120deg, #f6d365 0%, #fda085 100%)'
    },
})

export default function CBestSeller(props) {
    const {
        name,
        image,
        author
    } = props
    const classes = useStyles()

    return (
        <li className="px-4 py-2">
            <div className="flex items-center">
                <div className={`${classes.bgGradientOrange}`} style={{ width: 60, height: 80 }}></div>
                <div className="ml-4 font-semibold">
                    <div>{name}</div>
                    <div className="text-gray-400">{author}</div>
                </div>
            </div>
        </li>
    )
}