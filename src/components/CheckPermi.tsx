import React from "react";
import {useLocation} from "react-router-dom";
import {useHasPermission} from "../hooks/permissions";


const CheckPermi: React.FC<{ children: React.ReactNode }> = (props) => {

    const location = useLocation();
    const {isLoading,hasPermission} = useHasPermission(location.pathname);
    console.log(location)

    return (
        <>
            {
                isLoading ? '加载中....' :(
                    hasPermission() ? props.children :  <p>no permission....</p>
                )
            }
        </>
    )
}

export default CheckPermi