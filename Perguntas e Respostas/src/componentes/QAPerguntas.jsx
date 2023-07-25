import React, { useState } from 'react';
import QAPergunta from './QAPergunta';
import QAResposta from './QAResposta';

function QAPerguntas({pergunta}) {
    const [info, setInfo] = useState(false);

    function verInfo(){
        setInfo(!info)
    }

    return (
        <>
            {
                !info && <QAPergunta verInfo={verInfo} pergunta={pergunta.pergunta}/> 
            }
            {
                info && <QAResposta verInfo={verInfo} resposta={pergunta.resposta}/>
            }
        </>
    );
}

export default QAPerguntas;