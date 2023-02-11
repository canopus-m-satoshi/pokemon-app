const Card = ({ pokemon }) => {
  const { name, sprites, types, weight, height, abilities } = pokemon
  console.log('🚀 ~ file: Card.js:2 ~ Card ~ pokemon', pokemon)
  return (
    <div className="card">
      <div className="cardImg">
        <img src={sprites.front_default} alt="" />
        <h3 className="cardName">{name}</h3>

        <div className="cardTypes">
          {types.map((type, i) => {
            return (
              <div key={i}>
                <div>Type:</div>
                <span className="typeName">{type.type.name}</span>
              </div>
            )
          })}
        </div>
      </div>
      <div className="cardInfo">
        <div className="cardData">
          <p className="title">Weight: {weight} gram</p>
        </div>
        <div className="cardData">
          <p className="title">Height: {height} cm</p>
        </div>
        <div className="cardData">
          <p className="title">Abilities: {abilities[0].ability.name}</p>
        </div>
      </div>
    </div>
  )
}
export default Card
