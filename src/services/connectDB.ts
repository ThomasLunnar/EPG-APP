import api from "@services/api"

export async function handleTenantKey({ email, retornarDados }) {
  // let teste = await api.post("/api/conectarDb", {
  //   email,
  //   retornarDados
  // })
  // console.log(teste.data)
  // return teste.data
  return { tenantValido: true, dadosUsuario: { email: email } }
}

export async function handleGetCursos() {
  let TodosCursos = await api.get("/api/curso/publicado")
  // console.log(TodosCursos.data)
  return TodosCursos.data
}

export async function handleGetCursosId({ CursoId }) {
  let cursoUrl = `/api/curso/list/id/${CursoId}`
  try {
    console.log(cursoUrl)
    console.log('cursoUrl')
    let Cursofiltrado = await api.get(cursoUrl)
    console.log(Cursofiltrado.data)
    console.log('Cursofiltrado.data')
    return Cursofiltrado.data
  } catch (erro) {
    console.error('ruim no axios')
  }
}

// export async function handleGetCursosId() {
//   let Cursofiltrado = await api.get(`/api/curso/list/id/382013278525587520`)
//   console.log(Cursofiltrado.data)
//   console.log('resposta do server')
//   return Cursofiltrado.data
// }

export async function handleGetCursoCompleto({ CursoSlug }) {
  let cursoUrl = `/api/relations/list/${CursoSlug}`
  try {
    console.log(cursoUrl)
    console.log('cursoUrl')
    let Cursofiltrado = await api.get(cursoUrl)
    console.log(Cursofiltrado.data)
    console.log('Cursofiltrado.data')
    return Cursofiltrado.data
  } catch (erro) {
    console.error('ruim no axios')
  }
}