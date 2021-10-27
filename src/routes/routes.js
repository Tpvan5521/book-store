import React, { Suspense } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import CPrivateRoute from "./private-route/PrivateRoute"
import CLoading from "components/CLoading"

const LoginPage = React.lazy(() => import("pages/login"))
const PageNotFound = React.lazy(() => import("pages/404"))
const HomePage = React.lazy(() => import("pages/products"))
const ProductDetailsPage = React.lazy(() => import('pages/product-details'))
const CartPage = React.lazy(() => import('pages/cart'))

const ROUTES = [
    {
        path: "/",
        component: HomePage
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
        path: "*",
        component: PageNotFound
    }
]

export default function CMainRouter() {
    return (
        <Router>
            <Suspense fallback={<CLoading />}>
                <Switch>
                    <Route path="/login">
                        <LoginPage />
                    </Route>
                    <CPrivateRoute path="/" auth={true}>
                        <>
                            <Switch>
                                {ROUTES.map(({ path, component: Component, noExact, ...rest }) => {
                                    return <Route path={path} component={Component} key={path} {...rest} />
                                })}
                            </Switch>
                        </>
                    </CPrivateRoute>
                </Switch>
            </Suspense>
        </Router>
    )
}