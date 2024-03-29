import React from 'react';
import { ProductsContainer,
         ProductsHeading,
         ProductWrapper,
         ProductCard,
         ProductImg,
         ProductInfo,
         ProductTitle,
         ProductDesc,
         ProductsPrice,
         ProductButton } from './ProductsElements';
         

const Products = ({heading, data}) => {
    return (
        <ProductsContainer>
            <ProductsHeading>{heading}</ProductsHeading>
            <ProductWrapper>
                {data.map( (product, index) => {
                   return (
                       <ProductCard key={index}>
                           <ProductImg >
                               <img src={product.img} alt={product.alt} />
                           </ProductImg>
                           <ProductInfo>
                             <ProductTitle> { product.name } </ProductTitle>
                             <ProductDesc>{product.desc}</ProductDesc>
                             <ProductsPrice>{product.price}</ProductsPrice>
                             <ProductButton>{product.button}</ProductButton>
                           </ProductInfo>
                       </ProductCard>
                   );
                   })}
            </ProductWrapper>
        </ProductsContainer>
    )
}

export default Products;
