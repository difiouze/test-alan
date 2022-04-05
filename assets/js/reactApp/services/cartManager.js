// Get a Cart //

export async function getCart() {
  const cart = await fetch("/api/storefront/carts", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "same-origin",
  });
  return await cart.json();
}

// Add Product to Cart // 

export async function addProductsToCart(items, cartId) {
  const fetchProducts = await fetch(`/api/storefront/carts/${cartId}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    credentials: "same-origin",
    body: JSON.stringify({lineItems: items})
  });
  const response = await fetchProducts.json();
  console.log("ajout des produits au panier", response);
}

// Create a Cart

export async function createCart(items) {
  const cartCreation = await fetch("/api/storefront/carts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    credentials: "same-origin",
    body: JSON.stringify({lineItems: items})
  });
  const response = await cartCreation.json();
  console.log("Panier crée", response);
}