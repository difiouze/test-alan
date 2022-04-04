import { gql, useQuery } from "@apollo/client";

const VARIANTS_LIST = gql`
  query productById($productId: Int!) {
    site {
      product(entityId: $productId) {
        entityId
        sku
        addToCartUrl
        name
        variants {
          edges {
            node {
              entityId
              defaultImage {
                url(width: 500, height: 500)
              }
              productOptions {
                edges {
                  node {
                    entityId
                    displayName
                  }
                }
              }
              prices {
                price {
                  ...MoneyFields
                }
                basePrice {
                  ...MoneyFields
                }
              }
              isPurchasable
            }
          }
        }
      }
    }
  }

  fragment MoneyFields on Money {
    value
    currencyCode
  }
`;

const useVariantList = (productId) => {
  return useQuery(VARIANTS_LIST, { variables: { productId } });
};

export default useVariantList;
