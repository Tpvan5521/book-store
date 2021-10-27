import Flickity from "react-flickity-component"
import "flickity/dist/flickity.min.css"
import { createUseStyles } from 'react-jss'
import bookbanner from 'assets/img/bookbanner.jpg'
import bookslide1 from 'assets/img/bookslide1.PNG'
import bookslide2 from 'assets/img/bookslide2.PNG'
import bookslide3 from 'assets/img/bookslide3.PNG'

const useStyles = createUseStyles({
    carouselCell: {
        height: 350
        // '& img': {
        //     width: '100%'
        // }
    },
    img: {
        objectFit: 'cover',
        height: '100%',
        width: '100%'
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
                        <div className={`${classes.carouselCell} w-4/6 mr-2 rounded-lg`}>
                            <img src={bookbanner} alt="banner" className={classes.img} />
                        </div>
                        <div className={`${classes.carouselCell} w-4/6 mr-2 rounded-lg`}>
                            <img src={bookslide1} alt="banner" className={classes.img} />
                        </div>
                        <div className={`${classes.carouselCell} w-4/6 mr-2 rounded-lg`}>
                            <img src={bookslide2} alt="banner" className={classes.img} />
                        </div>
                        <div className={`${classes.carouselCell} w-4/6 mr-2 rounded-lg`}>
                            <img src={bookslide3} alt="banner" className={classes.img} />
                        </div>
                    </Flickity>
                </div>
            </div>
        </div>
    )
}