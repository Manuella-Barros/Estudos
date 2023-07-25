import React from "react";

async function getProduto(id = null){
    if(id == null){
        const resposta = await fetch('https://ranekapi.origamid.dev/json/api/produto').then((res) => { return res.json(); });

        return resposta;
    } else{
        const resposta = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${id}`).then((res) => { return res.json(); });

        return resposta;
    }

}

export default getProduto;