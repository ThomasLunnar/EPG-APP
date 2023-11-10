import api from "@services/api"

export async function handleTenantKey({email,retornarDados}){
    let teste = await api.post("/api/conectarDb",{
      email,
      retornarDados
    })
    console.log(teste.data)
    return(teste.data)
  }
