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
      const getPatientsResponse = await axios.post(
        "/private/admin/app/exams/newexam",
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
  },
};
