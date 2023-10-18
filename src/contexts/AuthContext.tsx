import { UserDTO } from "@dtos/userDTO";
import { ReactNode, createContext } from "react";

export type AuthContextDataProps = {
    user: UserDTO
}

type AuthContextProviderProps = {
    children: ReactNode;
}

export const AuthContext = createContext<AuthContextDataProps>({} as AuthContextDataProps);

export function AuthContextProvider({children}: AuthContextProviderProps) {
    return (
        <AuthContext.Provider value={{
            user: {
                id: '1',
                name: 'Thomas',
                email: 'thomas@lunnar.team',
                avatar: 'https://github.com/ThomasLunnar.png'
            }
        }}>
            {children}
        </AuthContext.Provider>
    )
}