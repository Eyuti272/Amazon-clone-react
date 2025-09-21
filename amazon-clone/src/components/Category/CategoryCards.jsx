import React from 'react'
import style from './Category.module.css'
function CategoryCards({data}) {
    
  return (
    <>

    <div className={style['category']}>
    
      <a href="">
        <span>
           
            <h1>{data.title}</h1>
        </span>
        <img src={data.img} alt="" />
        
         <p>Shop Now</p>
      </a>

      </div>
    
    </>
  )
}

export default CategoryCards