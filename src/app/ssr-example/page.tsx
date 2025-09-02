import Image from "next/image";
import Marvel from "../../assets/images/marvel.jpg"

const SsrExamplePage = () => {
  return (
    <>
      <header className="bg-blue-800 text-white px-30 py-5 flex justify-between">
        <span>Logo</span>
        <nav>
          <ul className="flex gap-4">
            <li>Inicio</li>
            <li>Nosotros</li>
            <li>Contacto</li>
            <li>Blog</li>
          </ul>
        </nav>
      </header>
      <section className="px-30 bg-amber-800 text-white text-center py-5 flex flex-col items-center">
        <h1>Este es el comportamiento por defecto de Next</h1>
        <p className="mt-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio
          eligendi aliquid ea ad doloribus veritatis ipsam officia, voluptate
          suscipit obcaecati consequatur optio necessitatibus iure explicabo
          iusto similique unde eos omnis.
        </p>
        <div className="p-5">
          <Image src={Marvel} alt="marvel" height={300} width={400} />
        </div>
      </section>
    </>
  );
};

export default SsrExamplePage;
