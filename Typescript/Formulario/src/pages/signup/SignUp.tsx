import { HTMLInputTypeAttribute, useContext } from "react";
import GlobalWrapper from "../../Global/globalWrapper/GlobalWrapper";
import Input from "../../components/input/Input";
import * as Style from "./SignUp.styles";
import { ACTIONS, GlobalContext, NameUserData, UserData } from "../../context/GlobalContext";
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";
import type { RegisterOptions } from "react-hook-form"

interface OptionsValues {
    nameInput: RegisterOptions,
    ageInput: RegisterOptions,
    emailInput: RegisterOptions,
    passwordInput: RegisterOptions,
}

interface InputTexts {
    id: number,
    inputName: string,
    name: NameUserData,
    type: HTMLInputTypeAttribute,
}

const optionsValues: OptionsValues = {
    nameInput:  {
        required: "Preencha esse campo",
        minLength: {
            value: 3,
            message: "O nome precisa ter mais de 3 caracteres"
        },
    },
    ageInput: {
        required: "Preencha esse campo",
        min: {
            value: 10,
            message: "Precisa ter mais de 10 anos"
        }
    },
    emailInput: {
        required: "Preencha esse campo",
        pattern: {
            value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
            message: "email inválido"
        }
    },
    passwordInput: {
        required: "Preencha esse campo",
        minLength: {
            value: 3,
            message: "A senha precisa ter mais de 8 caracteres",
        },
        validate: {
            isDigit: (value) => /(?=.*\d)/.test(value) || "Deve conter ao menos um dígito",
            isLowerCase: (value) => /(?=.*[a-z])/.test(value) || "Deve conter ao menos uma letra minúscula",
            isUpperCase: (value) => /(?=.*[A-Z])/.test(value) || "Deve conter ao menos uma letra maiúscula",
            isSpecialCaracter: (value) => /(?=.*[$*&@#])/.test(value) || "Deve conter ao menos um caractere especial",
        }
    }
} as const

const inputTexts: InputTexts[] = [
    {
        id: 1,
        inputName: "Nome:",
        type: "text",
        name: "name",
    },
    {
        id: 2,
        inputName: "Idade:",
        type: "number",
        name: 'age',
    },
    {
        id: 3,
        inputName: "Email:",
        type: "text",
        name: 'email',
    },
    {
        id: 4,
        inputName: "Senha:",
        type: "password",
        name: 'password',
    },
]


function SignUp() {
    const { setUserInfo } = useContext(GlobalContext);
    const { register, handleSubmit, formState:{errors}} = useForm<UserData>();
    const navigate = useNavigate();

    function handleFormSubmit(data: UserData){
        setUserInfo(ACTIONS.SET_USER_INFO,{
            name: data.name,
            age: data.age,
            email: data.email,
            password: data.password,
        });
    }

    return (
        <Style.SignUp>
            <GlobalWrapper>
                <h1>Registrar</h1>

                 <form onSubmit={handleSubmit(handleFormSubmit)}>

                    {
                        inputTexts.map(input => {
                            return(
                                <Input
                                    key={input.id}
                                    inputName={input.inputName}
                                    type={input.type}
                                    name={input.name}
                                    options={optionsValues[input.name as keyof typeof optionsValues]}
                                    register={register}
                                    errors={errors}
                                />    
                            )
                        })
                    } 
                    <Button>Registrar</Button>
                </form> 

                <h2>Já possui conta?</h2>
                <Button onClick={() => navigate('/login')}>Logar</Button>
                
            </GlobalWrapper>
        </Style.SignUp>
    );
}

export default SignUp;