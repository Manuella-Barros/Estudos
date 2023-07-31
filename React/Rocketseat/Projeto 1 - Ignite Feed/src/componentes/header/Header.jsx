import React from 'react';
import style from "./Header.module.css";

function Header() {
    return (
        <header className={style.header}>
            <img src="./imagens/ignite_icone.png" alt="" />
            <h1>Ignite Feed</h1>
        </header>
    );
}

export default Header;