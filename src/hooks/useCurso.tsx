import { useContext } from "react";
import { CursoContext } from '@contexts/CursoContext'

export function  useCurso(){
    const context = useContext(CursoContext);

    return context;
}