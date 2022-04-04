import React, { useState, useEffect } from 'react';
import { addProductsToCart, getCart } from '../../services/cartManager';

const SingleVariant = ( {variant, productId}) => {

const [nombreProduit, setNombreProduit] = useState(1);
const [lineItems, setLineItems] = useState([]);

useEffect(() => {
  const item = {
    productId,
    variantId: variant.entityId,
    quantity: nombreProduit
  }
  setLineItems([item])
}, [nombreProduit])

// On ajoute un produit //
const incrementProduct = () => {
  setNombreProduit(nombreProduit + 1);
}

// On supprime un produit //
const decrementProduct = () => {
  if(nombreProduit <= 0) {
    return
  }
  setNombreProduit(nombreProduit - 1);
}

// On ajoute un article ou plus au panier
const addToCart = async () => {
  const cart = await getCart();

  console.log("Cart", cart);

  // Si le cart existe //
  if(cart[0].id != undefined) {
    addProductsToCart(lineItems, cart[0].id);
  }

  // Si le cart n'existe pas  => creation de panier //

}

// Changement Input //

const handleInput = (e) => {
  setNombreProduit(parseInt(e.target.value));
}


  return (
    <div className="variant-box">
    <img src={variant.defaultImage.url} />

    <div className="quantity-box">
      <div onClick={() => decrementProduct()} className='quantity-box-control quantity-box-decrement'><span>-</span></div>
      <input className='quantity-box-input' onChange={(e) => handleInput(e)} value={nombreProduit} />
      <div onClick={() => incrementProduct()} className='quantity-box-control quantity-box-increment'><span>+</span></div>
    </div>

    <div onClick={() => addToCart()} className="btn-addToCart">Ajouter au panier</div>

  </div>
  )
}

export default SingleVariant