import removeImg from "../images/icon-minus.svg";
import addImg from "../images/icon-plus.svg"
import cart from "../images/icon-cart.svg";
import { useState } from "react";
import { useGlobalContext } from "../context";

const CartAction = ({name, price, img}) => {
    const [amount, setAmount] = useState(0);
    const {setCartList, cartList} = useGlobalContext();
    
    function handleSubmit(e){
        e.preventDefault();
        
    }
    function increase(){
        setAmount(amount + 1)
    }
    function decrease(){
        if(amount > 0){
            setAmount(amount -1)
        }else{
            setAmount(0)
        }
    }
    function setInput(e){
        if(e.target.value){
            setAmount(parseInt(e.target.value))
        }else{
            setAmount(0)
        }
    }
    
    return ( 
        <div className="cart-action">
            <div className="amount-action">
                <button className="remove-btn"
                onClick={decrease}
                >
                    <img src={removeImg} alt="removeImg" />
                </button>
                <form  className="amount-form"
                onSubmit={handleSubmit}
                >
                    <label htmlFor="amount">{amount}</label>
                    <input 
                    value={amount}
                    onChange={setInput}
                    type="text" id="amount" />
                </form>
                <button className="remove-btn"
                onClick={increase}
                >
                    <img src={addImg} alt="removeImg" />
                </button>
            </div>
            <button className="add-to-cart-btn"
            onClick={()=>setCartList(
                [...cartList,{
                    id: Date.now().toString(),
                    img: img,
                    name: name,
                    amount: amount,
                    price: price
                } ])
                }
            >
                <img src={cart} alt="cartImg" />
                <span>Add to cart</span>
            </button>
        </div>
     );
}
 
export default CartAction;