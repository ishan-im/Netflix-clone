
import Image from "next/image";
import styles from './Card.module.css'

import { useState } from "react";

import { motion } from "framer-motion"

const Card = ({size="medium",imageUrl,id=`${Math.random()}`}) => {

    const classMap = {
        large: styles.largeItem,
        medium: styles.mediumItem,
        small: styles.smallItem
    }

    const [imgSrc,setImgSrc] = useState(imageUrl);


    const handleImageError = ()=>{

        console.log("Image Error");

        setImgSrc("https://images.unsplash.com/photo-1643208589889-0735ad7218f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80");

    }

    const scale = id === 0 ? {scaleY: 1.1} : {scale: 1.1}

    return(
        <div className={styles.container}>
            <motion.div className={`${classMap[size]} ${styles.imgMotionWrapper}`}
            whileHover={{
                ...scale}}>
            <Image
                src={imgSrc}
                alt="Card Image"
                layout="fill"
                onError={handleImageError}
                className={styles.cardImg}
            />
            </motion.div>
        </div>
    )

}


export default Card;    