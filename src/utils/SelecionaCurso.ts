import { useState } from 'react'

import { handleGetCursosId } from '@services/connectDB'

import { useCurso } from '@hooks/useCurso'

type Props = {
    CursoId: string
}

export async function SelelecionaCurso(CursoId: any) {

    const { setCurso } = useCurso();

    try {
        const getCurso = await handleGetCursosId({CursoId})
        let dadosCurso = getCurso.data
        console.log(dadosCurso)
        console.log('dadosCurso')

        //Salvar resposta do Get Curso em uma variavel

        // setCurso((prevState) => ({
        //     ...prevState,
        //     nome: "Curso Exemplo",
        //     descricao: "Curso criado para servir de exemplo na modelagem de dados",
        // }))

        return dadosCurso
    } catch (erro) {
        console.error('Erro ao buscar cursos:', erro);
    }
}