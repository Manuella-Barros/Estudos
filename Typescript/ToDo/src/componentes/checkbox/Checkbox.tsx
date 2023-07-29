import style from './checkbox.module.css';

function Checkbox({...props}) {

    return (
        <div>
            <input {...props} className={style.mainCheckbox} type="checkbox" name="" id="radio" />
        </div>
    );
}

export default Checkbox;