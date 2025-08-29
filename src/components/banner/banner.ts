export function renderBanner() {
    // TODO: Rever o uso de article, não sei se é o mais adequado.
    const banner = document.createElement('article');
    banner.className = 'banner';
    const headline = document.createElement('h1');
    headline.textContent = 'Bem-vindo à nossa loja!';

    const subheadline = document.createElement('h2');
    subheadline.textContent = 'Descubra nossos produtos incríveis e aproveite ofertas exclusivas.';

    const button = document.createElement('button');
    button.className = 'btn-primary';
    button.textContent = 'Ver Produtos';

    banner.appendChild(headline);
    banner.appendChild(subheadline);
    banner.appendChild(button);

    button.addEventListener('click', () => {
        window.location.href = '/products';
    });

    return banner;
}
