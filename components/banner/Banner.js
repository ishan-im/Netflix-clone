import Image from "next/image";

import styles from "./banner.module.css";

import playButton from '../../public/static/play.svg';

const Banner = ( { title, subTitle, imageUrl, videoId }) => {
 
 

  const handleOnPlay = () => {
    console.log('cliccked');
  };
  return (
    <div className={styles.container}>
      <div className={styles.leftWrapper}>
        <div className={styles.left}>
          <div className={styles.nseriesWrapper}>
            <p className={styles.firstLetter}>N</p>
            <p className={styles.series}>S E R I E S</p>
          </div>
          <h3 className={styles.title}>{title}</h3>
          <h3 className={styles.subTitle}>{subTitle}</h3>

          <div className={styles.playBtnWrapper}>
            <button className={styles.btnWithIcon} onClick={handleOnPlay}>
              <Image
                src={playButton}
                alt="Play icon"
                width="32px"
                height="32px"
              />
              <span className={styles.playText}>Play</span>
            </button>
          </div>
        </div>
      </div>
      <div
        className={styles.bannerImg}
        style={{
          backgroundImage: `url(${imageUrl}`,
          
        }}
      ></div>
    </div>
  );
};

export default Banner;