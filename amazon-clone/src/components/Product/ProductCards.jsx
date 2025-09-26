import React from 'react'
import Rating from "@mui/material/Rating";
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat';
import style from './Product.module.css'
import {Link} from 'react-router-dom'


const ProductCards = ({product,flex,renderDesc}) => {
  const {title, price, image,rating,id,description}=product;
  return (
    <>
      <div className={`${style['cards_container']} ${flex ? style['product__flexed'] : ''}`}>



           <Link to={`/products/${id}`} >
               <img src={image} alt="productImage" />
              <div>
                <h3>{title}</h3>
                      {renderDesc && <div style={{maxWidth:"500px"}}>{description}</div>}               
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

              </Link>
            
           
      </div>
    
    </>
  )
}

export default ProductCards
