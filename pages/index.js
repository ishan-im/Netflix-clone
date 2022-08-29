import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/banner/Banner'
import styles from '../styles/Home.module.css'

import NavBar from '../components/nav/Navbar'
import Card from '../components/card/Card'

import SectionCards from '../components/card/section-card'

import { getPopularVideos, getVideos } from '../library/videos'


export async function getServerSideProps() {

 

    const disneyVideos = await getVideos(`disney`);

    const productivityVideos = await getVideos(`productivity`);

    const travelVideos = await getVideos(`travel`);

    const popularVideos = await getPopularVideos();
    
    return {
        props: {
          disneyVideos, productivityVideos, travelVideos , popularVideos
        }
    }

}



export default function Home({disneyVideos, productivityVideos, travelVideos, popularVideos}) {




  return (
    <div>
      
      <NavBar/>
      <Banner
        title="The Sandman"
        subTitle="Dreams of Eternals"
        imageUrl="./static/the-sandman.jpg"
        videoId="4zH5iYM4wJo"
      />

    <div className={styles.sectionWrapper}>
    <SectionCards title='Disney' videos={disneyVideos} size='large'/> 
    <SectionCards title='Travel' videos={travelVideos} size='small'/>
    <SectionCards title='Productivity' videos={productivityVideos} size='medium'/> 
    <SectionCards title='Popular' videos={popularVideos} size='small'/> 
    </div>
     
   
    
    </div>
  );
}
