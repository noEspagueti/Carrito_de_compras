import { useEffect, useState } from "react";
import { fetchData } from "../helpers/fetchData";

export const useFetchData = () => {
    const [value, setValue] = useState([]);
    useEffect(() => {
        fetchData().then((response) => setValue(response));
    }, []);
    return value;
};
