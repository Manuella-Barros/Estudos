import React from "react";
import { Link } from 'react-router-dom';

function Navbar(){
    return(
        <nav>
            <Link to={''}>Produtos</Link>
            <Link to={'contato'}>Contato</Link>
        </nav>        
    )
}

export default Navbar;