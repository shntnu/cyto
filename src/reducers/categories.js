import { createReducer } from 'redux-starter-kit';

const categories = createReducer([], {
  ADD_CATEGORIES: (state, action) => {
    const unlabeled = {
      color: '#F8F8F8',
      description: 'unlabeled',
      identifier: null,
      index: '-1',
      visible: true
    };

    let categories = [...action.categories];

    categories.unshift(unlabeled);

    return categories;
  },
  CREATE_CATEGORY: (state, action) => {
    return [...state, action.category];
  },
  DELETE_CATEGORY: (state, action) => {
    return state.filter(category => {
      return category.identifier !== action.identifier;
    });
  },
  UPDATE_CATEGORY_DESCRIPTION: (state, action) => {
    return state.map(category => {
      if (category.identifier === action.identifier) {
        return {
          ...category,
          description: action.description
        };
      } else {
        return category;
      }
    });
  },
  UPDATE_CATEGORY_COLOR: (state, action) => {
    return state.map(category => {
      if (category.identifier === action.identifier) {
        return {
          ...category,
          color: action.color
        };
      } else {
        return category;
      }
    });
  },
  UPDATE_CATEGORY_VISIBILITY: (state, action) => {
    return state.map(category => {
      if (category.identifier === action.identifier) {
        return {
          ...category,
          visible: !category.visible
        };
      } else {
        return category;
      }
    });
  },
  DISPLAY_THIS_CATEGORY_ONLY: (state, action) => {
    return state.map(category => {
      if (category.identifier === action.identifier) {
        return {
          ...category,
          visible: true
        };
      } else {
        return {
          ...category,
          visible: false
        };
      }
    });
  }
});

export default categories;
