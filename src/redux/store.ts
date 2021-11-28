import { createStore, combineReducers, applyMiddleware } from 'redux'
import languageReducer from './language/languageReducer'
import recommendProductsReducer from './recommendProducts/recommendProductsReducer'
import thunk from 'redux-thunk'
import { actionLog } from './middleware/actionLog'

const rootReducer = combineReducers({
	language: languageReducer,
	recommendProducts: recommendProductsReducer
})

// 中间件：函数式编程、复合函数、柯力化    // 马丁·福勒, 罗伊
// const middleware = (store) => (next) => (action) => {}
const store = createStore(rootReducer, applyMiddleware(thunk, actionLog))

// 类型注入，ReturnType泛型中获取
export type RootState = ReturnType<typeof store.getState>

export default store
