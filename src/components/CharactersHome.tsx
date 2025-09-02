/* eslint-disable @next/next/no-img-element */
import { Character, Characters } from "@/models/Characters";
import Link from "next/link";

const getCharacters = async () => {
  const res = await fetch("https://dragonball-api.com/api/characters");
  const data: Characters = await res.json();
  return data.items;
};

const CharactersHome = async () => {
  const characters = await getCharacters();

  return (
    <div className="grid grid-cols-4 gap-5">
      {characters.map((character: Character) => (
        <Link href={`/dr-example/${character.id}`}
          key={character.id}
          className="m-2 p-2 border text-center border-gray-300 rounded"
        >
          <img
            src={character.image}
            alt={character.name}
            className="h-60 mx-auto object-cover rounded"
          />
          <h3 className="font-bold mt-2">{character.name}</h3>
        </Link>
      ))}
    </div>
  );
};

export default CharactersHome;
