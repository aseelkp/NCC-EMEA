import { Carousel } from "react-carousel-minimal";
import AchievementImgs from "../../assets/achievements/index";
import styles from "./styles.module.css";

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
    },
  ];

  return (
    <div className={styles.achivementWrapper}>
      {data.map((img, index) => (
        <img
          key={index}
          src={img.image}
          alt="Achievement"
          className={styles.achivementImg}
        />
      ))}
    </div>
  );
}

export default CarouselApp;
