import React, { useState } from 'react';
import style from './Comments.module.css'
import FotoPerfil from '../../../../../componentes/fotoPerfil/FotoPerfil';

function Comments({ author, elapsedTime, textComment, likes, profilePicture }) {
    const [like, setLike] = useState({
        autor: '',
        curtida: ''
    })
    const [click, setClick] = useState(false);

    function aplaudiu(){    
        setLike(prevValue => {
            return {...prevValue, autor: author };
        })
        setLike(prevValue => {
            return {...prevValue, curtida: likes + 1};
        })
        setClick(!click);
    }

    return (
        <div className={style.main}>
            <div className={style.header}>
                <FotoPerfil src={profilePicture} />
            </div>

            <div className={style.comentarioContainer}>
                <div className={style.body}>
                    <div>
                        <h2>{author}</h2>
                        <h3>{elapsedTime}</h3>
                    </div>
                    <p>{textComment}</p>
                </div>

                <div className={style[`footer${click}`]}>
                    <button onClick={aplaudiu}>
                        <p><i className="fa-regular fa-thumbs-up"></i></p>
                        <p>Aplaudir</p>
                        {
                            click == false
                            ? <p>{likes}</p>
                            : <p>{like['curtida']}</p>
                        }
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Comments;