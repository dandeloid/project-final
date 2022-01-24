import { createSlice } from '@reduxjs/toolkit'
import data from '../data.js'

const initialState = {}

const shop = createSlice({
	name: 'shop',
	initialState,
	reducers: {
		shop: (state, action) => {
			return { products: data.products }
		}
	}	
})

export default shop