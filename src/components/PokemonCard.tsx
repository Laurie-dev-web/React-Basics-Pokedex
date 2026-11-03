import "./PokemonCard.css";

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
      <section className={`card ${pokemon.name}`}>
        <figcaption className="texte">{pokemon.name}</figcaption>
        <img className="image" src={pokemon.imgSrc} alt={pokemon.name} />
      </section>
    );
  }
}
export default PokemonCard;
