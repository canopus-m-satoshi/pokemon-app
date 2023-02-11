import { useEffect, useState } from 'react'
import Card from './components/Card'
import Navbar from './components/Navbar'
import { getAllPokemon, getPokemon } from './utils/pokemon'

function App() {
  const initialURL = 'https://pokeapi.co/api/v2/pokemon'
  const [isLoading, setIsLoading] = useState(true)
  const [pokemonData, setPokemonData] = useState([])
  const [nextURL, setNextURL] = useState()

  const loadPokemon = async (data) => {
    let _pokemonData = await Promise.all(
      data.map((pokemon) => {
        let pokemonRecord = getPokemon(pokemon.url)
        return pokemonRecord
      }),
    )

    setPokemonData(_pokemonData)
  }

  useEffect(() => {
    const fetchPokemonData = async () => {
      let res = await getAllPokemon(initialURL)
      console.log('🚀 ~ file: App.js:30 ~ fetchPokemonData ~ res', res)
      console.log('🚀 ~ file: App.js:30 ~ fetchPokemonData ~ res', res.next)
      loadPokemon(res.results)
      setNextURL(res.next)
    }

    fetchPokemonData()
    setIsLoading(false)
  }, [])

  const handlePrevPage = () => {}

  const handleNextPage = async () => {
    setIsLoading(true)

    let data = await getAllPokemon(nextURL)
    console.log('🚀 ~ file: App.js:31 ~ handleNextPage ~ data', data)

    await loadPokemon(data.results)
    setNextURL(data.next)
    setIsLoading(false)
  }

  return (
    <>
      <div className="w-full h-full pb-2 bg-blue-200">
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

        <div className="container m-auto my-5   flex gap-2 justify-center">
          <button
            onClick={handlePrevPage}
            className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
            Prev
          </button>
          <button
            onClick={handleNextPage}
            className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
            Next
          </button>
        </div>
      </div>
    </>
  )
}

export default App
