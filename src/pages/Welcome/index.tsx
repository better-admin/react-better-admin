import React from 'react';
import welcome from "../../assets/images/welcome.png";



const Welcome: React.FC = () => {
    return (
        <div style={{textAlign:"center"}}>
            <img src={welcome} style={{maxWidth:"60%"}}/>
            <p>欢迎使用 React-Better-Admin</p>
        </div>
    );
};

export default Welcome;
