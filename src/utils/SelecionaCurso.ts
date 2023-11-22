import { useState } from 'react'

import { handleGetCursosId } from '@services/connectDB'

import { useCurso } from '@hooks/useCurso'

type Props = {
    CursoId: string
}

export async function SelelecionaCurso({ CursoId }: Props) {

    const { setCurso } = useCurso();

    async function getCurso() {
        let serverResposta = await handleGetCursosId(CursoId)
        console.log(serverResposta.data)
        return (serverResposta.data)
    }

    //Salvar resposta do Get Curso em uma variavel

    setCurso((prevState) => ({
        ...prevState,
        nome: "Curso Exemplo",
        descricao: "Curso criado para servir de exemplo na modelagem de dados",
    }))
}