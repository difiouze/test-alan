import React, { useState, useEffect } from 'react';
import { addProductsToCart, getCart, createCart } from '../../services/cartManager';

const Variant = ( {variant, productId}) => {

const [productQuantity, setProductQuantity] = useState(0);
const [lineItems, setLineItems] = useState([]);

useEffect(() => {
  const item = {
    productId,
    variantId: variant.entityId,
    quantity: productQuantity
  }
  setLineItems([item])
}, [productQuantity])

// On ajoute un produit //
const incrementProduct = () => {
  setProductQuantity(productQuantity + 1);
}

// On supprime un produit //
const decrementProduct = () => {
  if(productQuantity <= 0) {
    return
  }
  setProductQuantity(productQuantity - 1);
}

// On ajoute un article ou plus au panier
const addToCart = async () => {
  const cart = await getCart();

  console.log("Cart", cart);
  console.log("Line Items", lineItems);

  // Si le cart existe //
  if(cart.length > 0) {
    addProductsToCart(lineItems, cart[0].id);
  }

  // Si le cart n'existe pas  => creation de panier //
  else {
    createCart(lineItems);
  }
}

// Changement Input //

const handleInput = (e) => {
  setProductQuantity(parseInt(e.target.value));
}

  return (
    <div className="variant-box">
    <img src={variant.defaultImage.url} />

    <div className="quantity-box">
      <div onClick={() => decrementProduct()} className='quantity-box-control quantity-box-decrement'><span>-</span></div>
      <input className='quantity-box-input' onChange={(e) => handleInput(e)} value={productQuantity} />
      <div onClick={() => incrementProduct()} className='quantity-box-control quantity-box-increment'><span>+</span></div>
    </div>

    <div onClick={() => addToCart()} className="btn-addToCart">Ajouter au panier</div>

  </div>
  )
}

export default Variant;