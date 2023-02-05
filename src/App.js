import { useEffect } from 'react'
import './App.css'
import { getAllPokemon } from './utils/pokemon'

function App() {
  const initialURL = 'https://pokeapi.co/api/v2/pokemon'

  useEffect(() => {
    const fetchPokemonData = async () => {
      let res = await getAllPokemon(initialURL)
      console.log('🚀 ~ file: App.js:10 ~ fetchPokemonData ~ res', res)
    }

    fetchPokemonData()
  }, [])

  return <div className="App"></div>
}

export default App
