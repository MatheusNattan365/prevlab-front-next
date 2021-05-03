import React from "react";
import { useCookies } from "react-cookie";
import { Container } from "@material-ui/core";
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

function LabTable() {
  const classes = useStyles();
  const [cookies] = useCookies();
  const [labs, setLabs] = React.useState([]);
  const handleClose = () => {
    setOpenLabTable(false);
  };

  const getLabs = async () => {
    const { userInfo } = cookies;
    const response = await prevlabAxiosInstace.labs._getLabs(userInfo);
    if (!response.data) {
      return;
    }
    setLabs(response.data);
  };

  const postLab = async (lab) => {
    const { userInfo } = cookies;
    const response = await prevlabAxiosInstace.labs._postLab(userInfo, lab);
  };
  const deleteLab = async (lab_id) => {
    const { userInfo } = cookies;
    const response = await prevlabAxiosInstace.labs._deleteLab(
      userInfo,
      lab_id
    );
  };
  const editLab = async (lab_id, params) => {
    const { userInfo } = cookies;
    const response = await prevlabAxiosInstace.labs._editLab(
      userInfo,
      lab_id,
      params
    );
  };

  React.useEffect(() => {
    getLabs();
  }, []);
  return (
    <Container maxWidth="md">
      <MaterialTable
        title="Laboratórios"
        icons={tableIcons}
        columns={[
          { title: "CPF/CNPJ", field: "cnpj", initialEditValue: "" },
          {
            title: "Nome",
            field: "name",
            validate: (rowData) => rowData.name !== "",
            initialEditValue: "Lab",
          },
          {
            title: "Telefone",
            field: "phone",
            initialEditValue: "",
          },
        ]}
        data={labs}
        editable={{
          onRowAdd: (newData) =>
            new Promise((resolve, reject) => {
              setTimeout(async () => {
                setLabs([...labs, newData]);
                await postLab(newData);
                resolve();
              }, 1000);
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(async () => {
                const dataUpdate = [...labs];
                const index = oldData.tableData.id;
                dataUpdate[index] = newData;
                setLabs([...dataUpdate]);
                await editLab(oldData._id, newData);
                resolve();
              }, 1000);
            }),
          onRowDelete: (oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(async () => {
                const dataDelete = [...labs];
                const index = oldData.tableData.id;
                dataDelete.splice(index, 1);
                setLabs([...dataDelete]);
                await deleteLab(oldData._id);
                resolve();
              }, 1000);
            }),
        }}
        options={{
          actionsColumnIndex: -1,
        }}
      />
    </Container>
  );
}

export default LabTable;
