import { createSlice } from '@reduxjs/toolkit'

export const shop = createSlice({
	name: 'shop',
	initialState: {
		items: [],
	},
	reducers: {
		setItems: (store, action) => {
			store.items = action.payload;
		},
		setError: (store, action) => {
			store.error = action.payload;
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
					dispatch(shop.actions.setItems(data));
					dispatch(shop.actions.setError(null));
					console.log("res", data)
				} else {
					dispatch(shop.actions.setError(data));
					console.log("res2", data)
				}
			})
			
	};
};