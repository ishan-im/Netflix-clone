import { useRouter } from "next/router";

import Modal from "react-modal";

import NavBar from "../../components/nav/Navbar";

import styles from "../../styles/Video.module.css";

import {getYoutubeVideosById} from '../../library/videos'

Modal.setAppElement("#__next");

export async function getStaticProps({params}) {

  const videoId = params.videoId;

  const videoArr = await getYoutubeVideosById(videoId);
  

  return {
    props: {
      video : videoArr.length > 0 ? videoArr[0] : {},
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10, // In seconds
  }
}


export async function getStaticPaths() {
  

  // Get the paths we want to pre-render based on posts
  const listOfVideos = ["mYfJxlgR2jw", "4zH5iYM4wJo", "KCPEHsAViiQ"];
  const paths = listOfVideos.map((videoId) => ({
    params: { videoId },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: blocking } will server-render pages
  // on-demand if the path doesn't exist.
  return { paths, fallback: 'blocking' }
}

const Video = ({video}) => {

  const {title,publishTime,description,channelTitle,statistics: {viewCount} = {viewCount : 0}} = video;

  const router = useRouter();

  return (
    <div className={styles.container}>
      <NavBar />
      <Modal
        className={styles.modal}
        isOpen={true}
        onRequestClose={() => router.back()}
        contentLabel="Video"
        overlayClassName={styles.overlay}
      >
        <iframe
          id="ytplayer"
          className={styles.videoPlayer}
          type="text/html"
          width="100%"
          height="360"
          src={`https://www.youtube.com/embed/${router.query.videoId}?autoplay=0&origin=http://example.com`}
          frameborder="0"
          rel='0'
        ></iframe>

        <div className={styles.modalBody}>

            <div className={styles.modalBodyContent}>

                <div className={styles.col1}>
                  <p className={styles.publishTime}>{publishTime}</p>
                  <p className={styles.title}>{title}</p>
                  <p className={styles.description}>{description}</p> 
                </div>

                <div className={styles.col2}>

                <p className={`${styles.subText} ${styles.subTextWrapper}`}>
                    <span className={styles.textColor}>Cast:</span>
                    <span className={styles.chanelTitle}>{` `}{channelTitle}</span>
                </p>

                <p className={`${styles.subText} ${styles.subTextWrapper}`}>
                    <span className={styles.textColor}>View Count: </span>
                    <span className={styles.chanelTitle}>{viewCount}</span>
                </p>
                </div>
            </div>

        </div>
      </Modal>
    </div>
  );
};

export default Video;
