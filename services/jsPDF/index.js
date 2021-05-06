import jsPDF from "jspdf";
import QRCode from "qrcode.react";

const assinatura_ana = "/ANA_ASS.png";
const prevlab = "/PREVLAB.jpeg";
export const JSPDF = {
  gerarDocOld(object) {
    let doc = new jsPDF();

    let titulo = 10;
    let conteudo = 10;
    let margemEsquerda = 15;

    function datas(value) {
      let dataCerta =
        value.charAt(8) +
        value.charAt(9) +
        "/" +
        value.charAt(5) +
        value.charAt(6) +
        "/" +
        value.charAt(0) +
        value.charAt(1) +
        value.charAt(2) +
        value.charAt(3);
      return dataCerta;
    }

    function RetornaDataHoraAtual() {
      var dNow = new Date();
      var localdate =
        dNow.getDate() +
        "/" +
        (dNow.getMonth() + 1) +
        "/" +
        dNow.getFullYear() +
        " " +
        dNow.getHours() +
        ":" +
        dNow.getMinutes();
      return localdate;
    }

    const LocalizationTitle = [90, 102, 114, 126, 138, 150, 162, 174, 186, 198];
    const LocalizationSubTitle = [
      94,
      106,
      118,
      130,
      142,
      154,
      166,
      178,
      190,
      202,
    ];

    doc.setFontSize(8);
    doc.text(`${object.nome}`, 46.5, 30);
    doc.text(`${object.idade}`, 152.5, 30);

    doc.text(`${object.solicitante}`, 62, 39);
    doc.setFontSize(8);
    doc.text(`${object.id}`, 159.5, 39);

    doc.setFontSize(8);
    doc.text(`${object.convenio}`, 55, 49);
    doc.text(`${datas(object.dataDaColeta)}`, 151.5, 49);

    doc.setFontSize(16);
    doc.text(`Colpocitologia Oncótica`, 75, 70);

    doc.setFontSize(titulo);
    doc.text(`AVALIAÇÃO DA AMOSTRA:`, margemEsquerda, LocalizationTitle[0]); // 80
    doc.setFontSize(conteudo);
    doc.text(`${object.ada}`, margemEsquerda, LocalizationSubTitle[0]); // 85

    doc.setFontSize(titulo);
    doc.text(`CÉLULAS NÃO EPITELIAIS:`, margemEsquerda, LocalizationTitle[1]);
    doc.setFontSize(conteudo);
    doc.text(`${object.cne}`, margemEsquerda, LocalizationSubTitle[1]);

    doc.setFontSize(titulo);
    doc.text(`DESCAMAÇÃO DOMINANTE:`, margemEsquerda, LocalizationTitle[2]);
    doc.setFontSize(conteudo);
    doc.text(`${object.dd}`, margemEsquerda, LocalizationSubTitle[2]);

    doc.setFontSize(titulo);
    doc.text(`ALTERAÇÕES CELULARES:`, margemEsquerda, LocalizationTitle[3]);
    doc.setFontSize(conteudo);
    doc.text(`${object.ac}`, margemEsquerda, LocalizationSubTitle[3]);

    doc.setFontSize(titulo);
    doc.text(`CÉLULAS METAPLÁSICAS:`, margemEsquerda, LocalizationTitle[4]);
    doc.setFontSize(conteudo);
    doc.text(`${object.cm}`, margemEsquerda, LocalizationSubTitle[4]);

    doc.setFontSize(titulo);
    doc.text(`CÉLULAS ENDOCERVICAIS:`, margemEsquerda, LocalizationTitle[5]);
    doc.setFontSize(conteudo);
    doc.text(`${object.ce}`, margemEsquerda, LocalizationSubTitle[5]);

    doc.setFontSize(titulo);
    doc.text(`CÉLULAS ENDOMETRIAIS:`, margemEsquerda, LocalizationTitle[6]);
    doc.setFontSize(conteudo);
    doc.text(`${object.cem}`, margemEsquerda, LocalizationSubTitle[6]);

    doc.setFontSize(titulo);
    doc.text(`FLORA VAGINAL:`, margemEsquerda, LocalizationTitle[7]);
    doc.setFontSize(conteudo);
    doc.text(`${object.fv}`, margemEsquerda, LocalizationSubTitle[7]);

    doc.setFontSize(titulo);
    doc.text(`AGENTES ESPECÍFICOS:`, margemEsquerda, LocalizationTitle[8]);
    doc.setFontSize(conteudo);
    doc.text(`${object.ae}`, margemEsquerda, LocalizationSubTitle[8]);

    doc.setFontSize(titulo);
    doc.text(`CONCLUSÃO:`, margemEsquerda, LocalizationTitle[9]); // 215
    doc.setFontSize(conteudo);
    doc.text(`${object.cit}`, 20, LocalizationSubTitle[9]); // 220
    doc.text(
      `${object.conclusaoObs}`,
      20,
      object.cit ? LocalizationSubTitle[9] + 4 : LocalizationSubTitle[9]
    ); // 220
    doc.text(
      `${object.conclusao}`,
      20,
      object.cit
        ? object.conclusaoObs
          ? LocalizationSubTitle[9] + 8
          : LocalizationSubTitle[9] + 4
        : LocalizationSubTitle[9] + 4
    ); // 220

    doc.setFontSize(8);
    doc.text(`Dra. ANA KARLA LUCAS DE OLIVEIRA`, 25, 240);
    doc.text(`CITOLOGISTA`, 40, 243);
    doc.text(`CRF-PB 2611`, 41, 246);
    doc.text(`ESPERANÇA - PB`, 100, 240);
    doc.text(`${RetornaDataHoraAtual()}`, 165, 240);

    doc.line(20, 236, 190, 236);

    doc.save(`${object.nome}.pdf`);
  },
  gerarDocNew: (patient, exam) => {
    // You'll need to make your image into a Data URL
    // Use http://dataurl.net/#dataurlmaker
    const doc = new jsPDF();

    doc.addImage(prevlab, "JPEG", 20, 15, 55, 30);
    // Black sqaure with rounded corners
    doc.setFont("courier", "normal");
    doc.setFontSize(8);
    doc.text("NOME:", 85, 30);

    doc.setFont("courier", "normal");
    doc.text("..........", 93.5, 30);
    doc.setFont("courier", "bold");
    doc.text(patient.fullName, 115, 30);

    doc.setFont("courier", "normal");
    doc.text("REQUISITANTE:", 85, 35);
    doc.setFont("courier", "bold");
    doc.text(112.5, 35, ".");
    doc.text(patient.solicitante, 115, 35);

    doc.setFont("courier", "normal");
    doc.text(85, 40, "CONVÊNIO:");

    doc.setFont("courier", "bold");
    doc.text(104, 40, ".....");
    doc.text(patient.convenio, 115, 40);

    doc.setFont("courier", "normal");
    doc.text(85, 45, "IDADE:");

    doc.setFont("courier", "bold");
    doc.text(97.7, 45, "........");
    doc.text(patient.age.toString() + " anos", 115, 45);

    doc.setFont("courier", "normal");
    doc.text(85, 50, "DATA:");

    doc.setFont("courier", "bold");
    doc.text(95.7, 50, ".........");

    doc.text(new Date(exam.collectDate).toLocaleDateString(), 115, 50);

    doc.setLineWidth(1);
    doc.setFont("courier", "normal");
    doc.setFontSize(10);
    doc.text(
      "-----------------------------------------------------------------------",
      15,
      59
    );
    doc.line(15, 60, 195, 60);

    doc.setFontSize(15);

    doc.text("COLPOCITOLOGIA ONCÓTICA", 70, 70);

    doc.setFontSize(10);

    doc.setFont("courier", "bold");
    doc.text(`AVALIAÇÃO DA AMOSTRA:`, 15, 85);

    doc.setFont("courier", "normal");
    doc.setFontSize(8);
    doc.text(exam.avaliacaoDaAmostra, 15, 89);

    doc.setFontSize(10);

    doc.setFont("courier", "bold");
    doc.text(`CÉLULAS NÃO EPITELIAIS:`, 15, 97);

    doc.setFont("courier", "normal");
    doc.setFontSize(8);
    doc.text(exam.celulaNaoEpiteliais, 15, 101);

    doc.setFontSize(10);

    doc.setFont("courier", "bold");
    doc.text(`DESCAMAÇÃO DOMINANTE:`, 15, 109);

    doc.setFont("courier", "normal");
    doc.setFontSize(8);
    doc.text(exam.descamacaoDominante, 15, 113);

    doc.setFontSize(10);

    doc.setFont("courier", "bold");
    doc.text(`ALTERAÇÕES CELULARES:`, 15, 121);

    doc.setFont("courier", "normal");
    doc.setFontSize(8);
    doc.text(exam.alteracoesCelulares, 15, 125);

    doc.setFontSize(10);

    doc.setFont("courier", "bold");
    doc.text(`CÉLULAS METAPLÁSICAS:`, 15, 133);

    doc.setFont("courier", "normal");
    doc.setFontSize(8);
    doc.text(exam.celulasMetaplasicas, 15, 138);

    doc.setFontSize(10);

    doc.setFont("courier", "bold");
    doc.text(`CÉLULAS ENDOCERVICAIS:`, 15, 145);

    doc.setFont("courier", "normal");
    doc.setFontSize(8);
    doc.text(exam.celulasEndocervicais, 15, 149);

    doc.setFontSize(10);

    doc.setFont("courier", "bold");
    doc.text(`CÉLULAS ENDOMETRIAIS:`, 15, 157);

    doc.setFont("courier", "normal");
    doc.setFontSize(8);
    doc.text(exam.celulasEndometriais, 15, 161);

    doc.setFontSize(10);

    doc.setFont("courier", "bold");
    doc.text(`FLORA VAGINAL:`, 15, 169);

    doc.setFont("courier", "normal");
    doc.setFontSize(8);
    doc.text(`${exam.floraVaginal.split(";")[0]}`, 15, 173);
    doc.text(`${exam.floraVaginal.split(";")[1] || ""}`, 15, 176);

    doc.setFontSize(10);
    doc.setFont("courier", "bold");
    doc.text(`AGENTES ESPECÍFICOS:`, 15, 181);
    doc.setFont("courier", "normal");
    doc.setFontSize(8);
    doc.text(exam.agentesEspecificos, 15, 186);

    doc.setFontSize(10);
    doc.setFont("courier", "bold");
    doc.text(`CONCLUSÃO:`, 15, 193);
    doc.setFont("courier", "normal");
    doc.setFontSize(8);
    doc.text(exam.citolise, 15, 197);
    doc.text(exam.conclusao, 15, exam.citolise ? 201 : 197);
    doc.text(exam.observacoes, 15, exam.citolise ? 205 : 201);

    doc.setFontSize(8);
    doc.text(`Dra. ANA KARLA LUCAS DE OLIVEIRA`, 25, 238);
    doc.text(`CRF-PB 2611`, 40, 244);
    doc.text(`CITOLOGISTA`, 40, 241);
    doc.text(`ESPERANÇA - PB`, 100, 238);
    doc.text(new Date().toLocaleDateString(), 165, 238);

    doc.setLineWidth(0.5);
    doc.addImage(assinatura_ana, "PNG", 30, 218, 40, 40);
    doc.line(15, 235, 195, 235);

    doc.setFontSize(10);
    doc.setLineWidth(1);
    doc.setFont("courier", "normal");
    doc.text(
      "-----------------------------------------------------------------------",
      15,
      263
    );
    doc.line(15, 260, 195, 260);

    doc.setFontSize(8);

    doc.setFont("courier", "bold");
    doc.text("LABORATÓRIO DE CITOLOGIA - PREVLAB", 20, 267);

    doc.setFont("courier", "normal");
    doc.text("Pc. da Cultura, nº 511, Sala-A Centro", 20, 271);
    doc.text("CEP: 58135-000 Esperança-PB", 20, 274);
    doc.text("Tel: (83) 9 9146-2391.", 20, 277);
    doc.save(`${patient.fullName}.pdf`);
  },
};
