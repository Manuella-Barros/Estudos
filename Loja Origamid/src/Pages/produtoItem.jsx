import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getProduto from "../API/getProduto";

function ProdutoItem(){
    const params = useParams();
    console.log(params);

    const [produtos, setProdutos] = useState(null);
    let fotos = [];

    useEffect(() => {
        getProduto(params.id).then(res => {
            setProdutos(res);
        })
    }, []);

    if(produtos != null){
        for(let i = 1; i < produtos.fotos.length; i++){
            if(produtos.fotos[i]){
                fotos.push(<img src={produtos.fotos[i].src}></img>);
            }
        }        
    }

    return produtos != null ?(
        <article className="main_produtoItem">
            <section className="container_produtoItem">
                <picture>
                    <img src={produtos.fotos[0].src} alt="" />
                </picture>
                <div>
                    <h1>{produtos.nome}</h1>
                    <p>{produtos.descricao}</p>
                    <p>R$ {produtos.preco}</p>
                </div>
            </section>
            <section className="container_fotos">
                <picture>
                    {fotos}
                </picture>
            </section>
        </article>
    ) : <p>Carregando</p>;
}

export default ProdutoItem;