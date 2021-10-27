import CLayout from "components/Layout";
import CBanner from "components/CSlider";
import CBookCard from "components/CBookCard"
import CBestSeller from "components/CBestSeller";
import CSaleOff from "components/CSaleOff"
import { createUseStyles } from 'react-jss'
import { BsArrowDownCircle } from 'react-icons/bs'
import srcParisInTheRain from 'assets/img/paris_in_the_rain.png'

const useStyles = createUseStyles({
    rectangle: {
        width: 0,
        height: 0,
        borderLeft: '1rem solid transparent',
        borderRight: '1rem solid transparent',
        borderBottom: '1rem solid white'
    }
})

export default function HomePage() {
    const classes = useStyles()
    return (
        <CLayout>
            <CBanner />
            <div className="container m-auto p-4 mt-20">
                <div className="flex">
                    <div style={{ width: 320 }}>
                        <div style={{ width: 280 }}>
                            <div className="py-4 text-lg font-semibold">Best sellers</div>
                            <ul className="list-none m-0 bg-white shadow rounded pt-4">
                                <CBestSeller name="Paris in the rain" author="Christophe" image={srcParisInTheRain} />
                                <CBestSeller name="Paris in the rain" author="Christophe" image={srcParisInTheRain} />
                                <CBestSeller name="Paris in the rain" author="Christophe" image={srcParisInTheRain} />
                                <CBestSeller name="Paris in the rain" author="Christophe" image={srcParisInTheRain} />
                                <div className="flex justify-center">
                                    <button className="mt-3 py-2 w-3/5 flex justify-center items-center text-gray-700" style={{ borderTop: '1px solid #D1D5DB' }}>
                                        <span className="text-sm text-gray-400">Load more</span> &nbsp; <BsArrowDownCircle />
                                    </button>
                                </div>
                            </ul>
                        </div>
                        <div style={{ width: 280 }}>
                            <div className="py-4 text-lg font-semibold">Sale off</div>
                            <div className="ist-none m-0 bg-white shadow rounded pt-4">
                                <div className="font-semibold flex">
                                    <div className="flex-1">
                                    </div>
                                    <div className="w-8 h-12 bg-red-400 text-white -mt-6 mr-2">
                                        <div className="w-8 h-8 flex items-center justify-center text-xs">-50%</div>
                                        <div className={classes.rectangle}></div>
                                    </div>
                                </div>
                                <ul>
                                    <CSaleOff name="Paris in the rain" author="Christophe" percentSale={50} />
                                    <CSaleOff name="Paris in the rain" author="Christophe" percentSale={50} />
                                    <CSaleOff name="Paris in the rain" author="Christophe" percentSale={50} />
                                    <CSaleOff name="Paris in the rain" author="Christophe" percentSale={50} />
                                    <div className="flex justify-center">
                                        <button className="mt-3 py-2 w-3/5 flex justify-center items-center text-gray-700" style={{ borderTop: '1px solid #D1D5DB' }}>
                                            <span className="text-sm text-gray-400">Load more</span> &nbsp; <BsArrowDownCircle />
                                        </button>
                                    </div>
                                </ul>
                            </div>
                        </div>
                        <div className="mt-4" style={{ width: 280 }}>
                            <div className="ist-none m-0 bg-white shadow rounded pt-4">
                                <div className="font-semibold flex">
                                    <div className="flex-1">
                                    </div>
                                    <div className="w-8 h-12 bg-red-400 text-white -mt-6 mr-2">
                                        <div className="w-8 h-8 flex items-center justify-center text-xs">-25%</div>
                                        <div className={classes.rectangle}></div>
                                    </div>
                                </div>
                                <ul>
                                    <CSaleOff name="Paris in the rain" author="Christophe" percentSale={50} />
                                    <CSaleOff name="Paris in the rain" author="Christophe" percentSale={50} />
                                    <CSaleOff name="Paris in the rain" author="Christophe" percentSale={50} />
                                    <CSaleOff name="Paris in the rain" author="Christophe" percentSale={50} />
                                    <div className="flex justify-center">
                                        <button className="mt-3 py-2 w-3/5 flex justify-center items-center text-gray-700" style={{ borderTop: '1px solid #D1D5DB' }}>
                                            <span className="text-sm text-gray-400">Load more</span> &nbsp; <BsArrowDownCircle />
                                        </button>
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 ml-12">
                        <div className="flex justify-between" style={{ borderBottom: '1px solid #D1D5DB' }}>
                            <div className="float-left p-4 text-lg font-semibold">Popular by Genre</div>
                            <ul className="list-none p-0 m-0 flex items-center justify-between">
                                <li className="float-left p-4" style={{ borderBottom: '4px solid #60A5FA', fontWeight: 600 }}>All Genres</li>
                                <li className="float-left p-4">Business</li>
                                <li className="float-left p-4">Science</li>
                                <li className="float-left p-4">Philosophy</li>
                                <li className="float-left p-4">Novel</li>
                                <li className="float-left p-4">Comic</li>
                            </ul>
                        </div>
                        <div className="grid grid-cols-2 gap-x-10 gap-y-20 mt-20 mb-8">
                            <CBookCard name="Paris in the rain" author="Christophe" rating={4} image={srcParisInTheRain} price={48} />
                            <CBookCard name="Paris in the rain" author="Christophe" rating={4} image={srcParisInTheRain} price={48} />
                            <CBookCard name="Paris in the rain" author="Christophe" rating={4} image={srcParisInTheRain} price={48} />
                            <CBookCard name="Paris in the rain" author="Christophe" rating={4} image={srcParisInTheRain} price={48} />
                            <CBookCard name="Paris in the rain" author="Christophe" rating={4} image={srcParisInTheRain} price={48} />
                            <CBookCard name="Paris in the rain" author="Christophe" rating={4} image={srcParisInTheRain} price={48} />
                            <CBookCard name="Paris in the rain" author="Christophe" rating={4} image={srcParisInTheRain} price={48} />
                            <CBookCard name="Paris in the rain" author="Christophe" rating={4} image={srcParisInTheRain} price={48} />
                        </div>
                    </div>
                </div>
            </div>
        </CLayout>
    )
}