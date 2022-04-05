import React from "react";
import useVariantList from "../../services/hooks/useVariantList";
import Variant from '../Variant/Variant';
import AddProductsToCart from "../AddProductsToCart.js/AddProductsToCart";

const VariantsTable = ( ) => {

  const productId = parseInt($('[name="product_id"]').val());
  const {loading, error, data} = useVariantList(productId);

  if (loading) {
    return <span>{loading.message}</span>;
  }

  if (error) {
    return <span>{error}</span>;
  }
  
  console.log("Data: ", data);

  return (
    <>
    {data.site.product.variants.edges.length > 1 ? 
    <div>    
      <div>
      <span>Différents coloris:</span>
      <div className="variant-container">{data.site.product.variants.edges.map((variant)=> (
        <Variant key={variant.node.entityId} variant={variant.node} productId={productId}/>
      ))}</div>
    </div>
    <div>
      <AddProductsToCart />
    </div>
    </div> : 
    <span>Ce produit ne possède pas de variant</span>}
    </>
  )
}

export default VariantsTable;