export async function renderNavbar(): Promise<HTMLElement> {
    const nav = document.createElement('nav');
    nav.className = 'navbar';

    const navLinks = document.createElement('div');
    navLinks.className = 'nav-links';

    const logo = document.createElement('p');
    logo.className = 'logo';
    logo.textContent = 'Loja Virtual';
    logo.addEventListener('click', () => {
        window.location.href = "/"
    });

    const homeLink = document.createElement('a');
    homeLink.href = '/';
    homeLink.textContent = 'Início';
    homeLink.addEventListener('click', (e) => {
        e.preventDefault();
        window.history.pushState({}, '', '/');
        window.location.reload();
    });

    const productsLink = document.createElement('a');
    productsLink.href = '/products';
    productsLink.textContent = 'Produtos';
    productsLink.addEventListener('click', (e) => {
        e.preventDefault();
        window.history.pushState({}, '', '/products');
        window.location.reload();
    });

    const loginLink = document.createElement('a');
    loginLink.href = '/login';
    loginLink.textContent = 'Entrar';
    loginLink.addEventListener('click', (e) => {
        e.preventDefault();
        window.history.pushState({}, '', '/login');
        window.location.reload();
    });

    const registerLink = document.createElement('a');
    registerLink.href = '/register';
    registerLink.textContent = 'Registrar';
    registerLink.addEventListener('click', (e) => {
        e.preventDefault();
        window.history.pushState({}, '', '/register');
        window.location.reload();
    });

    const cartLink = document.createElement('a');
    cartLink.href = '/cart';
    cartLink.textContent = 'Carrinho';
    cartLink.addEventListener('click', (e) => {
        e.preventDefault();
        window.history.pushState({}, '', '/cart');
        window.location.reload();
    });

    navLinks.appendChild(homeLink);
    navLinks.appendChild(productsLink);
    navLinks.appendChild(loginLink);
    navLinks.appendChild(registerLink);
    navLinks.appendChild(cartLink);

    nav.appendChild(logo);
    nav.appendChild(navLinks);

    return nav;
}
