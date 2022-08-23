import Card from "./Card";
import styles from './section-card.module.css'

const SectionCards = ({title,videos=[],size}) => {

return (

    <section className={styles.container}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.cardWrapper}>
        {videos.map((video, idx)=> <Card
        key={idx}
        id={idx}
        size={size}
        imageUrl={video.imageUrl}
      />)}
       
     </div>
    </section>
)

}


export default SectionCards;