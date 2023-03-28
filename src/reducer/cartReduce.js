export const cartReduce = (statePro, action) => {
    switch (action.type) {
        case "addCart":
            return [
                {
                    id: action.product.id,
                    category: action.product.category,
                    url: action.product.image,
                    price: action.product.price,
                    title: action.product.title,
                    cant: 1
                },
                ...statePro
            ];
            break;

        case "incrementProduct":
            return statePro.map(item => {
                if (item.id === action.idProduct) {
                    item.cant = item.cant + 1;
                };
                return item;
            });
            break;

        case "decrementProduct":
            return statePro.map(item => {
                if (item.id === action.idProduct) {
                    item.cant = item.cant - 1;
                }
                return item;
            });
            break;

        case "deleteProduct":
            return statePro.filter(item => item.id !== action.idProduct);
            break;
    }
}

export const initCart = () => {
    return [];
}