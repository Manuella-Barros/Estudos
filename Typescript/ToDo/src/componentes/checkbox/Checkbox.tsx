import style from './checkbox.module.css';

function Checkbox({...props}) {

    return (
        <div className={style.mainCheckbox}>
            <input {...props} type="checkbox" name="" id="radio" />
        </div>
    );
}

export default Checkbox;