import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { photosReducer } from './reducers/photosReducer';
import { searchValueReducer } from './reducers/searchValueReducer';
import { sortByReducer } from './reducers/sortByReducer';
import { pageReducer } from './reducers/pageReducer';
import { perPageReducer } from './reducers/perPageReducer';
import { pagesTotalReducer } from './reducers/pagesTotalReducer';
import { isLoadingReducer } from './reducers/isLoadingReducer';
import { beforeSearchReducer } from './reducers/beforeSearchReducer';
import { imageDetailsReducer } from './reducers/imageDetailsReducer';
import { imageSrcReducer } from './reducers/imageSrcReducer';

const rootReducer = combineReducers({
  photos: photosReducer,
  searchValue: searchValueReducer,
  sortByValue: sortByReducer,
  page: pageReducer,
  perPage: perPageReducer,
  pagesTotal: pagesTotalReducer,
  isLoading: isLoadingReducer,
  beforeSearch: beforeSearchReducer,
  imageDetails: imageDetailsReducer,
  imageSrc: imageSrcReducer,
});
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
