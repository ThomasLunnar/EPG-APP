import { UserDTO } from "@dtos/UserDTO";
import { ReactNode, createContext, useState } from "react";

import { storageUserSave } from "@storage/storageUser";

export type AuthContextDataProps = {
    user: UserDTO;
    setUser: (user: UserDTO) => void;
}

type AuthContextProviderProps = {
    children: ReactNode;
}

export const AuthContext = createContext<AuthContextDataProps>({} as AuthContextDataProps);

export function AuthContextProvider({ children }: AuthContextProviderProps) {

    const [user, setUser] = useState({
        nome:"",
        email:"",
        validado: false
    })

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    )
}