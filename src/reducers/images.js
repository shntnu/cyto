import { createReducer } from 'redux-starter-kit';

const images = createReducer([], {
  ADD_IMAGES: (state, action) => {
    return { ...action.images };
  },
  DELETE_IMAGES: (state, action) => {
    const images = { ...state };
    for (let imgIdentifier of action.imgIdentifiers) {
      delete images[imgIdentifier];
    }
    return images;
  },
  ONLY_SHOW_IMAGES_WITH_CERTAIN_CATEGORY: (state, action) => {
    const images = { ...state };
    for (let key in images) {
      images[key].visible = images[key].category === action.categoryIdentifier;
    }
    return images;
  },
  SET_IMAGE_CATEGORY_TO_NULL_BASED_ON_CATEGORY: (state, action) => {
    const images = { ...state };
    for (let key in images) {
      if (images[key].category === action.categoryIdentifier) {
        images[key].category = null;
      }
    }
    return images;
  },
  UPDATE_BRIGHTNESS: (state, action) => {
    const images = { ...state };
    images[action.imgIdentifier].brightness = action.brightness;
    return images;
  },
  UPDATE_BRIGHTNESS_FOR_ALL_IMAGES: (state, action) => {
    const images = { ...state };
    for (let key in images) {
      images[key].brightness = action.brightness;
    }
    return images;
  },
  UPDATE_CATEGORY_AND_PROBABILITY: (state, action) => {
    const images = { ...state };
    for (let key in action.predictions) {
      images[key].category = action.predictions[key].category;
      images[key].probability = action.predictions[key].probability;
    }
    return images;
  },
  UPDATE_CONTRAST: (state, action) => {
    const images = { ...state };
    images[action.imgIdentifier].contrast = action.contrast;
    return images;
  },
  UPDATE_CONTRAST_FOR_ALL_IMAGES: (state, action) => {
    const images = { ...state };
    for (let key in images) {
      images[key].contrast = action.contrast;
    }
    return images;
  },
  UPDATE_IMAGE_CATEGORY: (state, action) => {
    const images = { ...state };
    for (let imgIdentifier of action.imgIdentifiers) {
      images[imgIdentifier].category = action.categoryIdentifier;
      images[imgIdentifier].categoryName = action.categoryName;
    }
    return images;
  },
  UPDATE_IMAGE_VISIBILITY: (state, action) => {
    return { ...action.images };
  },
  UPDATE_IMAGE_VISIBILTY_BASED_ON_CATEGORY: (state, action) => {
    const images = { ...state };
    for (let key in images) {
      if (images[key].category === action.categoryIdentifier) {
        images[key].visible = action.value;
      }
    }
    return images;
  },
  UPDATE_PROBABILITY: (state, action) => {
    const images = { ...state };
    for (let imgIdentifier of action.imgIdentifiers) {
      images[imgIdentifier].probability = action.probability;
    }
    return images;
  },
  UPDATE_UNSELECTED_CHANNELS: (state, action) => {
    const images = { ...state };
    images[action.imgIdentifier].unselectedChannels = action.unselectedChannels;
    return images;
  },
  UPDATE_UNSELECTED_CHANNELS_FOR_ALL_IMAGES: (state, action) => {
    const images = { ...state };
    for (let key in images) {
      images[key].unselectedChannels = action.unselectedChannels;
    }
    return images;
  }
});

export default images;
