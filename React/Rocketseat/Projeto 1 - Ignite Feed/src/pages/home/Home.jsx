import style from './Home.module.css';
import React from 'react';
import Feed from './componentes/feed/Feed';
import CardPerfil from './componentes/cardPerfil/CardPerfil';

function Home() {
    return (
        <main className={style.main_home}>
            <CardPerfil />
            <Feed />
        </main>
    );
}

export default Home;