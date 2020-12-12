import React from "react";
import "./Header.css";
import {Search, ShoppingBasket} from "@material-ui/icons/";

function Header() {  
  return (
    <div className="header">
      
        <img
          className="header_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Logo"
        />
      

      <div className="header_Search">
        <input className="header_SearchInput" type="text" />
        <Search className="header_Search" />
      </div>

      <div className="header_nav">
        
          <div className="header_option">
            <span className="header_optionLineOne">Hello Guest</span>
            <span className="header_optionLineTwo">Sign In</span>
          </div>
        

        
          <div className="header_option">
            <span className="header_optionLineOne">Returns</span>
            <span className="header_optionLineTwo">& Orders</span>
          </div>
        
        

        <div className="header_option">
          <span className="header_optionLineOne">Your</span>
          <span className="header_optionLineTwo">Prime</span>
        </div>

        
          <div className="header_optionBasket">
            <ShoppingBasket />
            <span className="header_optionLineTwo header_basketCount">
              0
            </span>
          </div>
        
      </div>
    </div>
  );
}

export default Header;