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

function PokemonCard({ name }) {
  const [likes, setLikes] = useState(0);
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
        <Button className="w-full" onClick={() => setLikes(likes + 1)}>
          ❤️ Like {likes}
        </Button>
      </CardFooter>
    </Card>
  );
}

export default PokemonCard;
