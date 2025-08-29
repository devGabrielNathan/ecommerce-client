export function renderFooter(): HTMLElement {
    // TODO: Adicionar mais informações ao footer
    const paragraph = document.createElement('p');

    paragraph.innerHTML = `
        &copy; 2025 Comércio Eletrônico. Todos os direitos reservados.
    `;
    return paragraph;
}
