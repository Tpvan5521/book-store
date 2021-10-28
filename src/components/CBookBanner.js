import { createUseStyles } from 'react-jss'
// import img from 'assets/img/bookbanner.jpg'
import Rate from 'rc-rate';

const useStyles = createUseStyles({
    bg: {
        background: '#e5989b'
    },
    content: {
        width: 'calc(100% - 300px - 4rem)'
    },
    textFourLines: {
        display: '-webkit-box',
        '-webkit-line-clamp': 4,
        '-webkit-box-orient': 'vertical',
        overflow: 'hidden'
    },
    img: {
        objectFit: 'cover',
        height: '100%',
        width: '100%'
    },
    customStar: {
        fontSize: '1.5rem',
        '& .rc-rate-star-full .rc-rate-star-second': {
            color: '#b5838d'
        }
    },
    text: {
        color: '#b5838d'
    }
})

export default function CBookBanner(props) {
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
        <div className={`${classes.bg} shadow-xl w-full text-white`}>
            <div className="flex">
                <div className={`-mb-12 mt-12 ml-8`} style={{ width: 300, height: 450 }}>
                    <img src={image} alt="book_photo" className={classes.img} />
                </div>
                <div className={`${classes.content} py-8 px-12 ml-4 mt-4`}>
                    <div className="font-semibold mb-2">
                        <div className="text-4xl uppercase font-bold">{name}</div>
                        <div className="text-gray-100 text-lg">by {author}</div>
                    </div>
                    <div className="flex items-center">
                        <Rate
                            value={rating}
                            className={classes.customStar}
                        />
                        <span className="text-sm">Price: ${price}</span>
                    </div>
                    <div className={`${classes.textFourLines} my-2 text-lg`}>{description}</div>
                    <button className={`${classes.text} w-5/6 mt-5 py-3 rounded-full bg-white font-bold shadow-xl`}>View the book</button>
                </div>
            </div>
        </div>
    )
}