export const cartReduce = (statePro, action) => {
    switch (action.type) {
        case "addCart":
            return [
                {
                    id: action.idProduct,
                    category: action.category
                },
                ...statePro
            ];
            break;

            default: return [];
    }
}

export const initCart = () => {
    return [];
}