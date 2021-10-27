import Flickity from "react-flickity-component"
import "flickity/dist/flickity.min.css"
import { createUseStyles } from 'react-jss'
import img from 'assets/img/bookbanner.jpg'

const useStyles = createUseStyles({
    carouselCell: {
        height: 500,
        // '& img': {
        //     width: '100%'
        // }
    },
    bgGradientOrange: {
        backgroundImage: 'linear-gradient(120deg, #f6d365 0%, #fda085 100%)'
    }
})

export default function CSlider() {
    const classes = useStyles()

    const flickityOptions = {
        wrapAround: true,
        contain: true,
        pageDots: true,
        initialIndex: 2,
        autoPlay: true,
    }

    return (
        <div className="w-full flex items-center justify-center">
            <div className="container m-auto mt-20">
                <div className="w-full p-4 rounded-lg">
                    <Flickity
                        className={"carousel"}
                        elementType={"section"}
                        options={flickityOptions}
                        disableImagesLoaded={false}
                        static={false}
                    >
                        <div className={`${classes.carouselCell} ${classes.bgGradientOrange} w-4/6 mr-2 rounded-lg`}>
                            {/* <img src={img} alt="banner" /> */}
                        </div>
                        <div className={`${classes.carouselCell} ${classes.bgGradientOrange} w-4/6 mr-2 rounded-lg`}>
                            {/* <img src={img} alt="banner" /> */}
                        </div>
                        <div className={`${classes.carouselCell} ${classes.bgGradientOrange} w-4/6 mr-2 rounded-lg`}>
                            {/* <img src={img} alt="banner" /> */}
                        </div>
                        <div className={`${classes.carouselCell} ${classes.bgGradientOrange} w-4/6 mr-2 rounded-lg`}>
                            {/* <img src={img} alt="banner" /> */}
                        </div>
                    </Flickity>
                </div>
            </div>
        </div>
    )
}