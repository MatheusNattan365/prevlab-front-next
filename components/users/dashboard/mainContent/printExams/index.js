import React from "react";
import { useCookies } from "react-cookie";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MaterialTable from "material-table";
import { prevlabAxiosInstace } from "../../../../../services/prevlabAxios";
import { tableIcons } from "../../../../iconsTable";
import Feedback from "../../../../FeedBack";
import { JSPDF } from "../../../../../services/jsPDF";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

function ReportTable() {
  const classes = useStyles();
  const [cookies] = useCookies();
  const [patients, setPatients] = React.useState([]);
  const [update, setUpdate] = React.useState(false);
  const [feedback, setFeedback] = React.useState({
    open: false,
    type: "success",
    msg: "feedback",
  });

  const getPatients = async () => {
    const { userInfo } = cookies;
    const response = await prevlabAxiosInstace.users._getPatientsAlloweds(
      userInfo
    );
    if (response.data.error) {
      return setFeedback({
        open: true,
        type: "error",
        msg: response.data.msg,
      });
    }
    setPatients(response.data);
    return { data: response.data };
  };

  const printLaudo = async (patient) => {
    const { userInfo } = cookies;
    const { _id } = patient;

    const examResponse = await prevlabAxiosInstace.users._getExam(
      userInfo,
      _id
    );
    if (examResponse.data.error) {
      return setFeedback({
        open: true,
        type: "error",
        msg: response.data.msg,
      });
    }
    return JSPDF.gerarDocNew(patient, examResponse.data);
  };

  React.useEffect(() => {
    getPatients();
  }, [update]);

  return (
    <Container maxWidth="lg">
      <Feedback obj={feedback} close={setFeedback} />
      <MaterialTable
        title="Relatórios"
        icons={tableIcons}
        columns={[
          {
            title: "Nome",
            field: "fullName",
          },

          {
            title: "Solicitante",
            field: "solicitante",
          },
          {
            title: "Convênio",
            field: "convenio",
          },
          {
            title: "Liberado em",
            field: "allowedDate",
          },
        ]}
        data={patients}
        actions={[
          (rowData) => ({
            icon: tableIcons.Print,
            tooltip: "Imprimir",
            onClick: (event, rowData) => printLaudo(rowData),
          }),
        ]}
        options={{
          actionsColumnIndex: -1,
        }}
      />
    </Container>
  );
}

export default ReportTable;
