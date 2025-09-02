import CharactersHome from "@/components/CharactersHome";

const DrExamplePage = () => {
  return (
    <>
      <header className="p-5 bg-blue-900 text-center text-white">
        Personajes de Dragon Ball
      </header>
      <div className="max-w-270 mx-auto">
        <CharactersHome />
      </div>
    </>
  );
};

export default DrExamplePage;
