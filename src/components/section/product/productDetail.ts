import { getProductById } from '../../../api/fetchProducts.ts';
import { createProductCard } from './product.ts';

// TODO: Rever Promisse do HTMLDivElement
export async function renderProductDetail(productId: string): Promise<HTMLDivElement> {
    const product = await getProductById(productId);

    return createProductCard(product, true);
}
