import React from 'react';

function QAResposta({verInfo, resposta}) {

    return (
        <section className='resposta'>
            <p>{resposta}</p>
            <button onClick={verInfo}><i className="fa-solid fa-caret-up"></i></button>
        </section>
    );
}

export default QAResposta;