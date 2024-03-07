export const fetchData = async () => {
    try {
        const response = await axios.get('https://webdev-be.vercel.app/products');
        return response.data.data;
    } catch (error) {
        console.log('error', error);
        throw error
    }
}