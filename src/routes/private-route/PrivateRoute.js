import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function PrivateRoute({ path, auth, children }) {
    return (
        <Route
            path={path}
            render={() =>
                auth ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                        }}
                    />
                )
            }
        />
    );
}
