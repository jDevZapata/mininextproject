import Link from "next/link";

export default function Home() {
  return (
    <>
    <header className="bg-blue-800 text-white p-5">Ejemplos de renderizado en Next.js</header>
    <menu className="flex flex-col items-center mt-3">
      <ul>
        <li className="w-50 bg-gray-200 p-2 text-center rounded hover:bg-gray-400">
          <Link href="/ssr-example">SSR Rendering</Link>
        </li>
        <li className="w-50 bg-gray-200 p-2 text-center rounded hover:bg-gray-400 mt-2">
          <Link href="/csr-example">CSR Example</Link>
        </li>
        <li className="w-50 bg-gray-200 p-2 text-center rounded hover:bg-gray-400 mt-2">
          <Link href="/dr-example">DR Example</Link>
        </li>
      </ul>
    </menu>
    </>
  );
}
