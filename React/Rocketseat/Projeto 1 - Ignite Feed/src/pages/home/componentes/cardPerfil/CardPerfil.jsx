import React, { useContext, useState } from 'react';
import style from './CardPerfil.module.css'
import FotoPerfil from '../../../../componentes/fotoPerfil/FotoPerfil';
import Button from '../../../../componentes/button/Button';
import { GlobalContext } from '../../../../contexto/GlobalContext';
import Input from '../../../../componentes/input/Input';

function CardPerfil() {
    const [userName, setUserName] = useContext(GlobalContext);
    const [nameInput, setNameInput] = useState('');
    const [editandoPerfil, setEditandoPerfil] = useState(false);

    function editaPerfil(e){
        if((e.target.innerHTML.toLowerCase()).includes('editar')){
            setEditandoPerfil(true);
            console.log(editandoPerfil);
        } else{
            editaNomeUsuario(e);
            setEditandoPerfil(false);
        }
    }

    function editaNomeUsuario(e){
        if(e.type == "change"){
            setNameInput(e.target.value);
        } else if (e.type == "click"){
            setUserName(nameInput)
        } 
    }
    
    return (
        <article className={style.main}>
            <section className={style.header}>
                <FotoPerfil src={"./imagens/profileIcon.png"} />
            </section>
            <section className={style.body}>
                <h2>{userName}</h2>
                <h3 className={style.cargo}>UI Designer</h3>

                {
                    !editandoPerfil && (
                        <div className={style.editarPerfil}>
                            <Button onClick={editaPerfil} nomeClass={"button1"}>
                                <i className="fa-solid fa-pen-to-square"></i> Editar seu
                                perfil
                            </Button>
                        </div>
                    )
                }
                {
                    editandoPerfil && (
                        <div className={style.editandoPerfil}>
                            <p>Alterar o nome de usuario</p>
                            <Input onChange={editaNomeUsuario}/>
                            <Button onClick={editaPerfil} nomeClass={"button1"}>
                                <i className="fa-solid fa-pen-to-square"></i> Salvar
                            </Button>
                        </div>
                    )
                }
            </section>
        </article>
    );
}

export default CardPerfil;