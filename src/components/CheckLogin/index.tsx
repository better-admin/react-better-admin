import React from "react";
import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";
import {AppState} from "../../store/store";


const CheckLogin: React.FC<{ children: React.ReactNode }> = (props) => {

    const isLogin = useSelector((state: AppState) => {
        return state.auth.isLogin;
    })

    return (
        <>
            {isLogin ? props.children
                : <Navigate to={"/login"} replace={true}/>}
        </>
    )
}

export default CheckLogin