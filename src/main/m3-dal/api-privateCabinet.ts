import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://74b4c0c0-430e-4369-be6b-35ba597c800d.mock.pstmn.io',
});

export const companyInformation = {
  setCompanyData(isCompanyInformation: TypeCompaniInformation) {
    return instance.put('/putCompanyData', isCompanyInformation);
  },

  getCompanyData() {
    return instance.get('/getCompanyData');
  },
};

export const profileInformation = {
  setProfileDate(isProfileInformation: TypeProfileInformation) {
    return instance.put('/putProfileData', isProfileInformation);
  },

  getProfileDate() {
    return instance.get('/getProfileData');
  },
};

export const changePassword = {
  setPassword(isPassword: TypeIsPassword) {
    return instance.put('/putChengePassword', isPassword)
  },
};

export const emailNotification = {
  isNotification(emailNotification: TypeEmailNotification) {
      return instance.put('/putEmailNotification', emailNotification)
  },
};

export const deleteProfile = {
  delete(id: string) {
    return instance.delete(`/putEmailNotification${id}`)
  },
};

type TypeCompaniInformation = {
  companyName: string;
  businessLocation: string;
  city: string;
  streetAdress: string;
  postalCode: string;
  webSite: string;
  about: string;
};

type TypeProfileInformation = {
  firstName: string;
  lastName: string;
  country: string;
  departmant: string;
  jobTitle: string;
  languageSpoken: string;
  phone: number;
  currency: string;
};

type TypeIsPassword = {
    currentPassword: string, 
    newPassword: string
};

type TypeEmailNotification = {
    isNewMessage: boolean, 
    isNewShippingPosted: boolean
}