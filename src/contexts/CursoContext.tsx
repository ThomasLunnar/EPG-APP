import { CursoDTO } from "@dtos/CursoDTO";
import { ReactNode, createContext, useState } from "react";

import { storageUserSave } from "@storage/storageUser";

export type CursoContextDataProps = {
    curso: CursoDTO;
    setCurso: (curso: CursoDTO) => void;
}

type CursoContextProviderProps = {
    children: ReactNode;
}

export const CursoContext = createContext<CursoContextDataProps>({} as CursoContextDataProps);

export function CursoContextProvider({ children }: CursoContextProviderProps) {

    const [curso, setCurso] = useState({
        nome: "2",
        description: "descrição",
        modulos: [
            {
                ordem: 0,
                refFauna: "381379180526305346",
                nome:"introdução",
                descrição:'descrição do módulo',
                aulas:[
                    {
                        ordem: 0,
                        refFauna: "381379673417842752",
                        nome:'Introdução'
                    }
                ]
            },
            {
                ordem: 1,
                refFauna: "381379180526305345",
                nome:"Modulo 1",
                descrição:'descrição do módulo 1',
                aulas: [
                    {
                        ordem: 0,
                        refFauna: "381379673417842759",
                        nome:'aula 1'
                    },
                    {
                        ordem: 1,
                        refFauna: "381379673417842757",
                        nome:'aula 2'
                    },
                    {
                        ordem: 2,
                        refFauna: "381379673417842756",
                        nome:'aula 3'
                    }
                ]
            }
        ]
    })

    return (
        <CursoContext.Provider value={{ curso, setCurso }}>
            {children}
        </CursoContext.Provider>
    )
}