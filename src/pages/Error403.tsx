import React from 'react';
import error403 from "../assets/images/error_403.png";


const Error403: React.FC = () => {
    return (
        <div style={{textAlign: "center"}}>
            <img src={error403} style={{maxWidth: "60%"}}/>
            <p>诶呀，您没有权限，请联系管理员... RBA</p>
        </div>
    );
};

export default Error403;
