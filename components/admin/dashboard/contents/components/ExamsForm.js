import React from "react";

// import { Container } from './styles';

function ExamsForm() {
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
                Cadastro de Exames
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
                  <div className="grid grid-cols-auto">
                    <label
                      htmlFor="company_website"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Data da coleta
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

                  <div className="grid grid-cols-auto">
                    <label
                      htmlFor="company_website"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Avaliação da amostra:
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm ">
                      <input
                        name={`company_amostra`}
                        id={`company_amostra`}
                        list="avaliacaoAmostra"
                        class="w-full border bg-white rounded px-3 py-2 h-10 outline-none"
                      />
                      <datalist id="avaliacaoAmostra">
                        <option value="Satisfatória" />
                        <option value="Insatisfatória" />
                        <option
                          value="Satisfatória; Ausência de componentes endocervicais /
                          zona de transformação"
                        />
                      </datalist>
                    </div>
                  </div>

                  <div className="grid grid-cols-auto">
                    <label
                      htmlFor="company_website"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Células não epiteliais:
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm ">
                      <input
                        name={`company_dominante`}
                        id={`company_dominante`}
                        list="descDominante"
                        class="w-full border bg-white rounded px-3 py-2 h-10 outline-none"
                      />
                      <datalist id="descDominante">
                        <option value="Pouquíssimos polimorfonucleares neutrófilos" />
                        <option value="Poucos polimorfonucleares neutrófilos" />
                        <option value="Poucos polimorfonucleares neutrófilos e histiócitos" />
                        <option value="Moderados polimorfonucleares neutrófilos e histiócitos" />
                        <option value="Moderados polimorfonucleares neutrófilos e histiócitos" />
                        <option value="Muitos polimorfonucleares neutrófilos e histiócitos" />
                        <option value="Muitos polimorfonucleares neutrófilos e histiócitos" />
                        <option value="Frequentes polimorfonucleares neutrófilos e histiócitos" />
                      </datalist>
                    </div>
                  </div>

                  <div className="grid grid-cols-auto">
                    <label
                      htmlFor="company_website"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Descamação dominante:
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm ">
                      <input
                        name={`company_dominante`}
                        id={`company_dominante`}
                        list="descDominante"
                        class="w-full border bg-white rounded px-3 py-2 h-10 outline-none"
                      />
                      <datalist id="descDominante">
                        <option value="Células superficiais e intermediárias" />
                        <option
                          value="Células superficiais, intermediárias e algumas
                          profundas"
                        />
                        <option value="Células superficiais, intermediárias e profundas" />
                        <option value="Células intermediárias" />
                        <option value="Células profundas" />
                      </datalist>
                    </div>
                  </div>

                  <div className="grid grid-cols-auto">
                    <label
                      htmlFor="company_website"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Alterações celulares:
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm ">
                      <input
                        name={`company_alteracoes`}
                        id={`company_alteracoes`}
                        list="alteracoesCelulares"
                        class="w-full border bg-white rounded px-3 py-2 h-10 outline-none"
                      />
                      <datalist id="alteracoesCelulares">
                        <option value="xxxxxxxxxxxxx-xxxxxxxxxxxxx" />
                      </datalist>
                    </div>
                  </div>

                  <div className="grid grid-cols-auto">
                    <label
                      htmlFor="company_website"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Células metaplásicas:
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm ">
                      <input
                        name={`company_metaplasicas`}
                        id={`company_metaplasicas`}
                        list="celulasMetaplasicas"
                        class="w-full border bg-white rounded px-3 py-2 h-10 outline-none"
                      />
                      <datalist id="celulasMetaplasicas">
                        <option value="Ausentes" />
                        <option value="Metaplasia imatura" />
                        <option value="Metaplasia escamosa em maturação" />
                      </datalist>
                    </div>
                  </div>

                  <div className="grid grid-cols-auto">
                    <label
                      htmlFor="company_website"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Células endocervicais:
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm ">
                      <input
                        name={`company_endocervicais`}
                        id={`company_endocervicais`}
                        list="celulasEndocervicais"
                        class="w-full border bg-white rounded px-3 py-2 h-10 outline-none"
                      />
                      <datalist id="celulasEndocervicais">
                        <option value="Reativas" />
                        <option value="Ausentes" />
                        <option value="Típicas" />
                        <option value="Típicas" />
                        <option value="Atípicas" />
                        <option value="Não visualizada" />
                      </datalist>
                    </div>
                  </div>

                  <div className="grid grid-cols-auto">
                    <label
                      htmlFor="company_website"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Células endometriais:
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm ">
                      <input
                        name={`company_endometriais`}
                        id={`company_endometriais`}
                        list="celulasEndometriais"
                        class="w-full border bg-white rounded px-3 py-2 h-10 outline-none"
                      />
                      <datalist id="celulasEndometriais">
                        <option value="Ausentes" />
                      </datalist>
                    </div>
                  </div>

                  <div className="grid grid-cols-auto">
                    <label
                      htmlFor="company_website"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Flora vaginal:
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm ">
                      <input
                        name={`company_flora`}
                        id={`company_flora`}
                        list="floraVaginal"
                        class="w-full border bg-white rounded px-3 py-2 h-10 outline-none"
                      />
                      <datalist id="floraVaginal">
                        <option value="Lactobacilos" />
                        <option value="Bacilos" />
                        <option value="Cocos" />
                        <option value="Lactobacilos e bacilos" />
                        <option value="Bacilos e cocos" />
                        <option value="Lactobacilos e cocos" />
                        <option value="Fungos morfologicamente com cândida sp" />
                        <option value="Organismos semelhantes a Trichomonas Vaginalis" />
                        <option value="Bacilos supracitoplasmáticos sugestivos de Gardnerella vaginalis" />
                      </datalist>
                    </div>
                  </div>

                  <div className="grid grid-cols-auto">
                    <label
                      htmlFor="company_website"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Flora vaginal:
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm ">
                      <input
                        name={`company_especificos`}
                        id={`company_especificos`}
                        list="agentesEspecificos"
                        class="w-full border bg-white rounded px-3 py-2 h-10 outline-none"
                      />
                      <datalist id="agentesEspecificos">
                        <option value="Não visualizados" />
                        <option value="Efeito citopático pelo HPV" />
                      </datalist>
                    </div>
                  </div>

                  <div className="grid grid-cols-auto">
                    <label
                      htmlFor="company_website"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Cítolise:
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm ">
                      <input
                        name={`company_citolise`}
                        id={`company_citolise`}
                        list="citolise"
                        class="w-full border bg-white rounded px-3 py-2 h-10 outline-none"
                      />
                      <datalist id="citolise">
                        <option value="Citolise leve" />
                        <option value="Citolise moderada" />
                        <option value="Citolise intensa" />
                      </datalist>
                    </div>
                  </div>

                  <div className="grid grid-cols-auto">
                    <label
                      htmlFor="company_website"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Conclusão:
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm ">
                      <input
                        name={`company_conclusao`}
                        id={`company_conclusao`}
                        list="conclusao"
                        class="w-full border bg-white rounded px-3 py-2 h-10 outline-none"
                      />
                      <datalist id="conclusao">
                        <option value="Negativo para lesão intra-epitelial ou malignidade no material examinado (Bethesda 2014)" />
                        <option value="Atipias de significado indeterminado em células escamosas, possivelmente não neoplásicas." />
                        <option value="Atipias de significado indeterminado em células escamosas, não se pode afastar lesão de alto grau." />
                        <option value="Lesão intra-epitelial de baixo grau." />
                        <option value="Lesão intra-epitelial de alto grau." />
                      </datalist>
                    </div>
                  </div>

                  <div className="grid grid-cols-auto">
                    <label
                      htmlFor="company_website"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Observações:
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm ">
                      <input
                        name={`company_observacoes`}
                        id={`company_observacoes`}
                        list="observacoes"
                        class="w-full border bg-white rounded px-3 py-2 h-10 outline-none"
                      />
                      <datalist id="observacoes">
                        <option value="Obs: Sugere-se acompanhamento do processo metaplásico" />
                        <option value="Obs: Sugere-se repetir citologia em seis meses" />
                        <option value="Obs: Sugere-se colposcopia com biópsia para melhor esclarecimento" />
                        <option value="Obs: Esfregaço atrófico" />
                      </datalist>
                    </div>
                  </div>
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

export default ExamsForm;
