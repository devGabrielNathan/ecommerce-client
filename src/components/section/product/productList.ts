import { IProduct, ProductsPaginatedResponse } from '../../../interfaces/product.ts';
import {createProductCard} from './product.ts';
import {getAllProducts} from '../../../api/fetchProducts.ts';

// Pega a página atual da URL. Se não houver, define como 1.
export const page = new URLSearchParams(window.location.search).get('page') || 1;

export async function renderProductList(): Promise<HTMLDivElement> {
    const products: ProductsPaginatedResponse<IProduct> = await getAllProducts(Number(page));
    // Calcula o número total de páginas disponíveis com base na contagem total de produtos e no número de produtos por página.
    (window as any).availablePages = products.results.length > 0 ? Math.ceil(products.count / products.results.length) : 1;

    const cardContainer = document.createElement('div');
    cardContainer.className = 'card-container';

    // Aqui faz sentido adionar um novo elemento, porque se não houver produtos, o container ficará vazio,
    // diferente do caso da criação dos botões, onde o container renderizaria os botões em todas as páginas que eu fizesse
    // uso do método createProductCard.
    if (!products || !products.results || products.results.length === 0) {
        const emptyMsg = document.createElement('p');
        emptyMsg.textContent = 'Nenhum produto encontrado.';
        cardContainer.appendChild(emptyMsg);
        return cardContainer;
    }

    products.results.forEach((product: IProduct)  => {
        cardContainer.appendChild(createProductCard(product, false));
    });

    return cardContainer;
}
