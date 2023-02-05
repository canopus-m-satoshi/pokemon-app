import { useEffect, useState } from 'react'
import './App.css'
import { getAllPokemon } from './utils/pokemon'

function App() {
  const initialURL = 'https://pokeapi.co/api/v2/pokemon'

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchPokemonData = async () => {
      let res = await getAllPokemon(initialURL)
      console.log('🚀 ~ file: App.js:10 ~ fetchPokemonData ~ res', res)
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
