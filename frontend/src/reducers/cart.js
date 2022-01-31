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
				productExist.quantity += nrToAdd
			} else {
				store.cart.push({...product})
			}
		},
		removeItem: (store, action) => {
			const product = action.payload.product
			console.log("product", product)
			store.cart = []
		}
	},
});
