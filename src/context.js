import React, { useState, useContext, useEffect} from "react";

import {imgList} from "./imgData";
const AppContext = React.createContext();

const cartLS = () =>{
    let cartList = localStorage.getItem("cart-list");
    if(cartList){
       return(cartList = JSON.parse(localStorage.getItem("cart-list"))) 
    }else{
        return []
    }
}


const AppProvider = ({children}) =>{
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [cartOpen, setCartOpen] = useState(false);
  
    const [cartList, setCartList]= useState(cartLS());
    const [total, setTotal] = useState(0);

    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [index, setIndex] = useState(0);
    const [imgs, setImgs]= useState(imgList);

    useEffect(()=>{
        localStorage.setItem("cart-list", JSON.stringify(cartList))
    }, [cartList])
  
    
    useEffect(()=>{
        const totalList = cartList.map((item)=> item.amount);
        
        setTotal(totalList.reduce((a, b)=> a+b, 0))
    }, [cartList])

    const checkNumber = (number) => {
        if (number > imgs.length - 1) {
          return 0;
        }
        if (number < 0) {
          return imgs.length - 1;
        }
        return number;
      };
      const nextImg = () => {
        setIndex((index) => {
          let newIndex = index + 1;
          return checkNumber(newIndex);
        });
      };
      const prevImg = () => {
        setIndex((index) => {
          let newIndex = index - 1;
          return checkNumber(newIndex);
        });
      };
    function openSidebar(){
        setSidebarOpen(true)
    }
    function closeSidebar(){
        setSidebarOpen(false)
    }
    function openLightbox(){
        setLightboxOpen(true)
    }
    function closeLightbox(){
        setLightboxOpen(false)
    }
    

    return (<AppContext.Provider
        value ={{
            sidebarOpen, openSidebar, closeSidebar,
            cartOpen, setCartOpen,  
            cartList, setCartList, total,
            lightboxOpen, openLightbox, closeLightbox,
            imgs,index, setIndex, prevImg, nextImg,
            
        }}
    >

        {children}
    </AppContext.Provider>)
}

export const useGlobalContext =() =>{
    return (
        useContext(AppContext));
} 
export  {AppProvider, AppContext};