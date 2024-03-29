export const fetchData = async () => {
    try {
        const response = await axios.get('https://webdev-be.vercel.app/products');
        return response.data.data;
    } catch (error) {
        console.log('error', error);
        throw error
    }
}

export const addData = async (payload) => {
    try {
        const response = await axios.post('https://webdev-be.vercel.app/products', payload);
        return response.data;
    } catch (error) {
        console.log('error', error);
        throw error
    }
}