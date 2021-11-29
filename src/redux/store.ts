import { createStore, applyMiddleware } from 'redux'
import languageReducer from './language/languageReducer'
import recommendProductsReducer from './recommendProducts/recommendProductsReducer'
import thunk from 'redux-thunk'
import { actionLog } from './middleware/actionLog'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { productDetailSlice } from './productDetail/slice'

const rootReducer = combineReducers({
	language: languageReducer,
	recommendProducts: recommendProductsReducer,
	productDetail: productDetailSlice.reducer
})

// 中间件：函数式编程、复合函数、柯力化    // 马丁·福勒, 罗伊
// const middleware = (store) => (next) => (action) => {}
// const store = createStore(rootReducer, applyMiddleware(thunk, actionLog))

const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), actionLog],
	devTools: true
})

// 类型注入，ReturnType泛型中获取
export type RootState = ReturnType<typeof store.getState>

export default store

/** 减少模板代码方案
 * 1.Flux,多数据仓库，多store
 * 2.Redux配合Rxjs
 * 3.mobx替换redux
 * 4.redux-toolkit **
 */
