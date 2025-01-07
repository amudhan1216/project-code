import { renderOrderSummary } from "./checkout/orderSummary.js";

import { renderPaymentSummary } from "./checkout/paymentsummary.js";
import { loadProducts, loadProductsFetch } from "../data/products.js";
import { loadPCart } from "../data/cart.js";
//import '../data/cart-class.js';
//import '../data/backend-practice.js';
//import {renderOrderSummary} from "./checkout/orderSummary.js";


 async function loadPage(){
   try{
    await  loadProductsFetch();
    const value=await new Promise((resolve)=>{
       loadPCart(()=>{
           resolve('value 3');
       });
   
   });
   } catch (error){
    console.log('Unexpected error. Please try again later.');
   }
   

    renderOrderSummary();
    renderPaymentSummary();

     
}
loadPage();
/*
Promise.all([
   loadProductsFetch(),
    new Promise((resolve)=>{
        loadPCart(()=>{
            resolve();
        });
    })

]).then((values)=>{
    console.log(values);
    renderOrderSummary();
    renderPaymentSummary();
});
*/
/*
new Promise((resolve)=>{
    
    loadProducts(()=>{
        
        resolve('value 1');
    });
}).then((value)=>{
    console.log(value);
    return new Promise((resolve)=>{
        loadPCart(()=>{
            resolve();
        });
    });
    
}).then(()=>{
    renderOrderSummary();
    renderPaymentSummary();
});
*/


/*
loadProducts(()=>{
    loadPCart(()=>{
    renderOrderSummary();
    renderPaymentSummary();
    });
    
 });
*/