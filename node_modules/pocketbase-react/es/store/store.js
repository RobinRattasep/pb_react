import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import { useSelector } from 'react-redux';
import { appReducer } from './reducers';
import thunk from 'redux-thunk';
import { StorageService } from '../service/Storage';
const CustomStorage = {
  getItem: async (key, ..._args) => {
    return await StorageService.get(key);
  },
  setItem: async (key, value, ..._args) => {
    return await StorageService.set(key, value);
  },
  removeItem: async (key, ..._args) => {
    return await StorageService.remove(key);
  }
};
export const persistConfig = {
  key: 'root',
  storage: CustomStorage
};
const reducer = combineReducers({
  reducer: persistReducer(persistConfig, appReducer)
});
const store = configureStore({
  reducer,
  middleware: [thunk]
});
const useAppDispatch = store.dispatch;
const useAppSelector = useSelector;
const persistor = persistStore(store);
export { useAppDispatch, useAppSelector, store, persistor };