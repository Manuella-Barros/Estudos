import style from './header.module.css';

function Header() {
    return (
        <header className={style.body}>
            <img src="./images/logo.svg" alt="" />
        </header>
    );
}

export default Header;