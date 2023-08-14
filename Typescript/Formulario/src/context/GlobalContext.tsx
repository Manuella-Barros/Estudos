import { createContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";

interface GlobalContextProps {
    userData: State,
    setUserInfo: (a: ActionsType, b: UserData) => void,
    setUserLogin: (a: ActionsType, b: UserData) => void,
}
export interface UserData {
    name?: NameUserData | null,
    age?: string | null,
    email: string | null,
    password: string | null,
}

export type NameUserData = 'email'| 'age' | 'password' | 'name'

export const ACTIONS = {
    SET_USER_INFO: 'SET_USER_INFO',
    SET_USER_LOGIN: 'SET_USER_LOGIN',
} 

type ActionsType = typeof ACTIONS[keyof typeof ACTIONS]

type State = UserData | null

interface Action {
    type: ActionsType,
    payload: any
}

export const GlobalContext = createContext({} as GlobalContextProps);

export const GlobalContextProvider = ({children} : {children: React.ReactNode}) => {
    const navigate = useNavigate();

    // USE REDUCER
    function reducer(state: State, action: Action): State{
        switch(action.type){
            case 'SET_USER_INFO':
                navigate('./login');
                return action.payload.userInfo
            case 'SET_USER_LOGIN':
                if(state == null){
                    navigate('/')
                    return null
                } else{
                    console.log(state);
                    if(action.payload.userLogin.email == state.email && action.payload.userLogin.password == state.password){
                        navigate('/perfil')
                    } else{
                        console.log("errado")
                    }
                    return state;
                }
            default:
                return state
        }
    }
    const [userData, dispatch] = useReducer(reducer, null);

    //FUNÇÕES
    function setUserInfo(actionType: ActionsType, userInfo: UserData){
        dispatch({
            type: actionType,
            payload: {
                userInfo
            }
        })
    }
    
    function setUserLogin(actionType: ActionsType, userLogin: UserData){
        dispatch({
            type: actionType,
            payload: {
                userLogin,
            }
        })
    }
    
    return(
        <GlobalContext.Provider value={{ userData, setUserInfo, setUserLogin }}>
            {children}
        </GlobalContext.Provider>
    )
}