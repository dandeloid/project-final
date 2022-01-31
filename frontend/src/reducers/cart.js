import { createSlice } from '@reduxjs/toolkit'

//The Cart --- WORK IN PROGRESS
export const cart = createSlice({
	name: 'cart',
	initialState: {
	cart: [],
	},
	reducers: {
		
		addItem: (store, action) => {
			const nrToAdd = action.payload.quantity
			const product = action.payload
			const productExist = store.cart.find((item) => item._id === product._id)

			if (productExist){
				productExist.quantity = parseInt(productExist.quantity) + parseInt(nrToAdd)
			} else {
				store.cart.push({...product})
			}
		},
		removeItem: (store, action) => {
			store.cart = store.cart.filter((item) => item._id !== action.payload.product._id)
		}
	},
});
