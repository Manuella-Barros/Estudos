import { useNavigate } from "react-router-dom";
import GlobalWrapper from "../../Global/globalWrapper/GlobalWrapper";
import Button from "../../components/button/Button";
import { GlobalContext } from "../../context/GlobalContext";
import * as Style from "./PerfilStyle.styles";
import { useContext } from 'react';

function Perfil() {
    const { userData } = useContext(GlobalContext)
    const navigate = useNavigate();
    
    return (
        <Style.PerfilStyle>
            <GlobalWrapper>
                <h1>Perfil</h1>
                {
                    userData?.name && userData?.age && 
                    <Style.PerfilContainer>
                        <picture>
                            <img src="./images/perfil.jpg" alt="" />
                        </picture>
                            <div>
                                <h2>Informações do usuário</h2>
                                <p>Nome: {userData?.name}</p>
                                <p>Idade: {userData?.age}</p>
                            </div>
                    </Style.PerfilContainer>
                }
                {
                    !userData?.name && !userData?.age &&
                    <div>
                        <h3>Registre-se primeiro</h3> 
                        <Button onClick={() => navigate('/')}>Registrar</Button>
                    </div>
                }
            </GlobalWrapper>
        </Style.PerfilStyle>
    );
}

export default Perfil;