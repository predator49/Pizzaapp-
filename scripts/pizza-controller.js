/*import { apiCall } from "./api-client.js";

async function loadPizza() {
  const URL = `https://raw.githubusercontent.com/predator49/Pizza-json-Data/master/pizza.json`;  // Use raw link

  //const promise = apiCall(URL);
  try{
  const response= await apiCall(URL);
  const obj = await response.json();
  printPizzas(obj.Vegetarian);
  }
  catch(error){
    throw err;
  }
  /*promise.then(function (response) {
    const pr = response.json();
    pr.then(function (data) {
        printPizzas(data.Vegetarian)
      console.log('Pizza Data', data);
    }).catch(function (err) {
      console.log('Invalid JSON', err);  // Fixed console.log
    });
  }).catch(function (err) {
    console.log('Unable to make API call', err);  // Fixed console.log
  }); */


/*loadPizza();
function printPizzas(pizzas){
    
//Loop and call printpizza
for(var i =0;i<pizzas.length;i++){
    printPizza(pizzas[i]);
}

}
function addToCart(){
  console.log("hi");
}
function printPizza(pizza){
  const cardDiv = document.createElement('div');
  cardDiv.className='card';
  cardDiv.style.width='18rem';
  const img= document.createElement('img');
  img.src=pizza.assets.menu[0].url
  img.className='card-img-top';
  const cardBodyDiv =document.createElement('div');
  cardBodyDiv.className='card-body';
  const h5=document.createElement('h5');
  h5.className='card-title';
  h5.innerText=pizza.name;
  const pTag=document.createElement('p');
  pTag.className='card-text';
  pTag.innerText=pizza['menu_description']+"&#8377;"+ pizza.price;
  const button = document.createElement('button');
  button.className='btn btn-primary';
  button.innerText='Add to Cart';
  button.addEventListener('click',addToCart);
  cardBodyDiv.appendChild(h5);
  cardBodyDiv.appendChild(pTag);
  cardBodyDiv.appendChild(button);
  cardBodyDiv.appendChild(img);
  cardBodyDiv.appendChild(cardBodyDiv);
    // design of one pizza
    /*const card=`<div class="card" style="width: 18rem;">
  <img src="${pizza.assets.menu[0].url}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${pizza.name}</h5>
    <p class="card-text">${pizza['menu_description']} <br/>Price &#8377 ${pizza.price}</p>
    <button onClick="${addToCart()}" class="btn btn-primary">Add to Cart</button>
  </div>
</div>`;*/
//const div = document.getElementById('pizzas');
//div.appendChild(cardDiv);*/
//div.innerHTML= div.innerHTML+ card;
import { apiCall } from "./api-client.js";
import cartOperations from "./cart-service.js";

async function loadPizza() {
  const URL = `https://raw.githubusercontent.com/predator49/Pizza-json-Data/master/pizza.json`;  // Use raw link

  try {
    const response = await apiCall(URL);
    const obj = await response.json();
    cartOperations.pizzas = obj.Vegetarian;  // Store pizzas in cartOperations
    printPizzas(obj.Vegetarian);
  } catch (error) {
    console.error('Error loading pizzas:', error);  // Proper error handling
  }
}

loadPizza();

function printPizzas(pizzas) {
  for (let i = 0; i < pizzas.length; i++) {
    printPizza(pizzas[i]);
  }
}
function addToCart() {
  const pizzaId = this.getAttribute('pizza-id');
  cartOperations.addInCart(Number(pizzaId));  // Add pizza to cart
  printCart();  // Refresh cart display
}

function printCart() {
  const pizzaInCart = cartOperations.viewAll();  // Retrieve cart items
  document.getElementById('carts').innerHTML = '';  // Clear previous cart items
  pizzaInCart.forEach(pizza => printCartItem(pizza));
 // Display each pizza
  document.getElementById('carts').appendChild(printTotal(pizzaInCart));
}

function printCartItem(pizza) {
  const pTag = document.createElement('p');
  pTag.innerText = `${pizza.name} ${pizza.price}`;
  document.getElementById('carts').appendChild(pTag);
  }
 function printTotal(pizzasInCart){
  const total=pizzasInCart.reduce((acc,pizza)=>acc+ parseFloat(pizza.price),0).toFixed(2);
const pTag=document.createElement('p'); 
pTag.innerText='Total Bill'+ total;
return pTag;
}

function printPizza(pizza) {
  const cardDiv = document.createElement('div');
  cardDiv.className = 'card';
  cardDiv.style.width = '18rem';

  const img = document.createElement('img');
  img.src = pizza.assets.menu[0].url;
  img.className = 'card-img-top';

  const cardBodyDiv = document.createElement('div');
  cardBodyDiv.className = 'card-body';

  const h5 = document.createElement('h5');
  h5.className = 'card-title';
  h5.innerText = pizza.name;

  const pTag = document.createElement('p');
  pTag.className = 'card-text';
  pTag.innerHTML = `${pizza.menu_description} <br/>Price &#8377;${pizza.price}`;  // Fix: innerHTML for HTML content

  const button = document.createElement('button');
  button.className = 'btn btn-primary';
  button.innerText = 'Add to Cart';
  button.setAttribute('pizza-id', pizza.id);
  button.addEventListener('click', addToCart); // Correct event listener

  // Append elements
  cardBodyDiv.appendChild(h5);
  cardBodyDiv.appendChild(pTag);
  cardBodyDiv.appendChild(button);
  cardDiv.appendChild(img);
  cardDiv.appendChild(cardBodyDiv);

  const div = document.getElementById('pizzas');
  div.appendChild(cardDiv);
}

