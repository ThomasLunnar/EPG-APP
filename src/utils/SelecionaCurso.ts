import { useState } from 'react'

import { handleGetCursosId } from '@services/connectDB'

//navigation
import { useNavigation } from '@react-navigation/native';

//rotas
import { AppNavigatorRoutesProps } from '@routes/app.routes';

import { useCurso } from '@hooks/useCurso'

type Props = {
    CursoId: string
}

export async function SelelecionaCurso({CursoId}) {

    // const navigation = useNavigation<AppNavigatorRoutesProps>();

    const { setCurso } = useCurso();
    console.log('inicio SelecionaCurso')
    try {
        const getCurso = await handleGetCursosId({CursoId})
        let dadosCurso = getCurso.data
        console.log(dadosCurso)
        console.log('dadosCurso')

        //Salvar resposta do Get Curso em uma variavel

        setCurso((prevState) => ({
            ...prevState,
            nome: dadosCurso.nome,
            descricao: "Curso criado para servir de exemplo na modelagem de dados",
        }))

        // navigation.navigate('curso');

        // return dadosCurso
    } catch (erro) {
        console.error('Erro ao buscar o curso:', erro);
    }
}