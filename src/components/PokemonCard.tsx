type PokemonData = {
  pokemon: { name: string; imgSrc?: string };
};

function PokemonCard({ pokemon }: PokemonData) {
  if (pokemon.imgSrc === undefined) {
    return (
      <>
        <figcaption>{pokemon.name}</figcaption>
        <p>???</p>
      </>
    );
  } else {
    return (
      <>
        <figcaption>{pokemon.name}</figcaption>
        <img src={pokemon.imgSrc} alt={pokemon.name} />
      </>
    );
  }
}
export default PokemonCard;
