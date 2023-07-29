import React, { useEffect, useState } from "react";
import CardProduto from "../Componentes/cardProduto";
import getProduto from "../API/getProduto";

function Produtos(){
    const [produtos, setProdutos] = useState(null);
    
    useEffect(() => {
        getProduto().then(res => {
            setProdutos(res);
        })
    }, [])

    return produtos != null ? (
        <article id="container_produtos">
            {
                produtos.map((prod, i) => {
                    return <CardProduto key={i} dados={prod}/>;
                })
            }
        </article>
    ) : <p>Carregandoo</p>;
}

export default Produtos;