function Cart(loadFromStoragekey){

const cart ={ cartItems:undefined,

     loadFromStorage(){
        this.cartItems=JSON.parse(localStorage.getItem(loadFromStoragekey));
    if(!this.cartItems){
        this.cartItems= [{
            productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
            quantity:2,
            deliveryOptionId:'1'
        },{
            productId:'15b6fc6f-327a-4ec4-896f-486349e85a3d',
            quantity:1,
            deliveryOptionId:'2'
        }];
    }
    },
    
 saveToStorage(){
    localStorage.setItem(loadFromStoragekey,JSON.stringify(this.cartItems));
},

 addToCart(productId){

    let matchingItem;

        this.cartItems.forEach((cartitem) =>{
            if(productId===cartitem.productId){
                matchingItem=cartitem;
            }
        });

        if(matchingItem){
            matchingItem.quantity+=1;
        }
        else{
            this.cartItems.push({
                productId:productId,
                quantity:1,
                deliveryOptionId:'1'
            });

        }
        this.saveToStorage();
        
},

removeFromart(productId){
    const newCart=[];
    this.cartItems.forEach((cartItem) =>{
        if(cartItem.productId !==productId){
            newCart.push(cartItem);
        }
    });
    this.cartItemst=newCart;
    this.saveToStorage();

},


updateDeliveryOption(productId,deliveryOptionId){
    let matchingItem;

    this.cartItems.forEach((cartitem) =>{
        if(productId===cartitem.productId){
            matchingItem=cartitem;
        }
    });
    
    matchingItem.deliveryOptionId = deliveryOptionId;
    this.saveToStorage();
}

};
return cart;
}

const cart=Cart('cart');

const businesCart=Cart('cart-business');

cart.loadFromStorage(); 


businesCart.loadFromStorage(); 
console.log(cart);
console.log(businesCart);






