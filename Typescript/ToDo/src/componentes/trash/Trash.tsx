import style from './trash.module.css';

function Trash({...props}) {
    return (
        <p className={style.trash} {...props}>
            <i className="fa-regular fa-trash-can"></i>
        </p>
    );
}

export default Trash;