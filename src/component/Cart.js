import { useGlobalContext } from "../context";
import trashImg from "../images/icon-delete.svg";

const Cart = () => {
    const {cartOpen, cartList, setCartList} = useGlobalContext();
    function removeCartItem(id){
        const newList = cartList.filter((item)=>item.id !==id)
        setCartList(newList)
    }
    return ( 
        <div className={`cart-container ${cartOpen? "active" :""} `}>
            <div className="cart-header">Cart</div>
            <div className={`cart-content ${cartList.length === 0 ? "empty" : "full"}`}>
                <p className="empty-text">Your cart is empty!</p>
                <div className="cart-full">
                    <ul className="cart-list">
                        {cartList.map((item)=>{
                            const {img, name, amount, id, price} = item;
                            return (
                                <li key={id} className="cart-item">
                                    <img src={img.img} alt="cart-img" className="cart-img" />
                                    <div className="cart-middle">
                                        <p className="cart-name">{name}</p>
                                        <p className="cart-price">${price} x {amount}</p>
                                        <p className="price-total">${price * amount}</p>
                                    </div>
                                    <button className="remove-cart-btn"
                                    onClick={()=>removeCartItem(id)}
                                    >
                                        <img src={trashImg} alt="remove-cart" />
                                    </button>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
     );
}
 
export default Cart;