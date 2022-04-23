import { useEffect, useState } from "react";
import axios from "axios";
import AchievementImgs from "../../assets/achievements/index";
import styles from "./styles.module.css";
import apiEndpoints from "../../apiEndpoints";
import useApiCall from "../../utils/useApiCall";

function AchievementApp() {
  const [achievements] = useApiCall("achievement");
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
      {achievements.map((achievement) => (
        <img
          key={achievement.id}
          src={achievement.image}
          alt={achievement.title}
          className={styles.achivementImg}
        />
      ))}
    </div>
  );
}

export default AchievementApp;
