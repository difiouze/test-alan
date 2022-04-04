import React from "react";
import useVariantList from "../../services/hooks/useVariantList";
import SingleVariant from '../singleVariant/SingleVariant';

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
    <div>
    <span>Différents coloris:</span>
      <div className="variant-container">{data.site.product.variants.edges.map((variant)=> (
        <SingleVariant key={variant.node.entityId} variant={variant.node} productId={productId}/>
      ))}</div>
    </div> 
    </>
  )
}

export default VariantsTable;