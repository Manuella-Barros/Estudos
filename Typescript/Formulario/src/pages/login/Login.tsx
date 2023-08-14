import { useForm } from "react-hook-form";
import { ExternalWrapper, InternalWrapper } from "../../Global/globalWrapper/GlobalWrapper.styles";
import Input from "../../components/input/Input";
import * as Styles from './Login.styles';
import Button from "../../components/button/Button";
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { ACTIONS, GlobalContext, UserData } from "../../context/GlobalContext";
import { useContext } from 'react';


function Login() {
    //schema => objeto de regras
    //chave: nome do input               valor: validações desse input
    const schema = z.object({
        email: z.string().min(1, {message: "Campo obrigatório"}).email("Email inválido"),
        password: z.string().min(1, {message: "Campo obrigatório"})
            .refine((value) => /(?=.*\d)/.test(value), "Deve conter ao menos um dígito")
            .refine((value) => /(?=.*[a-z])/.test(value), "Deve conter ao menos uma letra minúscula")
            .refine((value) => /(?=.*[A-Z])/.test(value), "Deve conter ao menos uma letra maiúscula")
            .refine((value) => /(?=.*[$*&@#])/.test(value), "Deve conter ao menos um caractere especial")
    })
    
    const { register, watch, handleSubmit, formState: {errors}} = useForm<UserData>({
        resolver: zodResolver(schema)
    });

    //type Data = z.infer<typeof schema>

    const { setUserLogin } = useContext(GlobalContext);
    
    function handleFormSubmit(data: UserData){
        setUserLogin(
            ACTIONS.SET_USER_LOGIN, 
            {
                email: data.email,
                password: data.password,
            }
        )
    }

    return (
        <Styles.MainLogin>
            <ExternalWrapper>
                <InternalWrapper>
                    <h1>Logar</h1>

                    <form onSubmit={handleSubmit(handleFormSubmit)}>
                        <Input
                            inputName="Email"
                            name="email"
                            type="text"
                            errors={errors}
                            register={register}
                        />
                        <Input
                            inputName="Senha"
                            name="password"
                            type="password"
                            errors={errors}
                            register={register}
                        />
                        <Button>Logar</Button>
                    </form>
                </InternalWrapper>
            </ExternalWrapper>
        </Styles.MainLogin>
    );
}

export default Login;