import { legacy_createStore as createStore, combineReducers, Store } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { applyMiddleware } from "redux";
import storage from "redux-persist/lib/storage";
import reduxThunk from "redux-thunk";
import reduxPromise from "redux-promise";
import menu from "./module/menu/reducer"
import global from "./module/global/reducer"
// 创建reducer
const reducer = combineReducers({
  menu,
  // global
})

// redux持久化
const persistConfig = {
  key:"redux-state",
  storage:storage
}
const persistReducerConfig = persistReducer(persistConfig, reducer)

// redux中间件
const middleware = applyMiddleware(reduxThunk, reduxPromise)
const store:Store = createStore(persistReducerConfig)
const persistor = persistStore(store)
export {store, persistor}
