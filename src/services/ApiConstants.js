
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

export const Appointment = {
    BOOK_APPOINTMENT : `${BASEURL}/appointment/addAppointment`,
    GET_USER_APPOINTMENTS : `${BASEURL}/appointment/getAppointmentDetails`,
    GET_APPOINTMENT_BY_TICKET_OR_EMAIL : `${BASEURL}/appointment/getAppointmentDetailsByTicketOrEmail`
}

export const Category = {
    GET_ALL_CATEGORIES : `${BASEURL}/category/getAllCategories`,
}

export const Admin = {
    GET_UNAPPROVED_OPERATORS : `${BASEURL}/admin/getUnapprovedOperators`,
    APPROVE_OPERATOR : `${BASEURL}/admin/approveOperator`
}

export const EducationalPopup = {
    ADD_EDUCATIONAL_POPUP : `${BASEURL}/educationalPopup/addEducationalPopup`
}


export const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
};