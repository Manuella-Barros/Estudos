import React from 'react';
import style from './FotoPerfil.module.css'

function FotoPerfil({src}) {
    return (
        <picture>
            <img src={src} alt="" />
        </picture>
    );
}

export default FotoPerfil;