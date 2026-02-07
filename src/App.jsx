import { useState, useEffect } from "react";
import PokemonCard from "./components/PokemonCard";

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=10")
      .then((res) => res.json())
      .then((data) => {
        setPokemonList(data.results);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch Pokémon 😢");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading Pokémon... ⏳</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Pokédex Pro 🐱‍👤</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {pokemonList.map((pokemon) => (
          <PokemonCard key={pokemon.name} name={pokemon.name} />
        ))}
      </div>
    </div>
  );
}

export default App;
