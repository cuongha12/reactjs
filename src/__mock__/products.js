import {v4 as uuid} from 'uuid'
const products = [
	{
		id: uuid(),
		img: 'https://htmldemo.net/rusu/rusu/assets/img/product/product4.jpg',
		price: '70.00',
		sale: '10.00',
		name: 'Camera 1200',
		created_date: new Date()
	},
	{
		id: uuid(),
		img: 'https://htmldemo.net/rusu/rusu/assets/img/product/product5.jpg',
		price: '78.00',
		sale: '20.00',
		name: 'Laptop Asus',
		created_date: new Date()
	},
	{
		id: uuid(),
		img: 'https://htmldemo.net/rusu/rusu/assets/img/product/product6.jpg',
		price: '50.00',
		sale: '30.00',
		name: 'Laptop',
		created_date: new Date()
	},
	{
		id: uuid(),
		img: 'https://htmldemo.net/rusu/rusu/assets/img/product/product7.jpg',
		price: '72.00',
		sale: '50.00',
		name: 'Iphone 6',
		created_date: new Date()
	},
	{
		id: uuid(),
		img: 'https://htmldemo.net/rusu/rusu/assets/img/product/product8.jpg',
		price: '10.00',
		sale: '40.00',
		name: 'Nokia 1280',
		created_date: new Date()
	},
	{
		id: uuid(),
		img:'https://htmldemo.net/rusu/rusu/assets/img/product/product3.jpg',
		price:'50.00',
		name: 'Camera 1200',
		sale: '30.00',
		created_date: new Date()
	},
	{
		id: uuid(),
		img:'https://htmldemo.net/rusu/rusu/assets/img/product/product4.jpg',
		price:'70.00',
		name: 'Laptopgaming',
		sale: '20.00',
		created_date: new Date()
	},
	{
		id: uuid(),
		img:'https://htmldemo.net/rusu/rusu/assets/img/product/product5.jpg',
		price:'79.00',
		name: 'Asus Tuf gaming',
		sale: '50.00',
		created_date: new Date(2021, 1, 23)
	},
	{
		id: uuid(),
		img:'https://htmldemo.net/rusu/rusu/assets/img/product/product6.jpg',
		price:'60.00',
		name: 'Rog Strix',
		sale: '40.00',
		created_date: new Date()
	},
	{
		id: uuid(),
		img:'https://htmldemo.net/rusu/rusu/assets/img/product/product7.jpg',
		price:'59.00',
		name: 'MSI Gaming',
		sale: '5.00',
		created_date: new Date(2021, 1, 23)
	},
	{
		id: uuid(),
		img:'https://htmldemo.net/rusu/rusu/assets/img/product/product1.jpg',
		price: '30.00',
		name: 'Asus Tuf Gaming',
		sale: '50.00',
		created_date: new Date(2021, 1, 23)
	},
	{
		id: uuid(),
		img:'https://htmldemo.net/rusu/rusu/assets/img/product/product3.jpg',
		price: '40.00',
		name: 'Camera 1200',
		sale: '20.00',
		created_date: new Date()
	},
	{
		id: uuid(),
		img:'https://htmldemo.net/rusu/rusu/assets/img/product/product4.jpg',
		price: '50.00',
		name: 'Rog Strix',
		sale: '90.00',
		created_date: new Date()
	},
	{
		id: uuid(),
		img:'https://htmldemo.net/rusu/rusu/assets/img/product/product5.jpg',
		price: '60.00',
		name: 'Laptop Asus Gaming',
		sale: '30.00',
		created_date: new Date(2021, 2, 22)
	},
	{
		id:uuid(),
		img:'https://htmldemo.net/rusu/rusu/assets/img/product/product2.jpg',
		price: '30.00',
		name: 'Asus Tuf Gaming',
		sale: '50.00',
		created_date: new Date(2021, 4, 23)
	},
	{
		id:uuid(),
		img:'https://htmldemo.net/rusu/rusu/assets/img/product/product3.jpg',
		price: '40.00',
		name: 'Camera 1200',
		sale: '20.00',
		created_date: new Date(2021, 4, 23)
	},
	{
		id:uuid(),
		img:'https://htmldemo.net/rusu/rusu/assets/img/product/product4.jpg',
		price: '50.00',
		name: 'Rog Strix',
		sale: '90.00',
		created_date: new Date(2021, 4, 23)
	},
	{
		id:uuid(),
		img:'https://htmldemo.net/rusu/rusu/assets/img/product/product5.jpg',
		price: '60.00',
		name: 'Laptop Asus Gaming',
		sale: '30.00',
		created_date: new Date(2021, 4, 23)
	},

	{
		id:uuid(),
		img:'https://htmldemo.net/rusu/rusu/assets/img/product/product1.jpg',
		price:'50.00',
		name: 'Camera 1200',
		sale: '90.00',
		created_date: new Date(2022, 6, 24)

	},
	{
		id:uuid(),
		img:'https://htmldemo.net/rusu/rusu/assets/img/product/product2.jpg',
		price:'100.00',
		name: 'Dell Latitude',
		sale: '30.00',
		created_date: new Date(2022, 6, 24)
	},
	{
		id:uuid(),
		img:'https://htmldemo.net/rusu/rusu/assets/img/product/product3.jpg',
		price:'10.00',
		name: 'MSI Gaming',
		sale: '30.00',
		created_date: new Date(2022, 6, 24)
	},
	{
		id:uuid(),
		img:'https://htmldemo.net/rusu/rusu/assets/img/product/product4.jpg',
		price:'50.00',
		name: 'Asus Tuf Gaming',
		sale: '20.00',
		created_date: new Date(2022, 6, 24)
	},
	{
		id:uuid(),
		img:'https://htmldemo.net/rusu/rusu/assets/img/product/product5.jpg',
		price:'40.00',
		name: 'Rog Strix',
		sale: '30.00',
		created_date: new Date(2022, 6, 24)
	},
	{
		id:uuid(),
		img:'https://htmldemo.net/rusu/rusu/assets/img/product/product6.jpg',
		price:'50.00',
		name: 'AORUS ',
		sale: '89.00',
		created_date: new Date(2022, 6, 24)
	},
	{
		id:uuid(),
		img:'https://htmldemo.net/rusu/rusu/assets/img/product/product7.jpg',
		price:'50.00',
		name: 'ROG STRIX LC',
		sale: '30.00',
		created_date: new Date(2022, 6, 24)
	},
	{
		id:uuid(),
		img:'https://htmldemo.net/rusu/rusu/assets/img/product/product8.jpg',
		price:'50.00',
		name: 'TUF GAMING LC',
		sale: '30.00',
		created_date: new Date(2022, 6, 24)
	},
	{
		id:uuid(),
		img: 'https://htmldemo.net/rusu/rusu/assets/img/product/product1.jpg',
		price:'79.00',
		sale: '90.00',
		name: 'Camera 1200',
		created_date: new Date(2022, 1, 20)
	},
	{
		key:uuid(),
		img: 'https://htmldemo.net/rusu/rusu/assets/img/product/product2.jpg',
		price:'69.00',
		sale: '30.00',
		name: 'Dell Latitude',
		created_date: new Date(2022, 1, 20)
	},
	{
		id:uuid(),
		img: 'https://htmldemo.net/rusu/rusu/assets/img/product/product3.jpg',
		price:'59.00',
		name: 'MSI Gaming',
		sale: '$30.00',
		created_date: new Date(2022, 1, 20)
	},
	{
		id:uuid(),
		img: 'https://htmldemo.net/rusu/rusu/assets/img/product/product4.jpg',
		price:'49.00',
		name: 'Rog Strix',
		sale: '30.00',
		created_date: new Date(2022, 1, 20)
	},
	{
		id:uuid(),
		img: 'https://htmldemo.net/rusu/rusu/assets/img/product/product5.jpg',
		price:'39.00',
		name: 'Asus Tuf Gaming',
		sale: '30.00',
		created_date: new Date(2022, 1, 20)
	},
	{
		id:uuid(),
		img: 'https://htmldemo.net/rusu/rusu/assets/img/product/product6.jpg',
		price:'29.00',
		name: 'Rog Strix',
		sale: '89.00',
		created_date: new Date(2022, 1, 20)
	},
	{
		id:uuid(),
		img: 'https://htmldemo.net/rusu/rusu/assets/img/product/product7.jpg',
		price:'19.00',
		name: 'AORUS ',
		sale: '30.00',
		created_date: new Date(2022, 1, 20)
	},
	{
		id:uuid(),
		img: 'https://htmldemo.net/rusu/rusu/assets/img/product/product8.jpg',
		price:'9.00',
		name: 'TUF GAMING LC',
		sale: '30.00',
		created_date: new Date(2022, 1, 20)
	},
	{
		id:uuid(),
		img: 'https://htmldemo.net/rusu/rusu/assets/img/product/product9.jpg',
		price:'10.00',
		name: 'TUF GAMING LC',
		sale: '30.00',
		created_date: new Date(2022, 1, 20)
	},
	{
		id:uuid(),
		img: 'https://htmldemo.net/rusu/rusu/assets/img/product/product10.jpg',
		price:'11.00',
		name: 'TUF GAMING LC',
		sale: '30.00',
		created_date: new Date(2022, 1, 20)
	},
	{
		id:uuid(),
		img: 'https://htmldemo.net/rusu/rusu/assets/img/product/product11.jpg',
		price:'$9.00',
		name: 'TUF GAMING LC',
		sale: '30.00',
		created_date: new Date(2022, 1, 20)
	},
	{
		id:uuid(),
		img: 'https://htmldemo.net/rusu/rusu/assets/img/product/product4.jpg',
		price:'8.00',
		name: 'TUF GAMING LC',
		sale: '30.00',
		created_date: new Date(2022, 1, 20)
	},
]

export default products