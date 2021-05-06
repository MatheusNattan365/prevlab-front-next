import { axios } from "./axiosConfig";

export const prevlabAxiosInstace = {
  auth: {
    _login: async (email, password) => {
      try {
        const loginResponse = await axios.post("/public/auth/login", {
          email,
          password,
        });

        return loginResponse;
      } catch (error) {
        console.log(error);
      }
    },
    _adminLogin: async (email, password) => {
      try {
        const loginResponse = await axios.post("/public/auth/adminlogin", {
          email,
          password,
        });
        return loginResponse;
      } catch (error) {
        console.log(error);
      }
    },
  },
  labs: {
    _getLabs: async (userToken) => {
      const getLabsResponse = await axios.get(
        "/private/admin/app/laboratories/labs",
        {
          headers: {
            Authorization: userToken,
          },
        }
      );
      return getLabsResponse;
    },
    _editLab: async (userToken, lab_id, params) => {
      const getLabsResponse = await axios.put(
        `/private/admin/app/laboratories/${lab_id}/updatelab`,
        {
          ...params,
        },
        {
          headers: {
            Authorization: userToken,
          },
        }
      );
      console.log(getLabsResponse);
      return getLabsResponse;
    },
    _postLab: async (userToken, lab) => {
      const getLabsResponse = await axios.post(
        "/private/admin/app/laboratories/newlab",
        { ...lab },
        {
          headers: {
            Authorization: userToken,
          },
        }
      );
      console.log(getLabsResponse);
      return getLabsResponse;
    },
    _deleteLab: async (userToken, lab_id) => {
      const getLabsResponse = await axios.delete(
        `/private/admin/app/laboratories/${lab_id}/deletelab`,
        {
          headers: {
            Authorization: userToken,
          },
        }
      );
      console.log(getLabsResponse);
      return getLabsResponse;
    },
  },
  patients: {
    _getPatients: async (userToken) => {
      const getPatientsResponse = await axios.get(
        "/private/admin/app/patients/all",
        {
          headers: {
            Authorization: userToken,
          },
        }
      );
      return getPatientsResponse;
    },
    _postPatient: async (userToken, patient) => {
      const getPatientsResponse = await axios.post(
        "/private/admin/app/patients/newpatient",
        {
          ...patient,
        },
        {
          headers: {
            Authorization: userToken,
          },
        }
      );
      console.log(getPatientsResponse);
      return getPatientsResponse;
    },
    _putPatient: async (userToken, patient) => {
      const { _id } = patient;
      const getPatientsResponse = await axios.put(
        `/private/admin/app/patients/${_id}/updatepatient`,
        {
          ...patient,
        },
        {
          headers: {
            Authorization: userToken,
          },
        }
      );
      console.log(getPatientsResponse);
      return getPatientsResponse;
    },
    _deletePatient: async (userToken, patient_id) => {
      const getPatientsResponse = await axios.delete(
        `/private/admin/app/patients/${patient_id}/deletepatient`,

        {
          headers: {
            Authorization: userToken,
          },
        }
      );
      console.log(getPatientsResponse);
      return getPatientsResponse;
    },
  },
  exams: {
    _postExam: async (userToken, exam) => {
      const { _id } = exam;
      console.log(exam);
      const getPatientsResponse = await axios[!_id ? "post" : "put"](
        `/private/admin/app/exams/${!_id ? "newexam" : `${_id}/updateexam`}`,
        {
          ...exam,
        },
        {
          headers: {
            Authorization: userToken,
          },
        }
      );
      console.log(getPatientsResponse);
      return getPatientsResponse;
    },
    _getExam: async (userToken, pacient_id) => {
      const getPatientsResponse = await axios.get(
        `/private/admin/app/exams/all/${pacient_id}`,
        {
          headers: {
            Authorization: userToken,
          },
        }
      );
      console.log(getPatientsResponse);
      return getPatientsResponse;
    },
  },
  users: {
    _getPatientsAlloweds: async (userToken) => {
      try {
        const getAllowedsResponse = await axios.get(`/public/app/alloweds`, {
          headers: {
            Authorization: userToken,
          },
        });
        console.log(getAllowedsResponse);
        return getAllowedsResponse;
      } catch (error) {
        console.log(error);
      }
    },
    _getExam: async (userToken, patient_id) => {
      try {
        const getAllowedsResponse = await axios.get(
          `/public/app/exam?_id=${patient_id}`,
          {
            headers: {
              Authorization: userToken,
            },
          }
        );
        console.log(getAllowedsResponse);
        return getAllowedsResponse;
      } catch (error) {}
    },
  },
};
