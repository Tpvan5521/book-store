import CLayout from "components/Layout";
import { createUseStyles } from 'react-jss'
import CBookInCart from "components/CBookInCart"
import srcParisInTheRain from 'assets/img/paris_in_the_rain.png'

const useStyles = createUseStyles({
    bgGradientOrange: {
        backgroundImage: 'linear-gradient(120deg, #f6d365 0%, #fda085 100%)'
    },
})

export default function CartPage() {
    const classes = useStyles()
    return (
        <CLayout>
            <div className="container m-auto p-4 mt-20">
                <div className="grid grid-cols-2 gap-x-10 gap-y-20">
                    <CBookInCart name="Paris in the rain" author="Christophe" rating={4} image={srcParisInTheRain} price={48} />
                    <CBookInCart name="Paris in the rain" author="Christophe" rating={4} image={srcParisInTheRain} price={48} />
                    <CBookInCart name="Paris in the rain" author="Christophe" rating={4} image={srcParisInTheRain} price={48} />
                </div>
            </div>
        </CLayout>
    )
}