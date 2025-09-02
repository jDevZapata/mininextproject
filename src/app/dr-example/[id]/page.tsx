import Character from "@/components/Character";

interface IPropsSingleCharacter {
  params: Promise<{ id: string }>;
}

const getCharacterInfo = async (id: string) => {
  const res = await fetch(`https://dragonball-api.com/api/characters/${id}`);
  const data = await res.json();
  return data;
};

const SingleCharacterPage = async ({ params }: IPropsSingleCharacter) => {
  const { id } = await params;
  const character = await getCharacterInfo(id);
  console.log(character);

  return (
    <div>
      <header className="p-5 bg-blue-900 text-center text-white">
        Personaje
      </header>
      <Character character={character} />
    </div>
  );
};

export default SingleCharacterPage;
