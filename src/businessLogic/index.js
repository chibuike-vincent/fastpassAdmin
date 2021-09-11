import api from "../api";
import { ShowMessage, type } from "../components/Toaster";


export const AdminSignUp = async (payload) => {
  try {
    const response = await api.post("/admin/signup", payload);
    console.log(response, "response")
    const {token, message} = response.data
    if (token) {
      localStorage.setItem("token", token);
      return response
      
      
    } else {
      const err = response.data.error ? response.data.error : response.data;
      ShowMessage(type.ERROR, err);
    }
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

export const adminLogin = async (payload) => {
  try {
    const response = await api.post("/admin/login", payload);
    const { accessToken, message, user } = response.data;
  
    if (accessToken) {
      localStorage.setItem("token", accessToken);
      return {
        data: {
          user,
          message,
        },
      };
    } else {
      const err = response.data.error ? response.data.error : response.data;
      console.log(err)
      ShowMessage(type.ERROR, err);
    }
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

export const forgortPassword = async (email) => {
  try {
    const response = await api.post(`/admin/forgotpassword`, email);

    if (response.data.includes("Error")) {
      ShowMessage(type.ERROR, response.data.split(":")[1]);
    } else {
      ShowMessage(type.DONE, response.data);
    }

    return response;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

export const resetPassword = async (payload) => {
  try {
    const response = await api.post(`/admin/resetpassword`, payload);
    return response
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

export const changePassword = async (payload) => {
  try {
    const response = await api.post("/admin/changepassword", payload);
    return response.data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};


export const AdminCreatTenant = async (payload) => {
  try {
    const response = await api.post(`/admin/create_tenant`, payload);
    console.log(response, "rrrrrr")
    return response;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

export const AdminCreateSecurity = async (payload) => {
  try {
    const response = await api.post(`/admin/create_security`, payload);
    console.log(response, "rrrrrr")
    return response;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

export const getUsers = async (sortVal) => {
  try {
    const response = await api.get(`/admin/getUsers?sortBy=${sortVal}`);
    return response;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

export const AdminDeleteUser = async (payload) => {
  try {
    const response = await api.post(`/admin/deletUser`, payload);
    return response;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

export const getCurrentUser = async () => {
  try {
    const response = await api.get(`/admin/currentUser`);
    console.log(response, "response")
    return response;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

export const AdminCreateOrganization = async (payload) => {
  try {
    const response = await api.post(`/organization/create`, payload);
    return response;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};