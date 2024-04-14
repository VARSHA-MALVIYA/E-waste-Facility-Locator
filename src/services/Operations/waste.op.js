import { setDeviceSelected } from "../../slices/User.slice";
import { Waste, scrollToSection } from "../ApiConstants";
import { apiConnector } from "../apiConnector";


const {
    GET_ALL_CATEGORIES,
    GET_DEVICES_OF_SELECTED_CATEGORY,
    GET_SELECTED_DEVICE_INFO
} = Waste


export async function getEwastesCategory(setLoading,setEwasteCategory){

    try {
        const res = await apiConnector('GET',GET_ALL_CATEGORIES);
        const data = res?.data ;
        setEwasteCategory(data.uniqueCategories)

    } catch (error) {
        console.log("Error in getEwastesCategory frontend.")
        console.log("error -> ",error.message)
    }

}

export async function getSelectedCategoryWasteInfo(selectedCategory,setSelectedCategoryDevices){
    try {
        const res = await apiConnector('POST',GET_DEVICES_OF_SELECTED_CATEGORY,{"category":selectedCategory});
        const data = res?.data ;
        setSelectedCategoryDevices(data?.data)
    } catch (error) {
        console.log("Error in getEwastesCategory frontend.")
        console.log("error -> ",error.message)
    }
}

export function getSelectedDeviceInfo(selectedCategory,selectedDevice,setDeviceDetails,setLoading,navigator){
    return async(dispatch) => {
        setLoading(true);
        try {
            const res = await apiConnector('POST',GET_SELECTED_DEVICE_INFO,{"category":selectedCategory,"device":selectedDevice});
            const data = res?.data ;
            setDeviceDetails(data.device)
            dispatch(setDeviceSelected(data?.device))
            scrollToSection("device_details");

        } catch (error) {
            console.log("Error in getEwastesCategory frontend.")
            console.log("error -> ",error.message)
        }
        setLoading(false)
    }
}