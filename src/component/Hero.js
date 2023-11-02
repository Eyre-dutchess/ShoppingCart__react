import ImgSlide from "./ImgSlide";
import CartAction from "./CartAction";
import { useState } from "react";
import { useGlobalContext } from "../context";



const Hero = () => {
    const {imgs} = useGlobalContext();
    const [name, setName] = useState("Fall Limited edition");
    const [price, setPrice]= useState("125.00");
   
    console.log(imgs)
    return ( 
        <main>
            <ImgSlide />
            <div className="content-container">
                <div className="info-container">
                    <h6 className="brand">sneakers company</h6>
                    <h1 className="title">{name}</h1>
                    <p class="info">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
                    <div class="price">
                        <p class="cur-price" ><span>${price}</span> <span class="sale">50%</span></p>
                        <p class="ori-price">$250.00</p>
                    </div>
                </div>
                <CartAction img={imgs[0]} name={name} price={price}/>
            </div>
        </main>
     );
}
 
export default Hero;