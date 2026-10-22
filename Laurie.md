# React Basics 01 - Pokédex - Introduction

_contexte :_ Nous n'avions pas encore l'information si nous devions le faire en Javascipt ou en Typescript. Pas de Biome.
Donc j'ai commencer les exercices en Javascript jusqu'à finir l'exercice 3 sur 'l'affichage donée dans un composant', avant de convretir mon code en typescript pour le reste des exos.

infos utile : il faut savoir que j'utilise le read.md comme un mémo, donc aussi utile pour moi... si c'est long ... pardon.

# React Basics 02 - Pokédex - Ton premier composant

Récapitulatif de l'exercices :

- On peut découper l'interface en plusieurs composants.
- Un composant est un block réutilisable et extensible.
- Tu peux créer une arborescence de composants potentiellement infinie dont la racine sera toujours App.
- Pour pouvoir utiliser tes composants, tu utilises les imports et les exports.
- (Dans du JSX, tu peux appeler un composant par son nom comme si c’était une balise HTML auto-fermante).

  -Creer une branche component.1-

```
import "./App.css";

import PokemonCard from "./components/PokemonCard";

function App() {
return <PokemonCard />
}

export default App;
```

```
function PokemonCard() {
  return (
    <>
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
        alt="bulbasaur"/>
      <figcaption>bulbasaur</figcaption>
    </>
  );
}

export default PokemonCard;
```

# React Basics 03 - Pokédex - Afficher des données dans un composant

Récapitulatif de l'exercices :

- composant PokemonCard dynamique en utilisant des données d’une variable plutôt que des données “en dur”.
- À l’intérieur de la fonction PokemonCard, crée une variable appelée pokemon : affecte-lui le premier Pokémon du tableau pokemonList.
- On veut fairre apparaitre que "mew" => pokemonList[1].

-C'est ici que le changement c'est oppéré, je me permet donc de passer directment sur du typescript.
(j'ai recréer pour l'occassion un nouveau dossier pokedex)

```
const pokemonList = [
{
name: "bulbasaur",
imgSrc:
"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
},
{
name: "mew",
},
];
```

```
function PokemonCard() {
const pokemon = pokemonList[1];
if (pokemon.imgSrc === undefined) {
return (
<>
<figcaption>{pokemon.name}</figcaption>
<p>???</p>
</>
);} else {
return (
<>
<figcaption>{pokemon.name}</figcaption>
<img src={pokemon.imgSrc} alt={pokemon.name} />
</>
); }}
export default PokemonCard;
```

# React Basics 04 - Pokédex - Passer des props

// oublie de ce que j'ai fait.

# 05-pokedex-typer-les-props-avec-typescript

Ici on nous demand de creer une nouvelle branche (props.2), et définir le type de props.

```
type PokemonData = {
  pokemon: { name: string; imgSrc?: string };
};


function PokemonCard({ pokemon }: PokemonData) {          //ici pokemon est appeler
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
```

# React Basics 06 - Pokédex - Utiliser un state - Solution

Voir directement sur mon code actuel.
