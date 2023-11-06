const data = [
	{ name: 'Orange Juice', category: 'Drinks', price: 14.99 ,onClick:false, id:1},
	{ name: 'Apples', category: 'Fruits', price: 4.99 ,onClick:false, id:2},
	{ name: 'Tomatos', category: 'Vegitables', price: 6.99 ,onClick:false , id:3},
	{ name: 'Coffee', category: 'Drinks', price: 10.99  ,onClick:false, id:4},
	{ name: 'Sweet Paper', category: 'Vegitables', price: 7.99 ,onClick:false, id:5 },
	{ name: 'Grapes', category: 'Fruits', price: 13.99 ,onClick:false, id:6},
]
export function getData() {

	return new Promise((resolve) => {
		setTimeout(() => { resolve(data) }, 2000)
	})
}