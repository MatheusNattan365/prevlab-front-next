import React from "react";

import ConvenioTable from "./tables/ConvenioTable";

function PacientForm() {
  const [openLabTable, setOpenLabTable] = React.useState(false);

  return (
    <>
      <div>
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Cadastro de Laboratórios/Convênios
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                {`
                Os laboratórios serão referenciados no campo do 
                convênio do paciente e, após a liberação do exame,
                 o laboratório poderá fazer o download
                impressão dos exames liberados.`}
              </p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <ConvenioTable />
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
