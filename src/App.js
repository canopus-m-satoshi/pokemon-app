import { useEffect, useState } from 'react'
import Card from './components/Card'
import Navbar from './components/Navbar'
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
    <>
      <div className="w-full h-full bg-blue-200">
        <Navbar />
        <div className="py-4 px-5 container mx-auto">
          {isLoading ? (
            <h1>読み込み中です</h1>
          ) : (
            <>
              <div className="text-center container grid  gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {pokemonData.map((pokemon, i) => {
                  return <Card key={i} pokemon={pokemon} />
                })}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default App
