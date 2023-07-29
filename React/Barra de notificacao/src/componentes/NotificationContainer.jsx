import React from 'react';

function NotificationContainer({children}) {
    return (
        <section className='main_BarraDeNotificacao'>
            {children}
        </section>
    );
}

export default NotificationContainer;