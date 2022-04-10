import { applyMiddleware, createStore } from "redux";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { rootReducer } from "../reducers";
const persistConfig = {
    key: 'root',
    storage,
}
const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))
const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store = createStore(persistedReducer,composedEnhancer)
export const persistor = persistStore(store)