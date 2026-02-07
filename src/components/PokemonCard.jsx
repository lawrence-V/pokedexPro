import { useState } from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

function PokemonCard({ pokemon, deletePokemon, updatePokemon }) {
  const name = pokemon?.name ?? "";
  const [likes, setLikes] = useState(0);
  const [isEditing, setIsEditing] = useState(false);
  const [draftName, setDraftName] = useState(name);
  const emojis = ["🔥", "⚡", "💧", "🌱"];
  const emoji = emojis[Math.floor(Math.random() * emojis.length)];

  return (
    <Card className="relative mx-auto w-full max-w-sm overflow-hidden pt-0">
      <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
      <img
        src={`https://avatar.vercel.sh/${name}`}
        alt={`${name} cover`}
        className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale"
        loading="lazy"
      />
      <CardHeader>
        <CardAction>
          <Badge variant="secondary">Featured</Badge>
        </CardAction>
        <CardTitle className="uppercase tracking-wide">
          {emoji} {name}
        </CardTitle>
        <CardDescription>
          A practical talk on training, battle strategy, and catching faster.
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <div className="flex w-full flex-col gap-2">
          {isEditing ? (
            <div className="flex gap-2">
              <input
                className="flex-1 rounded-full border border-slate-200 bg-white px-3 py-2 text-sm"
                value={draftName}
                onChange={(e) => setDraftName(e.target.value)}
              />
              <Button
                onClick={() => {
                  if (draftName.trim()) {
                    updatePokemon?.(pokemon.id, draftName.trim());
                  }
                  setIsEditing(false);
                }}
              >
                Save
              </Button>
            </div>
          ) : (
            <div className="flex gap-2">
              <Button className="flex-1" onClick={() => setLikes(likes + 1)}>
                ❤️ Like {likes}
              </Button>
              <Button
                variant="secondary"
                onClick={() => {
                  setDraftName(name);
                  setIsEditing(true);
                }}
              >
                Update
              </Button>
              <Button
                variant="secondary"
                onClick={() => deletePokemon?.(pokemon.id)}
              >
                Delete
              </Button>
            </div>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}

export default PokemonCard;
