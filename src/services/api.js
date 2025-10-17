// Ligação entre o BackEnd e o FrontEnd

// Buscar lista de todos os filmes
export async function buscarFilmesAPI() {
  try {
    const response = await fetch('/api/movies')

    if (!response.ok) {
      console.error('Erro na resposta:', response.status, response.statusText)
      throw new Error('Erro ao carregar filmes.')
    }

    const data = await response.json()
    return data

  } catch (error) {
    console.error('Erro ao carregar filmes.', error)
    throw error
  }
}

// Buscar filme por ID
export async function buscarFilmePorIdAPI(id) {
  try {
    const response = await fetch(`/api/movies/${id}`)

    if (!response.ok) {
      console.error('Erro na resposta:', response.status, response.statusText)
      throw new Error('Erro ao carregar filme.')
    }

    const data = await response.json()
    return data

  } catch (error) {
    console.error('Erro ao carregar filme.', error)
    throw error
  }
}

// Adicionar novo filme
export async function adicionarFilmeAPI(dadosfilme) {
  try {
    const response = await fetch('/api/movies', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dadosfilme)
    })

    if (!response.ok) {
      console.error('Erro na resposta:', response.status, response.statusText)
      throw new Error('Erro ao adicionar filme.')
    }

    const data = await response.json()
    return data

  } catch (error) {
    console.error('Erro ao adicionar filme.', error)
    throw error
  }
}

// Atualizar informações do filme (título, género,classificação, etc.)
export async function atualizarFilmeAPI(id, dadosfilme) {
  try {
    const response = await fetch(`/api/movies/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dadosfilme)
    })

    if (!response.ok) {
      console.error('Erro na resposta:', response.status, response.statusText)
      throw new Error('Erro ao atualizar informações do filme.')
    }

    const data = await response.json()
    return data

  } catch (error) {
    console.error('Erro ao atualizar informações do filme.', error)
    throw error
  }
}

// Eliminar filme da lista
export async function eliminarFilmeAPI(id) {
  try {
    const response = await fetch(`/api/movies/${id}`, {
      method: 'DELETE'
    })

    if (!response.ok) {
      console.error('Erro na resposta:', response.status, response.statusText)
      throw new Error('Erro ao eliminar filme.')
    }

    return true

  } catch (error) {
    console.error('Erro ao eliminar filme.', error)
    throw error
  }
}