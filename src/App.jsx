import { useState, useEffect } from "react";
import PokemonCard from "./components/PokemonCard";
import { Button } from "./components/ui/button";

function App() {
  const [pokemonList, setPokemonList] = useState([
    { name: "Pikachu", id: 1 },
    { name: "Charmander", id: 2 },
  ]);
  const [newPokemon, setNewPokemon] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //Create a function to fetch Pokémon data from the API
  const addPokemon = () => {
    if (!newPokemon) return;
    const nextId = pokemonList.length
      ? Math.max(...pokemonList.map((p) => p.id)) + 1
      : 1;
    setPokemonList([...pokemonList, { name: newPokemon, id: nextId }]);
    setNewPokemon("");
  };

  //Delete
  const deletePokemon = (id) => {
    setPokemonList(pokemonList.filter((pokemon) => pokemon.id !== id));
  };

  //Update
  const updatePokemon = (id, newName) => {
    setPokemonList(
      pokemonList.map((pokemon) =>
        pokemon.id === id ? { ...pokemon, name: newName } : pokemon,
      ),
    );
  };

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=10")
      .then((res) => res.json())
      .then((data) => {
        // include a unique ID for each Pokémon
        setPokemonList(
          data.results.map((p, index) => ({
            id: index + 1,
            name: p.name,
          })),
        );
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch Pokémon 😢");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading Pokémon... ⏳</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Pokédex Pro 🐱‍👤</h1>

      <div className="mb-4 flex gap-2">
        <input
          type="text"
          placeholder="New Pokémon"
          className="border p-2 rounded flex-1"
          value={newPokemon}
          onChange={(e) => setNewPokemon(e.target.value)}
        />
        <Button onClick={addPokemon}>Add 🐾</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {pokemonList.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            pokemon={pokemon}
            deletePokemon={deletePokemon}
            updatePokemon={updatePokemon}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
