const app = Vue.createApp({
	data(){
		return{
			dropdownIsShown: false,
			home: "index.html",
			about: "about.html",
			products: "products.html",
			contact: "contact.html"
		}
	},

	methods: {
		toggleDropdown(){
			this.dropdownIsShown = !this.dropdownIsShown
		}
	}
})
app.mount('#app')