import React from "react";

const Equipe = () => {
  const integrantes = [
    { rm: "560901", nome: "Enzo Elia Tarraga", papel: "Representante" },
    { rm: "560955", nome: "Rafael Terra Teodoro", papel: "" },
    { rm: "560112", nome: "Otoniel Arantes Barbado", papel: "" },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Nosso Time</h1>
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg">
        {integrantes.map((membro, index) => (
          <div key={index} className="border-b py-3 flex justify-between items-center">
            <span className="text-gray-700 font-medium">{membro.rm} - {membro.nome}</span>
            {membro.papel && <span className="text-blue-600 font-bold">{membro.papel}</span>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Equipe;
