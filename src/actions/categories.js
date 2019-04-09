// import { createAction } from 'redux-starter-kit';

// export const addCategoriesAction = createAction('ADD_CATEGORIES');
// export const createCategoryAction = createAction('CREATE_CATEGORY');
// export const deleteCategoryAction = createAction('DELETE_CATEGORY');
// export const updateCategoryDescriptionAction = createAction('UPDATE_CATEGORY_DESCRIPTION');
// export const updateCategoryColorAction = createAction('UPDATE_CATEGORY_COLOR');
// export const updateCategoryVisibilityAction = createAction('UPDATE_CATEGORY_VISIBILITY');
// export const displayThisCategoryOnlyAction = createAction('DISPLAY_THIS_CATEGORY_ONLY');

export const addCategoriesAction = categories => ({
  type: 'ADD_CATEGORIES',
  categories: categories
});

export const createCategoryAction = category => ({
  type: 'CREATE_CATEGORY',
  category: category
});

export const deleteCategoryAction = identifier => ({
  type: 'DELETE_CATEGORY',
  identifier: identifier
});

export const updateCategoryDescriptionAction = (identifier, description) => ({
  type: 'UPDATE_CATEGORY_DESCRIPTION',
  identifier: identifier,
  description: description
});

export const updateCategoryColorAction = (identifier, color) => ({
  type: 'UPDATE_CATEGORY_COLOR',
  identifier: identifier,
  color: color
});

export const updateCategoryVisibilityAction = identifier => ({
  type: 'UPDATE_CATEGORY_VISIBILITY',
  identifier: identifier
});

export const displayThisCategoryOnlyAction = identifier => ({
  type: 'DISPLAY_THIS_CATEGORY_ONLY',
  identifier: identifier
});
