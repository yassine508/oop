class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}
class ShoppingCartItem {
    constructor(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }

    getTotalPrice() {
        return this.product.price * this.quantity;
    }
}
class ShoppingCart {
    constructor() {
        this.items = [];
    }

    addItem(product, quantity) {
        // Check if the item already exists in the cart
        const existingItem = this.items.find(item => item.product.id === product.id);
        if (existingItem) {
            // Update quantity if item is already in the cart
            existingItem.quantity += quantity;
        } else {
            // Add a new item if not already in the cart
            this.items.push(new ShoppingCartItem(product, quantity));
        }
    }

    removeItem(productId) {
        // Remove the item from the cart by id
        this.items = this.items.filter(item => item.product.id !== productId);
    }

    getTotal() {
        // Calculate the total price of all items in the cart
        return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
    }

    displayCart() {
        // Display the items in the cart
        this.items.forEach(item => {
            console.log(`${item.product.name} (x${item.quantity}) - $${item.getTotalPrice()}`);
        });
    }
}
const product1 = new Product(1, "Laptop", 1000);
const product2 = new Product(2, "Smartphone", 500);
const product3 = new Product(3, "Headphones", 150);

const cart = new ShoppingCart();

cart.addItem(product1, 2); 
cart.addItem(product2, 3); 
cart.addItem(product3, 1); 

console.log("Cart items:");
cart.displayCart();

console.log("Total Price: $" + cart.getTotal());

cart.removeItem(2);

console.log("Cart items after removal:");
cart.displayCart();

console.log("Total Price after removal: $" + cart.getTotal());
