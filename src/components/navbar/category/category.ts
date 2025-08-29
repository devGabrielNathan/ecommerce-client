// import { ICategory } from '../../../interfaces/category';
// import './category.css';
//
// export function renderCategoryDropdown(categories: ICategory[]): HTMLElement {
//     const categoryItem = document.createElement('li');
//     categoryItem.className = 'category-dropdown';
//
//     const categoryBtn = document.createElement('button');
//     categoryBtn.className = 'category-btn';
//     categoryBtn.textContent = 'Categorias';
//     categoryBtn.setAttribute('aria-expanded', 'false');
//     categoryBtn.setAttribute('aria-haspopup', 'true');
//     categoryBtn.setAttribute('aria-label', 'Menu de categorias');
//
//     // Add arrow icon
//     const arrowIcon = document.createElement('img');
//     arrowIcon.src = '/arrow-down-white.svg';
//     arrowIcon.alt = '';
//     arrowIcon.className = 'arrow-icon';
//     arrowIcon.setAttribute('aria-hidden', 'true');
//     arrowIcon.loading = 'lazy';
//     categoryBtn.appendChild(arrowIcon);
//
//     const categoryMenu = document.createElement('div');
//     categoryMenu.className = 'category-menu';
//     categoryMenu.setAttribute('role', 'menu');
//     categoryMenu.setAttribute('aria-label', 'Lista de categorias');
//
//     categories.forEach((category, index) => {
//         const categoryLink = document.createElement('a');
//         categoryLink.href = `/category/${category.id}`;
//         categoryLink.className = 'category-item';
//         categoryLink.textContent = category.name;
//         categoryLink.setAttribute('role', 'menuitem');
//         categoryLink.setAttribute('tabindex', '-1');
//
//         // Add click handler for SPA navigation
//         categoryLink.addEventListener('click', (e) => {
//             e.preventDefault();
//             window.history.pushState({}, '', `/category/${category.id}`);
//             window.location.reload();
//         });
//
//         // Add keyboard navigation
//         categoryLink.addEventListener('keydown', (e) => {
//             const items = categoryMenu.querySelectorAll('.category-item');
//             const currentIndex = Array.from(items).indexOf(categoryLink);
//
//             switch (e.key) {
//                 case 'ArrowDown':
//                     e.preventDefault();
//                     const nextIndex = (currentIndex + 1) % items.length;
//                     (items[nextIndex] as HTMLElement).focus();
//                     break;
//                 case 'ArrowUp':
//                     e.preventDefault();
//                     const prevIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
//                     (items[prevIndex] as HTMLElement).focus();
//                     break;
//                 case 'Escape':
//                     e.preventDefault();
//                     categoryBtn.focus();
//                     categoryItem.classList.remove('active');
//                     categoryBtn.setAttribute('aria-expanded', 'false');
//                     break;
//             }
//         });
//
//         categoryMenu.appendChild(categoryLink);
//     });
//
//     // Add hover and focus handlers for desktop
//     categoryItem.addEventListener('mouseenter', () => {
//         if (window.innerWidth > 640) {
//             categoryBtn.setAttribute('aria-expanded', 'true');
//         }
//     });
//
//     categoryItem.addEventListener('mouseleave', () => {
//         if (window.innerWidth > 640) {
//             categoryBtn.setAttribute('aria-expanded', 'false');
//         }
//     });
//
//     // Add click handler for mobile
//     categoryBtn.addEventListener('click', (e) => {
//         if (window.innerWidth <= 640) {
//             e.preventDefault();
//             const isActive = categoryItem.classList.contains('active');
//             categoryItem.classList.toggle('active');
//             categoryBtn.setAttribute('aria-expanded', (!isActive).toString());
//         }
//     });
//
//     // Add keyboard support for button
//     categoryBtn.addEventListener('keydown', (e) => {
//         switch (e.key) {
//             case 'Enter':
//             case ' ':
//             case 'ArrowDown':
//                 e.preventDefault();
//                 categoryItem.classList.add('active');
//                 categoryBtn.setAttribute('aria-expanded', 'true');
//                 const firstItem = categoryMenu.querySelector('.category-item') as HTMLElement;
//                 if (firstItem) {
//                     firstItem.focus();
//                     firstItem.setAttribute('tabindex', '0');
//                 }
//                 break;
//         }
//     });
//
//     categoryItem.appendChild(categoryBtn);
//     categoryItem.appendChild(categoryMenu);
//
//     return categoryItem;
// }
//
// export function renderCategoryList(categories: ICategory[]): HTMLElement {
//     const container = document.createElement('div');
//     container.className = 'category-list';
//     container.setAttribute('role', 'list');
//     container.setAttribute('aria-label', 'Lista de categorias disponíveis');
//
//     categories.forEach(category => {
//         const categoryCard = document.createElement('div');
//         categoryCard.className = 'category-card';
//         categoryCard.setAttribute('role', 'listitem');
//
//         const categoryLink = document.createElement('a');
//         categoryLink.href = `/category/${category.id}`;
//         categoryLink.textContent = category.name;
//         categoryLink.setAttribute('aria-label', `Ver produtos da categoria ${category.name}`);
//
//         // Add click handler for SPA navigation
//         categoryLink.addEventListener('click', (e) => {
//             e.preventDefault();
//             window.history.pushState({}, '', `/category/${category.id}`);
//             window.location.reload();
//         });
//
//         categoryCard.appendChild(categoryLink);
//         container.appendChild(categoryCard);
//     });
//
//     return container;
// }
