import { HTMLInputTypeAttribute } from 'react';
import * as Style from './Input.styles';
import type { FieldErrors, FieldValues, RegisterOptions, UseFormRegister } from "react-hook-form"
import { NameUserData, UserData } from '../../context/GlobalContext';

export interface InputProps {
    inputName: string,
    name: NameUserData,
    type: HTMLInputTypeAttribute,
    errors: FieldErrors<FieldValues>,
    options?: RegisterOptions<FieldValues> ,
    register: UseFormRegister<UserData>,
}

function Input({register, options = {required: true}, ...props }: InputProps) {
    return(
        <Style.mainInput>
            <h3>{props.inputName}</h3>
            <Style.Input 
                type={props.type} 
                {...register(props.name, options)}
            />
            {
                <Style.ErrorMessage>
                    {props?.errors[props.name]?.message?.toString()}
                </Style.ErrorMessage>
            }
        </Style.mainInput>

    )
}

export default Input;