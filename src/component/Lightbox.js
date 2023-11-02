import { useGlobalContext } from "../context";

import leftBtn from "../images/icon-previous.svg";
import rightBtn from "../images/icon-next.svg";

const Lightbox = () => {
    const {lightboxOpen, closeLightbox, imgs, index, setIndex, prevImg, nextImg} = useGlobalContext();
    const {img} = imgs[index];
    return (
        <>
            {lightboxOpen &&
             <div className="litbx-container">
                <div className="lightbox-container">
                <div className="active-img">
                    <img src={img} alt="active-img"/>
                </div>
                    <div className="img-track">
                    {imgs.map((item)=>{
                        return (
                            <img 
                            onClick={()=>setIndex(item.id - 1)}
                            className={`${item.id === index + 1 ? "active" :""}`} key= {item.id} src={item.img} alt="slide-img" /> 
                        )
                    
                    })}
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
                <button
                onClick={closeLightbox}
                className="close-litbx-btn">X</button>
             </div>
            }
        </> 
       
     );
}
 
export default Lightbox;