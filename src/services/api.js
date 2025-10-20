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

// Obter lista de classificação
export async function buscarClassificacaoFilmesAPI() {
  try {
    const response = await fetch('/api/movies/rating')

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

// Obter lista de filmes vistos
export async function buscarFilmesVistosAPI() {
  try {
    const response = await fetch('/api/movies/watched')

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

// Obter lista de filmes não vistos
export async function buscarFilmesNaoVistosAPI() {
  try {
    const response = await fetch('/api/movies/nowatched')

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

    const data = await response.json()
    return data

  } catch (error) {
    console.error('Erro ao eliminar filme.', error)
    throw error
  }
}