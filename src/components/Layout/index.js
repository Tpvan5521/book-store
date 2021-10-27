import CHeader from "./Header"
import CFooter from "./Footer"

export default function CLayout({ children }) {
    return (
        <div className="w-full min-h-full flex flex-col">
            <CHeader />
            <div className="flex-1">
                <div className="container">
                    {children}
                </div>
            </div>
            <CFooter />
        </div>
    )
}