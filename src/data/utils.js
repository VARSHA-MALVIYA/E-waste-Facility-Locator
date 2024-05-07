import { toast } from "react-toastify";

export function formatDate(dateString) {
    // Extracting day, month, and year from the date object
    var date = new Date(dateString);
    var day = date.getDate();
    var month = date.getMonth() + 1; // Months are zero indexed
    var year = date.getFullYear();

    // Adding leading zeros if necessary
    if (day < 10) {
        day = '0' + day;
    }
    if (month < 10) {
        month = '0' + month;
    }

    // Returning the formatted date string
    return day + '/' + month + '/' + year;
}

export function validateDate(selectedDate)
{
    const currentDate = new Date();
    selectedDate = new Date(selectedDate);

    if(selectedDate < currentDate)
    {
        toast.error("Please select a valid date",{position:'top-center',autoClose:2000,hideProgressBar:true,closeButton:false})
        return false
    }

    return true;
}