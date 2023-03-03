
export const reduce = (state, action) => {
    switch (action.type) {
        case "getProduct":
            return {
                category: action.categoryProduct,
                product: action.inputForm
            };
            break;

        default:
            return state;
    }
};

export const init = () => {
    return JSON.parse(localStorage.getItem("product")) ?? {
        category: "men's clothing",
        product: "",
    };
};

