import { createSlice } from '@reduxjs/toolkit'

export const shop = createSlice({
	name: 'shop',
	initialState: {
		items: [],
		item: [],
		loading: false,
	},
	reducers: {
		setItems: (store, action) => {
			store.items = action.payload
		},
		setItem: (store, action) => {
			store.item = action.payload
		},
		setLoading: (store, action) => {
			store.loading = action.payload
		},
		setError: (store, action) => {
			store.error = action.payload
		},
	},
});

export const showShop = () => {
	return (dispatch) => {
		
		const options = {
			method: "GET",
			headers: {
                'Content-Type': 'application/json',
            },
		};
		fetch('http://localhost:3003/api/products', options)
			.then((res) => res.json())
			.then((data) => {
				if (data) {
					dispatch(shop.actions.setItems(data))
					dispatch(shop.actions.setError(null))
				} else {
					dispatch(shop.actions.setError(data))
				}
			})
			
	};
};

export const showProduct = (id) => {
	return (dispatch) => {
		
		const options = {
			method: "GET",
			headers: {
                'Content-Type': 'application/json',
            },
		};
		fetch(`http://localhost:3003/api/products/${id}`, options)
			.then((res) => res.json())
			.then((data) => {
				if (data) {
					dispatch(shop.actions.setItem(data))
					dispatch(shop.actions.setError(null))
				} else {
					dispatch(shop.actions.setError(data))
				}
			})
			
	};
};