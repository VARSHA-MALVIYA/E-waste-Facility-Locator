
const BASEURL = 'http://localhost:5000/api/v1'


export const Auth = {
    LOGIN : `${BASEURL}/auth/login`,
    SIGNUP : `${BASEURL}/auth/signup`,
}

export const Waste = {
    GET_ALL_CATEGORIES : `${BASEURL}/waste/getEwastesCategory`,
    GET_DEVICES_OF_SELECTED_CATEGORY : `${BASEURL}/waste/getSelectedCategoryWasteInfo`,
    GET_SELECTED_DEVICE_INFO : `${BASEURL}/waste/getDeviceDetails`,
}


export const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
};