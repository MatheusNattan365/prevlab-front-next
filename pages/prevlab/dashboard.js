import React from "react";

// import { Container } from './styles';

function Dashboard() {
  const renderForm = () => {};
  return (
    <div className="flex flex-col bg-green-800">
      <header className="bg-green-600 text-white body-font ">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <h2 className="text-5xl  font-semibold tracking-wide ">
            Prev<span className="text-5xl  font-thin">Lab</span>
          </h2>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <button className="mr-5 text-green-800 focus:outline-none hover:text-white ">
              Cad. Pacientes
            </button>
            <button className="mr-5 text-green-800 focus:outline-none hover:text-white">
              Cad. Exames
            </button>
            <button className="mr-5 text-green-800 focus:outline-none hover:text-white">
              Relatórios
            </button>
          </nav>
          <button
            className="inline-flex items-center bg-green-800 border-0 py-1 px-3 focus:outline-none hover:bg-green-900 rounded text-base mt-4 md:mt-0"
            onClick={renderForm}
          >
            Logout
          </button>
        </div>
      </header>
      <main className="flex-grow bg-green-800 ">
        <div className="flex-1">
          <div className="flex-1 h-full"></div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
