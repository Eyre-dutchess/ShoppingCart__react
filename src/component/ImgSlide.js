

import leftBtn from "../images/icon-previous.svg";
import rightBtn from "../images/icon-next.svg";
import { useGlobalContext } from "../context";


const ImgSlide = () => {
    const {openLightbox, index, setIndex, imgs, prevImg, nextImg} = useGlobalContext();
    
    const {img} = imgs[index];

    
    return ( 
        <div className="img-container">
            <div className="active-img"  onClick={openLightbox}>
                    <img src={img} alt="active-img" onClick={openLightbox} />
                </div>
            <div className="img-track">  
                <img className="star-img" src={img} alt="slide-img" />
                <div className="extra-list">
                {imgs.map((item)=>{
                        return (
                            <img 
                            onClick={()=>setIndex(item.id - 1)}
                            className={`${item.id === index + 1 ? "active" :""}`} key= {item.id} src={item.img} alt="slide-img" /> 
                        )
                    
                    })}
                </div>
                
            </div>
            <button className="left-btn"
            onClick={prevImg}
            >
                <img src={leftBtn} alt="previous" />
            </button>
            <button className="right-btn"
            onClick={nextImg}
            >
                <img src={rightBtn} alt="next" />
            </button>
        </div>
     );
}
 
export default ImgSlide;