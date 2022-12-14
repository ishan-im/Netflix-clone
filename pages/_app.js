import '../styles/globals.css'

import { useEffect, useState } from 'react';

import {magic} from '../library/magic-client';

import {useRouter} from 'next/router';

import Loading from '../components/loading/Loading';

function MyApp({ Component, pageProps }) {

  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);

useEffect(() => {

  (async ()=>{

    const isLoggedIn = await magic.user.isLoggedIn();

    if(isLoggedIn){

      // setIsLoading(false);

      router.push('/');

    }else{

      // setIsLoading(false);
      router.push('/login')

    }
  
}) ();

 

}, []);


useEffect(() => {

  const handleComplete = ()=>{
      setIsLoading(false);
  }

  router.events.on('routeChangeComplete', handleComplete);
  router.events.on('routeChangeError', handleComplete);

  return () => {
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
  }
}, 
[router]);


  return isLoading ? <Loading/> :<Component {...pageProps} />
}

export default MyApp
