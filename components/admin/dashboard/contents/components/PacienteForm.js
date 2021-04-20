import React from "react";

// import { Container } from './styles';

function PacientForm() {
  const handleSubmit = (inputRef) => {
    switch (inputRef) {
      case "nomeCompleto":
        return console.log("nomeCompleto");
      case "solicitante":
        return console.log("solicitante");
      case "convenio":
        return console.log("convenio");
    }
  };

  const Input = ({ label, inputRef }) => (
    <div className="col-span-3 sm:col-span-2">
      <label
        htmlFor="company_website"
        className="block text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <div className="mt-1 flex rounded-md shadow-sm ">
        <input
          type="text"
          name={`company_${label}`}
          id={`company_${label}`}
          onChange={() => handleSubmit(inputRef)}
          className="border border-gray-500 p-2 flex-1 block w-full h-10  rounded-r-md sm:text-sm  "
          placeholder="..."
        />
      </div>
    </div>
  );
  return (
    <>
      <div>
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Cadastro de Pacientes
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                This information will be displayed publicly so be careful what
                you share.
              </p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <button className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                Selecionar paciente
              </button>
            </div>
            <form action="#" method="POST">
              <div className="shadow sm:rounded-md sm:overflow-hidden">
                <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                  <Input label={"Nome completo"} inputRef={"nomeCompleto"} />

                  <div className="grid grid-cols-3 gap-6">
                    <div className="grid grid-cols-auto">
                      <label
                        htmlFor="company_website"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Idade
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm ">
                        <input
                          type="number"
                          name={`company_idade`}
                          id={`company_idade`}
                          // onChange={() => handleSubmit(inputRef)}
                          className="border border-gray-500 p-2 flex-1 block w-full h-10  rounded-r-md sm:text-sm "
                          placeholder="..."
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-auto">
                      <label
                        htmlFor="company_website"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Data de Nascimento
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm ">
                        <input
                          type="date"
                          name={`company_date`}
                          id={`company_date`}
                          // onChange={() => handleSubmit(inputRef)}
                          className="border border-gray-500 p-2 flex-1 block w-full h-10  rounded-r-md sm:text-sm  "
                          placeholder="..."
                        />
                      </div>
                    </div>
                  </div>

                  <Input label={"Solicitante"} inputRef={"solicitante"} />
                  <Input label={"Convênio"} inputRef={"convenio"} />
                </div>
              </div>
            </form>
            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <button className="mr-2 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-green-600 hover:text-white bg-white border-green-500 hover:border-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                Reset
              </button>
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>
    </>
  );
}

export default PacientForm;
