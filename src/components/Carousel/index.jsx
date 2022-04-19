import { Carousel } from 'react-carousel-minimal';
import AchievementImgs from '../../assets/achievements/index'

function CarouselApp() {
 const data = [
    {
      image: AchievementImgs[0],
    },
    {
      image: AchievementImgs[1],
      
    },
    {
      image: AchievementImgs[2],
    },
    {
      image: AchievementImgs[3],
    },
    {
      image: AchievementImgs[4],
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
            width="1000px"
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
              maxWidth: "100%",
              maxHeight: "100%",
              margin: "40px auto",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default CarouselApp;