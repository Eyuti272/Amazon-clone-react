import React, { useContext } from 'react'
import style from './Header.module.css'
import { Link } from "react-router-dom";
import languageflag from "../../assets/images/EN.png"
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import LowerHeader from './LowerHeader';
import { dataContext } from '../DataProvider/DataProvider';

const Header = () => {
  const [{basket},dispatch]=useContext(dataContext)
  const totalItem=basket?.reduce((amount,item)=>{
    return item.amount + amount
  },0)
  
  return (
    <section className={style["fixed"]}>
     <section className={style["header_container"]}>
       

    
          <div className={style["logo_container"]}>
            {/* logo */}
            <Link to="/"><img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon-logo" /></Link>
              {/* delivery */}
            <span>
                {/* icon */}
              <FaMapMarkerAlt size={20} />

            </span>
            <div className={style["delivery"]} >
                <p>Delivered to</p>
                <span>Ethiopia</span>
                
            </div>
          

          </div>
          
          <div className={style["search"]}>
              <select name="" id="">
                <option value="">All</option>
              </select>
            <input type="text" id='' name='' placeholder='Search Product' />
              {/* icon */}
          <FaSearch size={24} /> 

          </div>
          <div>
            <div className={style["language"]} >
                <img src={languageflag} alt="" />
                <select name="" id="">
                  <option value="">EN</option>
                </select>
            </div>
          </div>

          <div className={style["order_container"]}> 
            {/* resistration */}
            <Link to="/auth">
              <p>Sign In</p>
              <span>Accounts & Lists</span>
            </Link>
            {/* orders */}

            <Link to="/orders" >
              <p>Returns</p>
              <span>& Orders</span>

            </Link>
            <div className={style["cart"]}>
            <Link to="/cart">
                {/* icon */}
              <FaShoppingCart size={35} />
                <span>{totalItem}</span>
            </Link>
            </div>
          </div>
         
    
        </section>
         <LowerHeader/>
    
    
    </section>
  )
}

export default Header