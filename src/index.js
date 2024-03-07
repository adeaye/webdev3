const { fetchData, addData } = require("./fetcher")

document.addEventListener('DOMContentLoaded', async () => {
    const productListElement = document.getElementById('productList');

    const displayProduct = async () => {
        try {
            const products = await fetchData()
            console.log('products', products)

            productListElement.innerHTML = "";

            products.slice(0,12).forEach(async (product, index) => {
                if(index % 4 === 0) {
                    productListElement.innerHTML += '<div class="w-100 mb-4"></div>';
                }

                const cardElement = document.createElement('div');
                cardElement.classList.add('col-md-3');
                cardElement.innerHTML = `
                <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">${product.currency} ${product.price}</p>
                </div>
                </div>
                `
                productListElement.appendChild(cardElement);
            });
            
        } catch (error) {
            console.error('err', error);
        }
    }
    await displayProduct();

    const form = document.getElementById('submitForm');

    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        const formData = new FormData(form)

        const payload = {
            name: formData.get('name'),
            price: formData.get('price'),
            currency: 'USD',
        }

        try {
            await addData(payload);

            await displayProduct()
        } catch (error) {
            console.log('err', error)
        }
    })
})