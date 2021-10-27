import CLayout from "components/Layout";
import CBanner from "components/CSlider";
import CBookCard from "components/CBookCard"

export default function HomePage() {
    return (
        <CLayout>
            <CBanner />
            <div className="container m-auto p-4 mt-20">
                <div className="flex">
                    <div style={{ width: 320 }}>
                        <div className="flex justify-between font-sans">
                            <div className="float-left p-4 text-lg font-semibold">Author of the week</div>
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="flex justify-between font-sans">
                            <div className="float-left p-4 text-lg font-semibold">Popular by Genre</div>
                            <ul className="list-none p-0 m-0 flex items-center justify-between">
                                <li className="float-left p-4">All Genres</li>
                                <li className="float-left p-4">Business</li>
                                <li className="float-left p-4">Science</li>
                                <li className="float-left p-4">Philosophy</li>
                                <li className="float-left p-4">Novel</li>
                                <li className="float-left p-4">Comic</li>
                            </ul>
                        </div>
                        <div className="grid grid-cols-2 gap-16 mt-20 mb-8 pr-4">
                            <CBookCard name="Paris in the rain" author="Christophe" rating={4} image="img" reaction="lorem" />
                            <CBookCard name="Paris in the rain" author="Christophe" rating={4} image="img" reaction="lorem" />
                            <CBookCard name="Paris in the rain" author="Christophe" rating={4} image="img" reaction="lorem" />
                            <CBookCard name="Paris in the rain" author="Christophe" rating={4} image="img" reaction="lorem" />
                            <CBookCard name="Paris in the rain" author="Christophe" rating={4} image="img" reaction="lorem" />
                            <CBookCard name="Paris in the rain" author="Christophe" rating={4} image="img" reaction="lorem" />
                            <CBookCard name="Paris in the rain" author="Christophe" rating={4} image="img" reaction="lorem" />
                            <CBookCard name="Paris in the rain" author="Christophe" rating={4} image="img" reaction="lorem" />
                        </div>
                    </div>
                </div>
            </div>
        </CLayout>
    )
}