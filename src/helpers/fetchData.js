
export const fetchData = async () => {
    const data = await fetch('https://fakestoreapi.com/products/');
    const response = await data.json();
    return response;
}
