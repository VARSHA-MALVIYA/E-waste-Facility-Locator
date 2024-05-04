
const BASEURL = 'https://ebackend-2cdt.onrender.com/api/v1'
// const BASEURL = 'http://localhost:5000/api/v1'


export const Auth = {
    LOGIN : `${BASEURL}/auth/login`,
    SIGNUP : `${BASEURL}/auth/signup`,
}

export const Waste = {
    GET_ALL_CATEGORIES : `${BASEURL}/waste/getEwastesCategory`,
    GET_DEVICES_OF_SELECTED_CATEGORY : `${BASEURL}/waste/getSelectedCategoryWasteInfo`,
    GET_SELECTED_DEVICE_INFO : `${BASEURL}/waste/getDeviceDetails`,
    GET_ALL_DEVICES : `${BASEURL}/waste/getAllDevices`,
    UPDATE_DEVICE_INFO : `${BASEURL}/waste/updateDeviceInfo`,
}

export const Appointment = {
    BOOK_APPOINTMENT : `${BASEURL}/appointment/addAppointment`,
    GET_USER_APPOINTMENTS : `${BASEURL}/appointment/getAppointmentDetails`,
    GET_APPOINTMENT_BY_TICKET_OR_EMAIL : `${BASEURL}/appointment/getAppointmentDetailsByTicketOrEmail`,
    PROCESS_APPOINTMENT : `${BASEURL}/appointment/processAppointment`
}

export const Category = {
    GET_ALL_CATEGORIES : `${BASEURL}/category/getAllCategories`,
}

export const Admin = {
    ADD_EWASTE : `${BASEURL}/admin/add_ewaste`,
    GET_UNAPPROVED_OPERATORS : `${BASEURL}/admin/getUnapprovedOperators`,
    APPROVE_OPERATOR : `${BASEURL}/admin/approveOperator`,
    CONTACT_US : `${BASEURL}/admin/contactUs`,
}

export const EducationalPopup = {
    GET_ALL_EDUCATIONAL_POPUP : `${BASEURL}/educationalPopup/getAllEducationalPopupDetails`,
    ADD_EDUCATIONAL_POPUP : `${BASEURL}/educationalPopup/addEducationalPopup`,
    UPDATE_EDUCATIONAL_POPUP : `${BASEURL}/educationalPopup/updateEducationalPopup`,
}

export const Product = {
    GET_ALL_PRODUCTS : `${BASEURL}/product/getAllProducts`,
}

export const Order = {
    MAKE_ORDER : `${BASEURL}/order/makeOrder`,
    GET_ORDER_BY_USERID : `${BASEURL}/order/getOrderByUserId`,
}


export const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
};