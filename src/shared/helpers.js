import {toast} from "react-toastify";


export const extractResponse = (response) => {
    if(response.data.status){
        return response;
    }
    throw new Error(response.data.message);
}

export const showMessageError = (message) => {
    return toast.error(message);
}

export  const showMessageSuccess = (message) => {
    return toast.success(message);
}