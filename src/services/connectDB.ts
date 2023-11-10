import api from "@services/api"

export async function handleTenantKey({userEmail,validarTenant}){
    let teste = await api.post("/api/teste2",{
      email: userEmail,
      validarTenant
    })
    return(teste.data)
  }
