import { createStore } from 'redux'
import languageReducer from './language/languageReducer'

const store = createStore(languageReducer)

// 类型注入，ReturnType泛型中获取
export type RootState = ReturnType<typeof store.getState>

export default store
