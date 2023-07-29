import React from 'react';

function NotificationContent({texto}) {
    return (
        <article className='conteudo'>
            <p>{texto}</p>
        </article>
    );
}

export default NotificationContent;