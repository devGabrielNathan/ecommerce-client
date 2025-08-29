// import { getAllCategories } from "../../../api/fetchCategories.ts";
// import { getAllSubCategories } from "../../../api/fetchSubCategories.ts";
// import { renderSubcategoryDropdown } from "../subcategory/subcategory.ts";
//
// export async function renderCategoryList(): Promise<HTMLUListElement> {
//     const categoryContainer = document.createElement('ul');
//     categoryContainer.className = 'category-container';
//
//     const categories = await getAllCategories();
//     const subcategories = await getAllSubCategories();
//
//     for (const category of categories) {
//         const hasSubcategories = subcategories.some(sub => sub.category === category.id);
//
//         const categoryItem = document.createElement('li');
//         categoryItem.className = hasSubcategories ? 'category-item category-with-subs' : 'category-item';
//
//         const categoryLink = document.createElement('a');
//         categoryLink.href = `/category/${category.id}`;
//         categoryLink.className = 'category-link';
//         categoryLink.textContent = category.name;
//
//         categoryItem.appendChild(categoryLink);
//
//         if (hasSubcategories) {
//             const categorySubcategories = subcategories.filter(sub => sub.category === category.id);
//             const subcategoryDropdown = renderSubcategoryDropdown(categorySubcategories);
//             categoryItem.appendChild(subcategoryDropdown);
//         }
//
//         categoryContainer.appendChild(categoryItem);
//     }
//     return categoryContainer;
// }
