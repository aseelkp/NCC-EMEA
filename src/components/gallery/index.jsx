import React,{useState} from "react";
// import Images from "../../assets/Gallery/index";
import './index.css';
import CloseIcon from '@mui/icons-material/Close';
import Img1 from '../../assets/Gallery/1.jpg';
import Img2 from '../../assets/Gallery/2.jpg';
import Img3 from '../../assets/Gallery/3.jpg';
import Img4 from '../../assets/Gallery/4.jpg';
import Img5 from '../../assets/Gallery/5.jpg';
import Img6 from '../../assets/Gallery/6.jpg';
import Img7 from '../../assets/Gallery/7.jpg'
import Img8 from '../../assets/Gallery/8.jpg'
import Img9 from '../../assets/Gallery/9.jpg'
import { style } from "@mui/system";

const GalleryApp = () => {

    let photo =[
        {
            id:1,
            src:Img1,
        },
        {
            id:2,
            src:Img2,
        },
        {
            id:3,
            src:Img3,
        },
        {
            id:4,
            src:Img4
        }
    ];

    const [model , setModel] = useState(false);
    const [tempImg , setTempImg] = useState('');
    const getImg = (src) => {
        setTempImg(src);
        setModel(true);
    }


    return (
        <>
        <div className={model? "model open" : "model"}>
            <img src={tempImg} alt="" />
                <CloseIcon onClick={() => setModel(false)} />
        </div>
        <div className="gallery">
            {photo.map((item, index) => {
                console.log(item.src);
                return (
                    <div className="imgs" key={index} onClick={() => getImg(item.src) }>
                        <img src={item.src} alt="" style={{width : '100%'}}/>
                    </div>
                )
            })}
                    
        </div>
        </>
    );
}
export default GalleryApp;