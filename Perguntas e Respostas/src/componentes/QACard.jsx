import React from 'react';
import QATitulo from './QATitulo';
import QAPerguntas from './QAPerguntas';

const perguntas = [
    {
        pergunta: "Um canguru se casou com uma formiga, qual os nomes dos seus 2 filhos",
        resposta: "O formiguru e a cangurumiga"
    },
    {
        pergunta: "Um hipopotamo se casou com uma raposa, qual os nomes dos seus 2 filhos",
        resposta: "O raposotomo e a Hipopotosa"
    },
    {
        pergunta: "Um macaco se casou com uma borboleta, qual os nomes dos seus 2 filhos",
        resposta: "O borbolecaco e a macacoleta"
    }
]

function QACard() {
    return (
        <main id='container_QACard'>
            <QATitulo texto={"Bento e Totó"}/>

            <section className='perguntas'>
                {
                    perguntas.map((pergunta, i) => {
                        return <QAPerguntas key={i} pergunta={pergunta}/> 
                    })
                }
            </section>
            
            {/* <section section className='perguntas'>
                <QAPerguntas/>
                <QAPerguntas/>
            </section> */}
        </main>
    );
}

export default QACard;