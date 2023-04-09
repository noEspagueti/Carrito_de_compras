import { useReducer, useState } from "react";


export const useProduct = (reduce, initialState, init) => {
    const [showRunway, setRunway] = useState(false);
    const [state, dispatch] = useReducer(reduce, initialState, init);

    const addToCartProduct = (product) => {
        let repeatItem = false;
        state.forEach(element => {
            if (element.id === product.id) repeatItem = true;
        });
        if (repeatItem) {
            dispatch(
                {
                    type: "incrementProduct",
                    idProduct: product.id
                }
            );
        } else {
            dispatch(
                {
                    type: "addCart",
                    product
                }
            );
        }
    };

    const incrementProduct = (id) => {
        dispatch(
            {
                type: "incrementProduct",
                idProduct: id
            }
        );
    };

    const decrementProduct = (id, cant) => {
        if (cant <= 1) {
            dispatch({
                type: "deleteProduct",
                idProduct: id
            });
        } else {
            dispatch(
                {
                    type: "decrementProduct",
                    idProduct: id
                }
            );
        }
    };

    return [
        state,
        dispatch,
        showRunway,
        setRunway,
        addToCartProduct,
        incrementProduct,
        decrementProduct,
    ];

};
