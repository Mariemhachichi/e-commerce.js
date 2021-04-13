let carts = document.querySelectorAll('.add-cart')
 
let product = [
    {
        name :'robe',
        tag: 'grey',
        price: 25,
        inCart: 0,
    },
    {
        name :'pull',
        tag: 'bleu',
        price: 30,
        inCart: 0,
    },
    {
        name :'chemise',
        tag: 'rouge',
        price: 50,
        inCart: 0,
    }
]
// compteur panier 
for (let i=0; i<carts.length; i++){
    carts[i].addEventListener('click', (event) => {
        event.preventDefault()
        cartNumbers(product[i]);
    })
}

function cartNumbers () {
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);
    
    if(productNumbers){
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector ('.cart span').textContent = productNumbers + 1;
    }else{
        localStorage.setItem('cartNumbers', 1)
        document.querySelector ('.cart span').textContent = 1 ;
    }
}
// Sauvgarde le compteur panier
function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers')

    if(productNumbers){
        document.querySelector('.cart span').textContent = productNumbers
    }
}
onLoadCartNumbers()