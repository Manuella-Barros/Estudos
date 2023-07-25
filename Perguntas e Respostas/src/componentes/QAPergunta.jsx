import React from 'react';

function QAPergunta({verInfo, pergunta}) {

    return (
        <article className='pergunta'>
            <p>{pergunta}</p>
            <button onClick={verInfo}><i className="fa-solid fa-caret-down"></i></button>
        </article>
    );
}

export default QAPergunta;