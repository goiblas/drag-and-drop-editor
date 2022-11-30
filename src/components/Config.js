import React from "react";
import configImage from "../assets/config.png";

const Config = ({ id, onClose }) => {
    return (
        <div className="config">
            <div className="config-layout">
                <div className="config-main">

                <div className="config-image">
                    <img src={configImage} alt="" />
                </div>

                </div>
                <div className="config-footer">
                    <button type='button' className='main-button' onClick={onClose}>Aplicar</button>
                    <button type='button' className='outline-button' onClick={onClose}>Cancelar</button>
                </div>
            </div>
        </div>
    )
}

export default Config;