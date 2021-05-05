import React from "react";
import { useCookies } from "react-cookie";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { prevlabAxiosInstace } from "../../../../../../services/prevlabAxios";
import { tableIcons } from "../../../../../iconsTable";

import MaterialTable from "material-table";
import Feedback from "../../../../../FeedBack";
const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

function ConvenioTable() {
  const classes = useStyles();
  const [cookies] = useCookies();
  const [labs, setLabs] = React.useState([]);
  const [feedback, setFeedback] = React.useState({
    open: false,
    type: "success",
    msg: "feedback",
  });

  const getLabs = async () => {
    const { userInfo } = cookies;
    const response = await prevlabAxiosInstace.labs._getLabs(userInfo);
    if (response.data.error) {
      return setFeedback({
        open: true,
        type: "error",
        msg: response.data.msg,
      });
    }

    const userLabs = response.data.filter((el) => el.isAdmin !== true);
    setLabs(userLabs);
  };
  const postLab = async (lab) => {
    const { userInfo } = cookies;
    lab.password = "12345678";
    const response = await prevlabAxiosInstace.labs._postLab(userInfo, lab);
    if (response.data.error) {
      return setFeedback({
        open: true,
        type: "error",
        msg: response.data.msg,
      });
    }
    setFeedback({
      open: true,
      type: "success",
      msg: response.data.msg,
    });
  };
  const deleteLab = async (lab_id) => {
    const { userInfo } = cookies;
    const response = await prevlabAxiosInstace.labs._deleteLab(
      userInfo,
      lab_id
    );
    if (response.data.error) {
      setFeedback({
        open: true,
        type: "error",
        msg: response.data.msg,
      });
    }
    setFeedback({
      open: true,
      type: "success",
      msg: response.data.msg,
    });
  };
  const editLab = async (lab_id, params) => {
    const { userInfo } = cookies;
    const response = await prevlabAxiosInstace.labs._editLab(
      userInfo,
      lab_id,
      params
    );
    if (response.data.error) {
      setFeedback({
        open: true,
        type: "error",
        msg: response.data.msg,
      });
    }
    setFeedback({
      open: true,
      type: "success",
      msg: response.data.msg,
    });
  };

  React.useEffect(() => {
    getLabs();
  }, []);

  return (
    <Container maxWidth="md">
      <Feedback obj={feedback} close={setFeedback} />

      <MaterialTable
        title="Labs/Convênios"
        icons={tableIcons}
        columns={[
          { title: "CPF/CNPJ", field: "cnpj", initialEditValue: "" },
          {
            title: "Email",
            field: "email",
            validate: (rowData) => rowData.name !== "",
            initialEditValue: "exemple@exemple.com",
          },

          {
            title: "Convenio",
            field: "convenio",
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

export default ConvenioTable;
