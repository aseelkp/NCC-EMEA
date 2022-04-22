import { Carousel } from 'react-carousel-minimal';
import Images from '../../assets/Gallery';




function CarouselApp() {
    const data = [
       {
         image: Images[0],
       },
       {
         image: Images[1],
         
       },
       {
         image: Images[2],
       },
       {
         image: Images[3],
       },
       {
         image: Images[4],
       },
       {
            image: Images[5]
       },
       {
            image: Images[6]
       },
       {
            image: Images[7]
       },
       {
            image: Images[8]
       }
       
     ];
   
     const captionStyle = {
       fontSize: '2em',
       fontWeight: 'bold',
     }
     const slideNumberStyle = {
       fontSize: '20px',
       fontWeight: 'bold',
     }
     return (
       <div className="App" >
         <div style={{ textAlign: "center" }}>
           <div style={{
             padding: "0 20px",
             width: "auto",
             height: "auto",
           }}>
             <Carousel          
               data={data}
               time={2000}
               width="850px"
               height="500px"
               captionStyle={captionStyle}
               radius="10px"
               slideNumber={true}
               slideNumberStyle={slideNumberStyle}
               captionPosition="bottom"
               automatic={true}
               dots={true}
               pauseIconColor="white"
               pauseIconSize="40px"
               slideBackgroundColor="darkgrey"
               slideImageFit="cover"
               style={{
                 textAlign: "center",
                 maxWidth: "850px",
                 maxHeight: "500px",
                 margin: "40px auto",
               }}
             />
           </div>
         </div>
       </div>
     );
   }
   
export default CarouselApp;