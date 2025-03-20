"use client";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation"; // Para redirecionamento
import "../historico-alertas/styles.css";

const alerts = [
  { id: 1, platform: "Plataforma 2", date: "14/03/2024", message: "Pessoa detectada além da linha de segurança" },
  { id: 2, platform: "Plataforma 1", date: "15/03/2024", message: "Pessoa detectada além da linha de segurança" },
];

export default function AlertPage() {
  const [selectedPlatform, setSelectedPlatform] = useState("Todos");
  const [selectedDate, setSelectedDate] = useState("");
  const [menuOpen, setMenuOpen] = useState(false); // Estado para mostrar o menu
  const router = useRouter(); // Hook para redirecionar

  const handleLogout = () => {
    // Aqui você pode limpar os dados do usuário (ex: localStorage, cookies, etc.)
    router.push("/"); // Redireciona para a tela de login
  };

  const filteredAlerts = alerts.filter((alert) => {
    return (
      (selectedPlatform === "Todos" || alert.platform === selectedPlatform) &&
      (selectedDate === "" || alert.date === selectedDate)
    );
  });

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <header className="bg-black text-white p-4 flex justify-between items-center">
        <div className="login-logo">
         <div className="login-logo-img"> <Image src="/imagens/logo-CCR.png" alt="Logo CCR" width={200} height={30} /> </div>
        </div>
        <nav>
          <a href="" className="hover:underline">Históricos de Alertas</a>
          <a href="monitoramento" className="hover:underline">Monitoramento em Tempo Real</a>
        </nav>
        <div className="">
        <button 
          id="perfil-button"
          className="bg-gray-700 px-3 py-1 rounded"
          onClick={() => setMenuOpen(!menuOpen)}
          >
          Perfil
          </button>

          {menuOpen && (
            <div className="">
              <button 
              id="sair-button"
              className="block w-full text-left px-4 py-2 hover:bg-gray-200"
              onClick={handleLogout}
              >
              Sair
              </button>

            </div>
          )}
        </div>
      </header>

      <main className="p-6">
        <h2 className="text-xl font-bold">Filtrar Alertas</h2>
        <div className="flex gap-4 my-4">
          <select
            className="border p-2"
            value={selectedPlatform}
            onChange={(e) => setSelectedPlatform(e.target.value)}
          >
            <option value="Todos">Todos</option>
            <option value="Plataforma 1">Plataforma 1</option>
            <option value="Plataforma 2">Plataforma 2</option>
          </select>
          <input
            type="date"
            className="border p-2"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          />
          <button 
            id="aplicar-button"
            className="bg-blue-500 text-white px-4 py-2"
            >
            Aplicar Filtro
            </button>

        </div>

        <h2 className="text-xl font-bold">Alertas</h2>
        <div className="mt-4">
          {filteredAlerts.length > 0 ? (
            filteredAlerts.map((alert) => (
              <div key={alert.id} className="border-l-4 border-red-500 p-4 mb-2 bg-white shadow rounded">
                <p className="font-bold">{alert.platform} - {alert.date}</p>
                <p>{alert.message}</p>
              </div>
            ))
          ) : (
            <p>Nenhum alerta encontrado.</p>
          )}
        </div>
      </main>

      <footer className="bg-black text-white p-4 text-center mt-6">
        <p>Contato</p>
        <div className="flex justify-center gap-6">
          <a href="https://www.linkedin.com/company/ccr-rodovias/">LinkedIn</a>
          <a href="https://x.com/_Linhas8e9">Twitter</a>
          <a href="https://www.instagram.com/viamobilidadesp/">Instagram</a>
        </div>
      </footer>
    </div>
  );
}
