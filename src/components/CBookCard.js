import { createUseStyles } from 'react-jss'
// import img from 'assets/img/bookbanner.jpg'
import Rate from 'rc-rate';

const useStyles = createUseStyles({
    bgGradientOrange: {
        backgroundImage: 'linear-gradient(120deg, #f6d365 0%, #fda085 100%)'
    },
    content: {
        width: 'calc(100% - 160px - 3.5rem)'
    },
    textTwoLines: {
        display: '-webkit-box',
        '-webkit-line-clamp': 2,
        '-webkit-box-orient': 'vertical',
        overflow: 'hidden'
    }
})

export default function CSlider(props) {
    const {
        name,
        author,
        rating,
        description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus excepturi natus consequuntur labore quis impedit, id omnis quam aliquam hic fugiat aperiam perspiciatis accusantium ullam ab laborum! Quisquam, ad labore.",
        image,
        price
    } = props
    const classes = useStyles()

    return (
        <div className="shadow bg-white w-full">
            <div className="flex">
                <div className={`${classes.bgGradientOrange} shadow -mt-6 mb-6 ml-8`} style={{ width: 160, height: 220 }}></div>
                <div className={`${classes.content} p-4`}>
                    <div className="font-semibold">
                        <div className="text-xl">{name}</div>
                        <div className="text-gray-400 text-lg">by {author}</div>
                    </div>
                    <div className="flex items-center">
                        <Rate
                            value={rating}
                        />
                        <span className="text-sm">Price: ${price}</span>
                    </div>
                    <div className={`${classes.textTwoLines} my-2`}>{description}</div>
                    <div>
                        <button className="px-2 py-1 mr-2 rounded border-solid border-2 border-blue-400 bg-blue-400 text-white">Add to cart</button>
                        <button className="px-2 py-1 mr-2 rounded border-solid border-2 border-blue-400 bg-white text-blue-400">View</button>
                    </div>
                </div>
            </div>
            <div style={{ borderTop: '1px solid #E5E7EB' }}>
                <ul className="list-none px-2 m-0 text-gray-400">
                    <li className="float-left p-1">views: 1000+</li>
                    <li className="float-left p-1">comments: 12</li>
                </ul>
            </div>
        </div>
    )
}