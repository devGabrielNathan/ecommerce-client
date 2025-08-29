import { renderNavbar } from './components/navbar';
import { renderBanner} from "./components/banner";
import { renderFooter } from "./components/footer";
import { renderProductDetail, renderProductList } from "./components/section/product";
import { renderLogin } from "./components/login";
import { renderRegister } from "./components/register";
import { page } from './components/section/product';
import './global.css';
// import {renderProfile} from "./components/profile";

function getAvailablePages(): number {
    // Pega o valor calculado dinamicamente em renderProductList
    return (window as any).availablePages || 1;
}

document.addEventListener('DOMContentLoaded', async (): Promise<void> => {
    // Obtendo referências dos elementos principais da página
    const header: HTMLElement | null  = document.querySelector('header');
    const section: HTMLElement | null = document.querySelector('section');
    const footer: HTMLElement | null = document.querySelector('footer');
    // Obtendo a URL atual
    const url: string = window.location.pathname;

    // Mapeando as rotas
    const isHomePage: boolean = url === '/';
    const isProductPage: boolean = url.startsWith('/products');
    const isLoginPage: boolean = url === '/login';
    const isRegisterPage: boolean = url === '/register';
    // const isProfilePage: boolean = url === '/profile';
    // Definindo a aparição de componentes em determinadas páginas
    const containsBanner: boolean = isHomePage;


    // Verificando se os elementos principais existem
    if (section == null || header == null || footer == null) {
        console.error('Element not found');
        return;
    }

    const navbar: HTMLElement = await renderNavbar();
    header.appendChild(navbar)

    const footerElement: HTMLElement = renderFooter();
    footer.appendChild(footerElement);

    if (isHomePage) {
        const products: HTMLElement = await renderProductList();
        section.appendChild(products);
    }

    if (isProductPage) {
        const productId = url.split('/')[2];
        console.log(productId)

        if (productId) {
            section.className = 'product-detail-section';
            const product: HTMLElement = await renderProductDetail(productId);
            section.appendChild(product)
        } else {
            // Coloquei os botões de navegação aqui porque quero que as páginas de listagem tenham paginação.
            // Não quero paginação na página inicial.
            const buttonsContainer = document.createElement('div');
            buttonsContainer.className = 'buttons-container';

            const btnMore = document.createElement('button');
            btnMore.id = 'load-more-button';
            btnMore.className = 'btn-primary'
            btnMore.textContent = 'Mostrar mais';

            if (Number(page) > 1) {
                const btnBack = document.createElement('button');
                btnBack.id = 'back-button';
                btnBack.className = 'btn-primary';
                btnBack.textContent = 'Voltar';
                buttonsContainer.appendChild(btnBack);
                btnBack.addEventListener('click', ()=>{
                    window.location.href = `/products/?page=${Number(page) - 1}`;
                })
            }
            const products: HTMLElement = await renderProductList();

            // Pega o valor atualizado de availablePages
            const availablePages = getAvailablePages();
            console.log(availablePages, page)
            if (Number(page) < availablePages) {
                buttonsContainer.appendChild(btnMore);
                btnMore.addEventListener('click', ()=> {
                    window.location.href = `/products/?page=${Number(page) + 1}`;
                });
            }

            section.appendChild(products);
            section.appendChild(buttonsContainer);
        }
    }

    if (isLoginPage) {
        const login = renderLogin();
        section.appendChild(login);
    }

    if (isRegisterPage) {
        const register = renderRegister();
        section.appendChild(register);
    }

    // if (isProfilePage) {
    //     const profile  = renderProfile();
    //     section.appendChild(profile);
    // }

    if (containsBanner) {
        const banner: HTMLElement = renderBanner();
        header.appendChild(banner);
    }
});
