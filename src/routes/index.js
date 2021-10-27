import React, { Suspense } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import CLoading from "components/CLoading"

const LoginPage = React.lazy(() => import("pages/login"))
const PageNotFound = React.lazy(() => import("pages/404"))
const HomePage = React.lazy(() => import("pages/products"))
const ProductDetailsPage = React.lazy(() => import('pages/product-details'))
const CartPage = React.lazy(() => import('pages/cart'))
const UserPage = React.lazy(() => import("pages/user"))

const ROUTES = [
    {
        path: "/",
        component: HomePage,
        exact: true
    },
    {
        path: "/product/:productID",
        component: ProductDetailsPage
    },
    {
        path: "/cart",
        component: CartPage
    },
    {
        path: "/login",
        component: PageNotFound
    },
    {
        path: "/my-account/:accountID",
        component: UserPage
    },
    {
        path: "*",
        component: LoginPage
    }
]

export default function CMainRouter() {
    return (
        <Router>
            <Suspense fallback={<CLoading />}>
                <Switch>
                    {ROUTES.map(({ path, component: Component, exact, ...rest }) => {
                        return <Route path={path} component={Component} key={path} exact={exact ? exact : false} {...rest} />
                    })}
                </Switch>
            </Suspense>
        </Router>
    )
}