import React from "react";
import { useDispatch } from "react-redux";
import { closeAlert, setAlert } from "../redux/alertSlice";

const useAlert = () => {
    const dispatch = useDispatch();

    const showAlert = (message, type) => {
        dispatch(setAlert({ message, type }));
        setTimeout(() => {
            dispatch(closeAlert());
        }, 2000);
    };

    return showAlert;
};

export default useAlert;
