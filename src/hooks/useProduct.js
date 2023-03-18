import { useReducer, useState } from "react";


export const useProduct = (reduce, init , initialState) => {
    const [showRunway, setRunway] = useState(false);
    const [state, dispatch] = useReducer(reduce, initialState, init);

    const addProduct = (product) => {
        dispatch(
            {
                type: "addCart",
                category: product.category,
                idProduct: product.id,

            }
        );
    };

    return [
        state,
        dispatch,
        showRunway,
        setRunway,
        addProduct
    ];

};
