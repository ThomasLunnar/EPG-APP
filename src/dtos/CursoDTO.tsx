export type CursoDTO = {
    nome: string;
    descricao: string;
    modulos: [
        {
            ordem: number;
            refFauna: string;
            nome: string;
            descrição: string;
            aulas: [
                {
                    ordem: number;
                    refFauna: string;
                    nome: string;
                }
            ]
        }
    ]
}