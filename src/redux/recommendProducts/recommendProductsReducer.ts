import {
	FETCH_RECOMMEND_PRODUCTS_FAIL,
	FETCH_RECOMMEND_PRODUCTS_START,
	FETCH_RECOMMEND_PRODUCTS_SUCCESS,
	RecommendProductAction
} from './recommendProductsActions'

interface RecommendProductsState {
	products: any[]
	loading: boolean
	error: string | null
}

const defaultState: RecommendProductsState = {
	loading: true,
	error: null,
	products: []
}

export default (state = defaultState, action: RecommendProductAction) => {
	switch (action.type) {
		case FETCH_RECOMMEND_PRODUCTS_START:
			return { ...state, loading: true }
		case FETCH_RECOMMEND_PRODUCTS_SUCCESS:
			return { ...state, loading: false, products: action.payload }
		case FETCH_RECOMMEND_PRODUCTS_FAIL:
			return { ...state, loading: false, error: action.payload }
		default:
			return state
	}
}
