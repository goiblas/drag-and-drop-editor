import React from "react";

const Header = () => {
    return (
        <div className="header">
            <div className="header-top">
                <div className="label">
                    Informe
                </div>
                <div className="title">
                    Cuentas Empresa
                </div>
            </div>
            <div className="header-bottom">
                <div className="label">
                    Datos sincronizados 
                </div>
                <div className="date">
                    <span style={{marginRight: 24}}>12:42</span>
                    <span>28/10/2022</span>
                </div>
            </div>
        </div>
    )
}

export default Header;