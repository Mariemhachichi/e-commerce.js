let carts = document.querySelectorAll('.add-cart')
 
let products = [
    {
        name :'sweater',
        tag: 'Pink',
        price: 500.499,
        inCart: 0,
    },
    {
        name :'Dress',
        tag: 'black',
        price: 600.999,
        inCart: 0,
    },
    {
        name :'Jacket',
        tag: 'Red',
        price: 499.999,
        inCart: 0,
    }
]
// compteur panier 
for (let i=0; i<carts.length; i++){
    carts[i].addEventListener('click', (event) => {
        event.preventDefault()
        cartNumbers(products[i]);
        totalCost(products[i])
    })
}

// Sauvgarde le compteur panier
function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers')

    if(productNumbers){
        document.querySelector('.cart span').textContent = productNumbers
    }
}
onLoadCartNumbers()


function cartNumbers (product) {
    
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);
    
    if(productNumbers){
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector ('.cart span').textContent = productNumbers + 1;
    }else{
        localStorage.setItem('cartNumbers', + 1)
        document.querySelector ('.cart span').textContent = 1 ;
    }
    setItems(product);
}

//les Objet à l'intérieur de le produit
function setItems(product){
    let cartItems = localStorage.getItem('productsInCart')
    cartItems = JSON.parse(cartItems)

    if(cartItems != null){

        if(cartItems[product.tag] == undefined){
            cartItems = {
                ...cartItems,
                [product.tag] : product
            }
        }
        cartItems[product.tag].inCart += 1
    } else {
        product.inCart = 1;
        cartItems = {
        [product.tag]: product
    }
}
    
    localStorage.setItem("productsInCart", JSON.stringify
    (cartItems));
}
onLoadCartNumbers()

// totals
function totalCost(product){
    let cartCost = localStorage.getItem('totalCost')
   
    if(cartCost != null) {
        cartCost = parseInt(cartCost)
        localStorage.setItem("totalCost", cartCost + product.price)
    } else {
        localStorage.setItem("totalCost", product.price)
    }
}
// page carte
function dispayCart() {
    let cartItems = localStorage.getItem("productsInCart")
    cartItem = JSON.parse(cartItems)
    let productContainer = document.querySelector
    (".products-container")
    if ( cartItems  && productContainer){
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML +=  `
            <div class="product" >
            <img src="./img/${item.tag}.jpg">
            <span>${item.name}</span>
            </div>`
        })
    }
}
dispayCart()
