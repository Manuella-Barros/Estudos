import { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({children}) => {
    const [userName, setUserName] = useState("Leslie Alexander");

    return <GlobalContext.Provider value={[userName, setUserName]}>{children}</GlobalContext.Provider>
}