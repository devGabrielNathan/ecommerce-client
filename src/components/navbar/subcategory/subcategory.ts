// import { ISubCategory } from '../../../interfaces/subcategory';
// import './subcategory.css';
//
// export function renderSubcategoryDropdown(subcategories: ISubCategory[]): HTMLElement {
//     const subcategoryDropdown = document.createElement('div');
//     subcategoryDropdown.className = 'subcategory-dropdown';
//
//     subcategories.forEach(subcategory => {
//         const subcategoryLink = document.createElement('a');
//         subcategoryLink.href = `/subcategory/${subcategory.id}`;
//         subcategoryLink.className = 'subcategory-item';
//         subcategoryLink.textContent = subcategory.name;
//
//         subcategoryDropdown.appendChild(subcategoryLink);
//     });
//
//     return subcategoryDropdown;
// }