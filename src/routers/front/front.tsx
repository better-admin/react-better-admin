import React from "react";
import {MenuRouteObject} from "../router";
import Login from "../../pages/Login";

const front: MenuRouteObject[] =[
    {
        path: "/login",
        element: <Login/>,
    }
]

export default front