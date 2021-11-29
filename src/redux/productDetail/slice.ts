import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

interface ProductDetailState {
	loading: boolean
	error: string | null
	data: any
}

const initialState: ProductDetailState = {
	loading: true,
	error: null,
	data: null
}

export const productDetailSlice = createSlice({
	name: 'productDetail',
	initialState,
	reducers: {
		fetchStart: (state) => {
			// return { ...state, loading: true };
			state.loading = true
		},
		fetchSuccess: (state, action) => {
			state.data = action.payload
			state.loading = false
			state.error = null
		},
		fetchFail: (state, action: PayloadAction<string | null>) => {
			state.loading = false
			state.error = action.payload
		}
	}
})

export const getAsyncProductDetail = createAsyncThunk(
	'productDetail/getAsyncProductDetail',
	async (id: string, thunkApi) => {
		thunkApi.dispatch(productDetailSlice.actions.fetchStart())
		try {
			const { data } = await axios.get('/detail.json')
			thunkApi.dispatch(productDetailSlice.actions.fetchSuccess(data))
		} catch (error: any) {
			thunkApi.dispatch(productDetailSlice.actions.fetchFail(error))
		}
	}
)
