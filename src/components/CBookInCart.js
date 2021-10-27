import { createUseStyles } from 'react-jss'
// import img from 'assets/img/bookbanner.jpg'
import Rate from 'rc-rate';
import { useState } from 'react';

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
    },
    img: {
        objectFit: 'cover'
    }
})

export default function CBookInCart(props) {
    const {
        name,
        author,
        rating,
        description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus excepturi natus consequuntur labore quis impedit, id omnis quam aliquam hic fugiat aperiam perspiciatis accusantium ullam ab laborum! Quisquam, ad labore.",
        image,
        price
    } = props

    const classes = useStyles()
    const [amount, setAmount] = useState(1)

    return (
        <div className="w-full">
            <div className="flex">
                <div style={{ width: 160, height: 220 }}>
                    <img src={image} alt="book_photo" className={classes.img} />
                </div>
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
                        <button className="px-2 py-1 mr-2 rounded border-solid border-2 border-red-400 bg-red-400 text-white">Remove from cart</button>
                        <button className="px-2 py-1 mr-2 rounded border-solid border-2 border-blue-400 bg-blue-400 text-white">Buy</button>
                        <button className="px-2 py-1 mr-2 rounded border-solid border-2 border-blue-400 text-blue-400">View</button>
                    </div>
                </div>
            </div>
            <ul className="list-none px-2 m-0 float-right">
                <li className="p-1">
                    <span>Amount: </span>
                    <button className="bg-gray-800 text-white font-bold w-6 h-6" onClick={() => setAmount(amount + 1)}>+</button>
                    <span className="px-2">{amount}</span>
                    <button className="bg-red-400 text-white font-bold w-6 h-6" onClick={() => { amount > 1 && setAmount(amount - 1) }}>-</button>
                </li>
                <li className="p-1">Total: <span className="text-red-500 font-bold">${price * amount}</span></li>
            </ul>
        </div>
    )
}