import React from 'react';
import error404 from "../assets/images/error_404.png";


const Error404: React.FC = () => {
    return (
        <div style={{textAlign: "center"}}>
            <img src={error404} style={{maxWidth: "60%"}}/>
            <p>诶呀，找不到当前页面了... RBA</p>
        </div>
    );
};

export default Error404;
