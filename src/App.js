import { useEffect, useState } from 'react'
import './App.css'
import { getAllPokemon, getPokemon } from './utils/pokemon'

function App() {
  const initialURL = 'https://pokeapi.co/api/v2/pokemon'
  const [isLoading, setIsLoading] = useState(true)
  const [pokemonData, setPokemonData] = useState([])

  const loadPokemon = async (data) => {
    let _pokemonData = await Promise.all(
      data.map((pokemon) => {
        let pokemonRecord = getPokemon(pokemon.url)
        return pokemonRecord
      }),
    )

    setPokemonData(_pokemonData)
  }

  console.log(pokemonData)

  useEffect(() => {
    const fetchPokemonData = async () => {
      let res = await getAllPokemon(initialURL)
      loadPokemon(res.results)
    }

    fetchPokemonData()
    setIsLoading(false)
  }, [])

  return (
    <div className="App">
      {isLoading ? <h1>読み込み中です</h1> : <h1>読み込み終了しました</h1>}
    </div>
  )
}

export default App
