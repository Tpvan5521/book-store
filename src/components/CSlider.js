import Flickity from "react-flickity-component"
import "flickity/dist/flickity.min.css"
import { createUseStyles } from 'react-jss'
import CBookBanner from "./CBookBanner"
import srcImg from 'assets/img/book.jpg'

const useStyles = createUseStyles({
    carouselCell: {
        height: 520,
        // '& img': {
        //     width: '100%'
        // }
    },
    img: {
        objectFit: 'cover',
        // height: '100%',
        // width: '100%'
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
            <div className="container m-auto mt-16">
                <div className="w-full p-4 rounded-lg">
                    <Flickity
                        className={"carousel"}
                        elementType={"section"}
                        options={flickityOptions}
                        disableImagesLoaded={false}
                        static={false}
                    >
                        {/* <div className={`${classes.carouselCell} w-1/2 mr-2 rounded-lg`}>
                            <img src={bookbanner} alt="banner" className={classes.img} />
                        </div> */}
                        <div className={`${classes.carouselCell} w-1/2 mr-1 rounded-lg flex items-center`}>
                            <CBookBanner name="Big Magic" author="Elizabeth Gilbert" rating={4} image={srcImg} price={48} />
                        </div>
                        <div className={`${classes.carouselCell} w-1/2 mr-1 rounded-lg flex items-center`}>
                            <CBookBanner name="Big Magic" author="Elizabeth Gilbert" rating={4} image={srcImg} price={48} />
                        </div>
                        <div className={`${classes.carouselCell} w-1/2 mr-1 rounded-lg flex items-center`}>
                            <CBookBanner name="Big Magic" author="Elizabeth Gilbert" rating={4} image={srcImg} price={48} />
                        </div>
                        <div className={`${classes.carouselCell} w-1/2 mr-1 rounded-lg flex items-center`}>
                            <CBookBanner name="Big Magic" author="Elizabeth Gilbert" rating={4} image={srcImg} price={48} />
                        </div>
                    </Flickity>
                </div>
            </div>
        </div>
    )
}