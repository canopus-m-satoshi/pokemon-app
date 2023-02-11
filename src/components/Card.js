const Card = ({ pokemon }) => {
  const { name, sprites, types, weight, height, abilities } = pokemon
  console.log('🚀 ~ file: Card.js:2 ~ Card ~ pokemon', pokemon)
  return (
    <div className="border drop-shadow-lg bg-white py-2 px-5">
      <div>
        <img src={sprites.front_default} alt={name} className="mx-auto" />
      </div>

      <h3 className="text-xl font-bold">{name.toUpperCase()}</h3>

      <div className="mt-5 grid gap-1 place-items-center md:place-items-start">
        <div className="flex items-start">
          <div className="">Type:</div>
          <div className="flex flex-col items-start ml-1">
            {types.map((type, i) => {
              return (
                <div key={i}>
                  <span className="typeName">{type.type.name}</span>
                </div>
              )
            })}
          </div>
        </div>
        <div>
          <p>Weight: {weight} gram</p>
        </div>
        <div>
          <p>Height: {height} cm</p>
        </div>
        <div>
          <p>Abilities: {abilities[0].ability.name}</p>
        </div>
      </div>
    </div>
  )
}
export default Card
