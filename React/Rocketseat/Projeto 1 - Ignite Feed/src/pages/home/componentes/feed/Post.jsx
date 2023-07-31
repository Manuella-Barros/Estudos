import React, { useContext, useEffect, useState } from 'react';
import style from "./Post.module.css";
import FotoPerfil from '../../../../componentes/fotoPerfil/FotoPerfil'
import Button from '../../../../componentes/button/Button'
import Input from '../../../../componentes/input/Input'
import Comments from './Comments/Comments';
import { GlobalContext } from '../../../../contexto/GlobalContext';

function Post({ setComentarios, comentarios, author, role, elapsedTime, profilePicture, postContent, id }) {
    const [comentarioNovo, setComentarioNovo] = useState('');
    const [userName] = useContext(GlobalContext);
    
    function enviaComentario(e){   
        e.preventDefault();

        switch (e.type){
            case "change":
                setComentarioNovo( e.target.value);
                break;

            case "submit":
                comentarios[id].unshift({
                    id: 4,
                    author: userName,
                    elapsedTime: "Recente",
                    textComment: comentarioNovo,
                    likes: 0,
                    profilePicture: "/imagens/profileIcon.png",
                })
                setComentarios(prevValue => {
                    return {...prevValue, [id]: comentarios[id]}
                })

                // setComentarios(prevValue => {
                //     return {
                //         ...prevValue,
                //         [id]: comentarios[id].unshift({
                //             id: 4,
                //             author: "Maria",
                //             elapsedTime: "Recente",
                //             textComment: comentarioNovo,
                //             likes: 0,
                //             profilePicture: "/imagens/profileIcon.png",
                //         }),
                //     };
                // })

                break;
        }
    }        
            
    return (
        <section className={style.mainPost}>
            <div className={style.headerPost}>
                <div className={style.usuario}>
                    <FotoPerfil src={profilePicture + ".jpg"} />
                    <div className={style.descricao}>
                        <h2>{author}</h2>
                        <h3>{role}</h3>
                    </div>
                </div>
                <div className={style.horario}>
                    <h3>Publica do há {elapsedTime}</h3>
                </div>
            </div>

            <div className={style.bodyPost}>
                <p>{postContent}</p>
            </div>

            <div className={style.footerPost}>
                <form onSubmit={enviaComentario}>
                    <h2>Deixe seu comentario</h2>
                    <Input
                        type={"text"}
                        placeholder={"Muitos comentarios significantes"}
                        onChange={enviaComentario}
                        required
                    />
                    <Button nomeClass={"button2"} type={"submit"}>
                        Publicar
                    </Button>
                </form>

                <div>
                    {
                        comentarios[id] &&
                        comentarios[id].map((comment, i) => {
                            return (
                                <Comments
                                    key={i}
                                    author={comment.author}
                                    elapsedTime={comment.elapsedTime}
                                    textComment={comment.textComment}
                                    likes={comment.likes}
                                    profilePicture={comment.profilePicture}
                                />
                            );
                        })
                    }
                </div>
            </div>
        </section>
    );
}

export default Post;