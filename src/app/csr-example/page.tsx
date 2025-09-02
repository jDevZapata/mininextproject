"use client";
import { useState } from "react";

const CsrExamplePage = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [showGreeting, setShowGreeting] = useState(false);

  return (
    <>
      <div className="mx-auto mt-50 p-5 flex flex-col gap-3 w-80 border border-gray-300 rounded">
        <h2>FORMULARIO DE SALUDO</h2>
        <span className="flex justify-between">
          <label htmlFor="name">Nombre </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            name="name"
            className="border border-gray-300 rounded p-1 ml-2"
          />
        </span>
        <span className="flex justify-between">
          <label htmlFor="lastName">Apellidos </label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            name="lastName"
            className="border border-gray-300 rounded p-1 ml-2"
          />
        </span>
        <button onClick={() => setShowGreeting(true)} className="bg-blue-500 text-white rounded p-2 mt-3 hover:bg-blue-700">
          Saludar
        </button>
      </div>
      <div className="mx-auto p-5 flex gap-3 w-80">
        {showGreeting && <div>Saludos para: {`${name} ${lastName}`}</div>}
      </div>
    </>
  );
};

export default CsrExamplePage;
