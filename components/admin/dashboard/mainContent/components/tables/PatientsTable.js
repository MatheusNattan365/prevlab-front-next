import React from "react";
import { useCookies } from "react-cookie";
import { Container, Backdrop } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { prevlabAxiosInstace } from "../../../../../../services/prevlabAxios";
import MaterialTable from "material-table";
import { tableIcons } from "../../../../../iconsTable";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

function PatientTable({ setPatient, openBackdropTable, setOpenBackdropTable }) {
  const classes = useStyles();
  const [cookies] = useCookies();
  const [patients, setPatients] = React.useState([]);

  const getPatients = async () => {
    const { userInfo } = cookies;
    const response = await prevlabAxiosInstace.patients._getPatients(userInfo);
    if (response.data === null || !response.data) {
      return;
    }
    setPatients(response.data);
  };

  React.useEffect(() => {
    getPatients();
  }, [openBackdropTable]);
  return (
    <Backdrop className={classes.backdrop} open={openBackdropTable}>
      <Container maxWidth="md">
        <MaterialTable
          title="Pacientes"
          icons={tableIcons}
          columns={[
            {
              title: "Nome",
              field: "fullName",
            },
            {
              title: "Data de Nascimento",
              field: "bornDate",
            },
            {
              title: "Solicitante",
              field: "solicitante",
            },
          ]}
          data={patients}
          options={{
            actionsColumnIndex: -1,
          }}
          onRowClick={async (evt, selectedRow) => {
            setPatient(selectedRow);
            setOpenBackdropTable(false);
          }}
        />
      </Container>
    </Backdrop>
  );
}

export default PatientTable;
