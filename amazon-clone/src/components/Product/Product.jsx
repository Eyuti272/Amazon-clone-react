import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCards from './ProductCards'
import style from './Product.module.css'




function Product() {
    const[Products, setProducts]= useState([])

     useEffect(()=>{
          
            axios.get('https://fakestoreapi.com/products')

            .then((res)=>{
                // console.log(res.data);
                setProducts(res.data)

            }).catch((err)=>{
                console.log(err);
            })
             },[])
  return (
     
     <section className={style['product_container']}>
     {
        Products.map((proitem)=>(
           <ProductCards product={proitem} key={proitem.id} />
               ))

            }

          </section>
    
  )
}

export default Product

