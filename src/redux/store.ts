import { createStore, applyMiddleware } from 'redux'
import languageReducer from './language/languageReducer'
import recommendProductsReducer from './recommendProducts/recommendProductsReducer'
import thunk from 'redux-thunk'
import { actionLog } from './middleware/actionLog'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { productDetailSlice } from './productDetail/slice'
import { productSearchSlice } from './productSearch/slice'
import { userSlice } from './user/slice'
import { shoppingCartSlice } from './shoppingCart/slice'
import { orderSlice } from './order/slice'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['user'] // 白名单，不设置默认使用所有reducer
}

const rootReducer = combineReducers({
	language: languageReducer,
	recommendProducts: recommendProductsReducer,
	productDetail: productDetailSlice.reducer,
	productSearch: productSearchSlice.reducer,
	user: userSlice.reducer,
	shoppingCart: shoppingCartSlice.reducer,
	order: orderSlice.reducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

// 中间件：函数式编程、复合函数、柯力化    // 马丁·福勒, 罗伊
// const middleware = (store) => (next) => (action) => {}
// const store = createStore(rootReducer, applyMiddleware(thunk, actionLog))

const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), actionLog],
	devTools: true
})

const persistor = persistStore(store)

// 类型注入，ReturnType泛型中获取
export type RootState = ReturnType<typeof store.getState>

export default { store, persistor }

/** 减少模板代码方案
 * 1.Flux,多数据仓库，多store
 * 2.Redux配合Rxjs
 * 3.mobx替换redux
 * 4.redux-toolkit **
 */
