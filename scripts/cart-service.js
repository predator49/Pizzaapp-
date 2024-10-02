/*const cartOperations={pizzas:[],
    //addIncart:function()
    //es6 shorthand style 
addInCart(pizzaId){
const pizza=this.pizzas.find(function(currentPizza){
   return currentPizza.id==pizzaId;
pizza.isInCart=true;
console.log(this.pizza);
})
},
removeFromCart(){

},
viewAll(){

},
totalCompute(){

}
}
export default cartOperations;*/
const cartOperations = {
    pizzas: [],
  
    // Add a pizza to the cart using ES6 shorthand method
    addInCart(pizzaId) {
      const pizza = this.pizzas.find(currentPizza => currentPizza.id === pizzaId);
      if (pizza) {
        pizza.isInCart = true;  // Mark the pizza as added to the cart
        console.log(pizza);
      } else {
        console.log('Pizza not found');
      }
    },
  
    removeFromCart(pizzaId) {
      const pizza = this.pizzas.find(currentPizza => currentPizza.id === pizzaId);
      if (pizza) {
        pizza.isInCart = false;  // Remove pizza from cart
        console.log('Removed from cart:', pizza);
      } else {
        console.log('Pizza not found');
      }
    },
  
    viewAll() {
      console.log('Pizzas in cart:');
      return this.pizzas.filter(pizza => pizza.isInCart);
    },
  
    totalCompute() {
      const total = this.pizzas
        .filter(pizza => pizza.isInCart)
        .reduce((sum, pizza) => sum + pizza.price, 0);
      console.log('Total price:', total);
      return total;
    }
  };
  
  export default cartOperations;
  