import React from 'react'
import Rating from "@mui/material/Rating";
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat';
import style from './Product.module.css'


const ProductCards = ({product}) => {
  const {title, price, image,rating,id}=product;
  return (
    <>
      <div className={style['cards_container']}>
           <a href="">
               <img src={image} alt="productImage" />
              <div>
                <h3>{title}</h3>
                   
                   <div className={style['rating']}>
                       {/* rating */}
                       <Rating value={rating} precision={0.1} />
                       
                       {/* count rating */}
                       <small>{rating.count}</small>
                   </div>
                   <div className={style['price']}>
                       {/* price */}
                      <CurrencyFormat amount={price}/>
                   </div>
                     <button>Add to cart</button>
                   
              </div>

              </a>
            
           
      </div>
    
    </>
  )
}

export default ProductCards
