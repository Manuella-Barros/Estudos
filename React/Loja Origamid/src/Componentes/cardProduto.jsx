import React from "react";
import getProduto from "../API/getProduto";
import { Outlet, useNavigate } from "react-router-dom";

//Tava recebendo um vetor dados, com um vetor dados, ai usou a desestruturação pra usar só um dados
function CardProduto({dados}){
    const navigate = useNavigate();

    function navegar(){
        navigate(`/produto/${dados.id}`);
    }
    
    return(
        <>
            <section onClick={navegar} className="container_imagens">
                <picture>
                    <img src={dados.fotos[0].src} alt="" />
                </picture>
                <p>{dados.nome}</p>
            </section>       
        </>

    )
}

export default CardProduto;