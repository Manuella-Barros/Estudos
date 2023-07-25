import React from 'react';

function QATitulo({texto}) {
    return (
        <section className='titulo'>
            <h1>Perguntas e respostas sobre {texto}</h1>
        </section>
    );
}

export default QATitulo;