import { SingleCharacterInfo } from "@/models/SingleCharacter";

/* eslint-disable @next/next/no-img-element */
interface IPropsSingleCharacter {
  character: SingleCharacterInfo;
}

const Character = ({ character } : IPropsSingleCharacter) => {
  return <div className="mt-5 mx-auto p-4 w-260 border border-gray-300 rounded flex">
    <span className="w-1/3 text-center">
        <img src={character.image} alt="Character Image" className="h-80 mx-auto object-cover rounded" />
    </span>
    <div className="w-2/3">
        <h2 className="font-bold text-2xl mb-2">{character.name}</h2>
        <p>{character.description}</p>
    </div>
  </div>;
}

export default Character;