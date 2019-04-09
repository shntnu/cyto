import './bootstrap.js';

import React from 'react';
import * as tf from '@tensorflow/tfjs';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { configureStore } from 'redux-starter-kit';
import categories from './reducers/categories';
import images from './reducers/images';
import classifier from './reducers/classifier';
import settings from './reducers/settings';

initializeModel();

registerServiceWorker();

const store = configureStore({
  reducer: {
    categories: categories,
    images: images,
    classifier: classifier,
    settings: settings
  }
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

async function initializeModel() {
  const preloadedModel = await tf.loadLayersModel(
    'https://storage.googleapis.com/tfjs-models/tfjs/mobilenet_v1_0.25_224/model.json'
  );
  //'https://weights.cyto.ai/mobilenet/model.json'
  await preloadedModel.save('indexeddb://classifier');
}

export { store };
