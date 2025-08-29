import { IProduct } from "../../../interfaces/product.ts";

export function createProductCard(product: IProduct, isDetails: boolean): HTMLDivElement {
    const productCard = document.createElement('div');
    productCard.className = isDetails ? 'product-detail' : 'products-card';

    const img = document.createElement('img');
    img.src = product.image || "";
    img.alt = product.name;
    img.className = isDetails ? 'product-detail-img' : '';

    const container = document.createElement('div');
    container.className = isDetails ? 'container-product-details' : 'container-product';

    const name = document.createElement('h3');
    name.textContent = product.name;
    name.className = isDetails ? 'product-detail-name' : '';

    const brand = document.createElement('h3');
    brand.textContent = product.brand;
    brand.className = isDetails ? 'product-detail-brand' : '';

    const description = document.createElement('p');
    description.textContent = product.description;
    description.className = isDetails ? 'product-detail-description' : '';

    const price = document.createElement('h3');
    price.textContent = `R$ ${product.price}`;
    price.className = isDetails ? 'product-detail-price' : '';

    container.appendChild(name);
    container.appendChild(brand);
    container.appendChild(description);
    container.appendChild(price);

    productCard.appendChild(img);
    productCard.appendChild(container);

    if (isDetails) {
        const buttonsContainer = document.createElement('div');
        buttonsContainer.className = 'buttons-container';

        const purchase = document.createElement('button');
        purchase.textContent = 'Comprar agora';
        purchase.className = 'btn-secondary';

        purchase.addEventListener('click', (e) => {
            e.preventDefault();
            window.history.pushState({}, '', '/purchase');
            window.location.reload();
        })

        const cart = document.createElement('button');
        cart.textContent = 'Adicionar ao carrinho';
        cart.className = 'btn-secondary';

        cart.addEventListener('click', (e) =>{
            e.preventDefault();
            window.history.pushState({}, '', '/cart');
            window.location.reload();
        })

        buttonsContainer.appendChild(purchase);
        buttonsContainer.appendChild(cart);

        container.appendChild(buttonsContainer);
    }

    if (!isDetails) {
        productCard.onclick = async () => {
            const section = document.querySelector('section');

            if (section) {
                window.location.href = `/products/${product.id}`;
            }

        };

    }

    return productCard;
}
