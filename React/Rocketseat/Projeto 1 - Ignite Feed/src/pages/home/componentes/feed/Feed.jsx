import style from './Feed.module.css'
import Post from './Post';
import {data} from '../../../../../public/data/data'
import React, { useState , useEffect } from "react";


function Feed() {
    const [comentarios, setComentarios] = useState({});
    data['posts'].map((post, i) => {
        useEffect(() => {
            setComentarios(prevValue => {
                return {...prevValue, [post.id]: post.comments}
            })
        }, [])
    })    

    return (
        <article className={style.main}>
            {
                data['posts'].map((post, i) => {
                    return (
                        <Post
                            key={i}
                            setComentarios={setComentarios}
                            comentarios={comentarios}
                            author={post.author}
                            role={post.role}
                            elapsedTime={post.elapsedTime}
                            profilePicture={post.profilePicture}
                            postContent={post.postContent}
                            id={post.id}
                        />
                    );
                })
            }
        </article>
    );
}

export default Feed;