import style from './input.module.css';

function Input({...props}) {
    return (
        <div className={style.main}>
            <input {...props} />
        </div>
    );
}

export default Input;