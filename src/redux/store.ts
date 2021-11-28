import { createStore, combineReducers, applyMiddleware } from 'redux'
import languageReducer from './language/languageReducer'
import recommendProductsReducer from './recommendProducts/recommendProductsReducer'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
	language: languageReducer,
	recommendProducts: recommendProductsReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

// 类型注入，ReturnType泛型中获取
export type RootState = ReturnType<typeof store.getState>

export default store
