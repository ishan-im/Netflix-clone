import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/banner/Banner'
import styles from '../styles/Home.module.css'

import NavBar from '../components/nav/Navbar'
import Card from '../components/card/Card'

export default function Home() {
  return (
    <div>
      
      <NavBar userName='Ishan'/>
      <Banner
        title="The Sandman"
        subTitle="Dreams of Eternals"
        imageUrl="./static/the-sandman.jpg"
      />
      <Card/>
    </div>
  );
}
