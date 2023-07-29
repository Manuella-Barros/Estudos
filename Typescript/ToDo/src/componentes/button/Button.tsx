import style from './Button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    children?: string
}

function Button({type, children}:ButtonProps) {
    return (
        <div className={style.main}>
            <button type={type}>{children}</button>
        </div>
    );
}

export default Button;